'use client'

import { useState, useEffect, useCallback } from 'react'
import { getTestimonials, TestimonialData } from '../services/airtable'

// Component to render stars without hydration issues
function StarRating({ rating }: { rating: number }) {
  const stars = []
  for (let i = 0; i < rating; i++) {
    stars.push(
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )
  }
  return <div className="flex items-center gap-1 mb-4">{stars}</div>
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Datos de fallback en caso de error con Airtable
  const getFallbackTestimonials = useCallback((): TestimonialData[] => [
    {
      nombre: "Sarah Johnson",
      puntuacion: 5,
      resena: "Dr. Flores and his team are exceptional. The office is modern, clean, and the staff is incredibly professional. I've never had such a comfortable dental experience!"
    },
    {
      nombre: "Michael Chen",
      puntuacion: 5,
      resena: "Our whole family trusts Dr. Flores. He's gentle with our kids and takes time to explain everything. The technology they use is impressive - painless procedures!"
    },
    {
      nombre: "Emily Rodriguez",
      puntuacion: 5,
      resena: "My smile transformation exceeded all expectations. Dr. Flores is an artist! The veneers look completely natural and I couldn't be happier with the results."
    }
  ], [])

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true)
        const testimonialsData = await getTestimonials()
        setTestimonials(testimonialsData)
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
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No te fíes solo de nuestra palabra. Aquí tienes lo que nuestros pacientes 
            dicen sobre su experiencia con el Dr. Flores y nuestro equipo.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="text-gray-500">Cargando reseñas...</div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <div className="text-red-500 mb-4">{error}</div>
            <div className="text-gray-500">Mostrando reseñas predeterminadas</div>
          </div>
        )}

        {/* Testimonials Grid */}
        {!loading && (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id || index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                {/* Rating */}
                <StarRating rating={testimonial.puntuacion} />

                {/* Content */}
                <blockquote className="text-gray-600 mb-6 leading-relaxed">
                  &ldquo;{testimonial.resena}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden flex items-center justify-center">
                    {getClientImageUrl(testimonial) ? (
                      <img 
                        src={getClientImageUrl(testimonial)} 
                        alt={testimonial.nombre}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-2xl">👤</div>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.nombre}</div>
                    <div className="text-sm text-gray-600">Paciente</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Statistics */}
        {!loading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Pacientes Felices</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfacción del Paciente</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-600">Calificación Promedio</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}