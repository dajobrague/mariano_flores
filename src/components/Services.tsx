'use client'

import { useState, useEffect, useCallback } from 'react'
import { getServicesByCategory, ServiceCategory, ServiceData } from '../services/airtable'

export default function Services() {
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

  // Función para renderizar servicios con slider si hay más de 3
  const renderServiceImages = (servicios: ServiceData[]) => {
    if (servicios.length <= 3) {
      return (
        <div className="grid grid-cols-3 gap-4">
          {servicios.map((servicio, index) => (
            <div key={servicio.id || index} className="text-center">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center mb-2">
                {getImageUrl(servicio) ? (
                  <img 
                    src={getImageUrl(servicio)} 
                    alt={servicio.servicio}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <div className="text-4xl">🦷</div>
                  </div>
                )}
              </div>
              <p className="text-sm font-medium text-gray-700">{servicio.servicio}</p>
            </div>
          ))}
        </div>
      )
    } else {
      // Implementar slider para más de 3 servicios
      return (
        <div className="grid grid-cols-3 gap-4">
          {servicios.slice(0, 3).map((servicio, index) => (
            <div key={servicio.id || index} className="text-center">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center mb-2">
                {getImageUrl(servicio) ? (
                  <img 
                    src={getImageUrl(servicio)} 
                    alt={servicio.servicio}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <div className="text-4xl">🦷</div>
                  </div>
                )}
              </div>
              <p className="text-sm font-medium text-gray-700">{servicio.servicio}</p>
            </div>
          ))}
        </div>
      )
    }
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg mb-4" style={{color: '#b7d778'}}>Conoce nuestros</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{color: '#345114'}}>
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
          <div className="text-center py-16">
            <div className="text-red-500 mb-4">{error}</div>
            <div className="text-gray-500">Mostrando servicios predeterminados</div>
          </div>
        )}

        {/* Services Grid */}
        {!loading && (
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={category.categoria} className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Images Grid */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {renderServiceImages(category.servicios)}
                </div>

                {/* Service Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: '#345114'}}>
                    {category.categoria}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Conoce más sobre nuestros servicios de {category.categoria.toLowerCase()}.
                  </p>
                  <div className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors cursor-pointer">
                    <span className="text-2xl">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}