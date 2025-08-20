'use client'

import { useState, useEffect, useCallback } from 'react'
import { getServicesByCategory, ServiceCategory, ServiceData } from '../../services/airtable'

export default function ServicesMobile() {
  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Datos de fallback en caso de error con Airtable
  const getFallbackServices = useCallback((): ServiceCategory[] => [
    {
      categoria: "Rehabilitación Oral",
      servicios: [
        { categoria: "Rehabilitación Oral", servicio: "Evaluación inicial", orden: 1 },
        { categoria: "Rehabilitación Oral", servicio: "Procedimiento", orden: 2 },
        { categoria: "Rehabilitación Oral", servicio: "Resultado", orden: 3 }
      ]
    },
    {
      categoria: "Implantes",
      servicios: [
        { categoria: "Implantes", servicio: "Análisis", orden: 1 },
        { categoria: "Implantes", servicio: "Planificación", orden: 2 },
        { categoria: "Implantes", servicio: "Cirugía", orden: 3 }
      ]
    },
    {
      categoria: "Periodoncia",
      servicios: [
        { categoria: "Periodoncia", servicio: "Evaluación", orden: 1 },
        { categoria: "Periodoncia", servicio: "Tratamiento", orden: 2 },
        { categoria: "Periodoncia", servicio: "Limpieza", orden: 3 }
      ]
    }
  ], [])

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true)
        const categories = await getServicesByCategory()
        setServiceCategories(categories)
        setError(null)
      } catch (err) {
        console.error('Error al cargar servicios:', err)
        setError('Error al cargar servicios desde Airtable')
        // Usar datos de fallback
        setServiceCategories(getFallbackServices())
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [getFallbackServices])

  // Función para obtener la URL de la imagen o placeholder
  const getImageUrl = (serviceData: ServiceData): string => {
    if (serviceData.imagen && serviceData.imagen.length > 0) {
      return serviceData.imagen[0].url
    }
    return '' // Retorna vacío para usar placeholder
  }

  // Función para renderizar servicios en mobile
  const renderServiceImages = (servicios: ServiceData[]) => {
    const servicesToShow = servicios.slice(0, 3) // Mostrar máximo 3 en mobile
    
    return (
      <div className="grid grid-cols-3 gap-3">
        {servicesToShow.map((servicio, index) => (
          <div key={servicio.id || index} className="text-center">
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center mb-2">
              {getImageUrl(servicio) ? (
                <img 
                  src={getImageUrl(servicio)} 
                  alt={servicio.servicio}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              ) : (
                <div className="text-center text-gray-500 transform transition-transform duration-300 hover:scale-110">
                  <div className="text-2xl">🦷</div>
                </div>
              )}
            </div>
            <p className="text-xs leading-tight text-gray-600 font-medium">{servicio.servicio}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section id="services" className="py-12 bg-white">
      <div className="px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-base mb-3" style={{color: '#b7d778'}}>Conoce nuestros</p>
          <h1 className="text-3xl font-bold" style={{color: '#345114'}}>
            Servicios
          </h1>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="text-gray-500">Cargando servicios...</div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-8">
            <div className="text-red-500 mb-2 text-sm">{error}</div>
            <div className="text-gray-500 text-xs">Mostrando servicios predeterminados</div>
          </div>
        )}

        {/* Services Stack */}
        {!loading && (
          <div className="space-y-8">
            {serviceCategories.map((category, index) => (
              <div key={category.categoria} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Service Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold" style={{color: '#345114'}}>
                      {category.categoria}
                    </h3>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Conoce más sobre nuestros servicios de {category.categoria.toLowerCase()}.
                  </p>
                </div>

                {/* Images Grid Mobile */}
                <div className="px-6 pb-6">
                  {renderServiceImages(category.servicios)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-3" style={{color: '#345114'}}>
              ¿Necesitas más información?
            </h3>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              Contáctanos para una consulta personalizada y conoce el mejor tratamiento para ti.
            </p>
            <a
              href="tel:+51913080814"
              className="inline-flex items-center space-x-2 px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 hover:opacity-90"
              style={{backgroundColor: '#b7d778'}}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Llamar ahora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}