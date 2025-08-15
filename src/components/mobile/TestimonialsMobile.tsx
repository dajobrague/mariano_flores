'use client'

import { useState, useEffect, useCallback } from 'react'
import { getTestimonials, TestimonialData } from '../../services/airtable'

// Component to render stars without hydration issues
function StarRating({ rating }: { rating: number }) {
  const stars = []
  for (let i = 0; i < rating; i++) {
    stars.push(
      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  }
  return <div className="flex justify-center space-x-1">{stars}</div>
}

export default function TestimonialsMobile() {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Datos de fallback en caso de error con Airtable
  const getFallbackTestimonials = useCallback((): TestimonialData[] => [
    {
      nombre: "Juan D.",
      puntuacion: 5,
      resena: "Excelente atención. Todo puntual y ordenado, recomendado este centro mi vecina."
    },
    {
      nombre: "María S.",
      puntuacion: 5,
      resena: "Excelente atención. Todo puntual y ordenado, recomendado este centro mi vecina."
    },
    {
      nombre: "Carlos R.",
      puntuacion: 5,
      resena: "Excelente atención. Todo puntual y ordenado, recomendado este centro mi vecina."
    }
  ], [])

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true)
        const testimonialsData = await getTestimonials()
        setTestimonials(testimonialsData.slice(0, 3)) // Limitar a 3 para el diseño mobile
        setError(null)
      } catch (err) {
        console.error('Error al cargar reseñas:', err)
        setError('Error al cargar reseñas desde Airtable')
        // Usar datos de fallback
        setTestimonials(getFallbackTestimonials())
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [getFallbackTestimonials])

  // Función para obtener la URL de la imagen del cliente o usar placeholder
  const getClientImageUrl = (testimonial: TestimonialData): string => {
    if (testimonial.imagen_cliente && testimonial.imagen_cliente.length > 0) {
      return testimonial.imagen_cliente[0].url
    }
    return '' // Retorna vacío para usar placeholder
  }

  return (
    <>
      {/* Main Testimonials Section - Mobile */}
      <section id="testimonials" className="py-12 bg-white">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4" style={{color: '#b7d778'}}>
              ¿Qué dicen de nosotros?
            </h1>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <div className="text-gray-500">Cargando reseñas...</div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-8">
              <div className="text-red-500 mb-2 text-sm">{error}</div>
              <div className="text-gray-500 text-xs">Mostrando reseñas predeterminadas</div>
            </div>
          )}

          {/* Testimonials Stack - Mobile */}
          {!loading && (
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id || index} className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                  {/* User Icon/Image */}
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
                    {getClientImageUrl(testimonial) ? (
                      <img 
                        src={getClientImageUrl(testimonial)} 
                        alt={testimonial.nombre}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    )}
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">{testimonial.nombre}</h3>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    &quot;{testimonial.resena}&quot;
                  </p>
                  
                  {/* Star Rating */}
                  <StarRating rating={testimonial.puntuacion} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Section - Mobile */}
      <section className="py-12 text-white" style={{backgroundColor: '#1b2839'}}>
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-lg font-medium mb-4">
              Sonríe como siempre habías soñado
            </p>
            
            <button 
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full max-w-xs"
              onClick={() => {
                const appointmentSection = document.getElementById('appointment');
                if (appointmentSection) {
                  const headerHeight = 120; // Account for sticky header
                  const elementPosition = appointmentSection.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Agenda ahora
            </button>
          </div>
        </div>
      </section>
    </>
  )
}