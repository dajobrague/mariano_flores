'use client'

export default function ServicesMobile() {
  const services = [
    {
      title: "Rehabilitación Oral",
      description: "Restauración de la función y estética de la boca mediante la colocación de dientes dañados o perdidos.",
      images: [
        { placeholder: "📋", text: "Evaluación inicial" },
        { placeholder: "👨‍⚕️", text: "Procedimiento" },
        { placeholder: "🦷", text: "Resultado" }
      ]
    },
    {
      title: "Implantes",
      description: "Solución para reemplazar dientes perdidos, constituyendo un tornillo de titanio que se inserta en el hueso maxilar o mandibular.",
      images: [
        { placeholder: "🔬", text: "Análisis" },
        { placeholder: "💻", text: "Planificación" },
        { placeholder: "👨‍⚕️", text: "Cirugía" }
      ]
    },
    {
      title: "Periodoncia",
      description: "Diagnóstico, prevención y tratamiento de las enfermedades de las encías y las estructuras de soporte de los dientes.",
      images: [
        { placeholder: "📋", text: "Evaluación" },
        { placeholder: "👨‍⚕️", text: "Tratamiento" },
        { placeholder: "🦷", text: "Limpieza" }
      ]
    },
    {
      title: "Endodoncia",
      description: "Procedimiento dental que consiste en la eliminación de la pulpa dental cuando está dañada o infectada.",
      images: [
        { placeholder: "🔬", text: "Diagnóstico" },
        { placeholder: "💻", text: "Radiografías" },
        { placeholder: "👨‍⚕️", text: "Procedimiento" }
      ]
    },
    {
      title: "Ortodoncia",
      description: "Diagnóstico, prevención y tratamiento de problemas relacionados con la posición de los dientes y los maxilares.",
      images: [
        { placeholder: "📋", text: "Evaluación" },
        { placeholder: "👨‍⚕️", text: "Colocación" },
        { placeholder: "🦷", text: "Seguimiento" }
      ]
    },
    {
      title: "Odontopediatría",
      description: "Diagnóstico, prevención y tratamiento de problemas relacionados con la posición de los dientes y los maxilares.",
      images: [
        { placeholder: "🔬", text: "Evaluación infantil" },
        { placeholder: "💻", text: "Diagnóstico" },
        { placeholder: "👨‍⚕️", text: "Tratamiento" }
      ]
    }
  ]

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

        {/* Services Stack */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={service.title} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Service Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold" style={{color: '#345114'}}>
                    {service.title}
                  </h3>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Images Grid Mobile */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-3 gap-3">
                  {service.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-2xl mb-1">{image.placeholder}</div>
                        <p className="text-xs leading-tight">{image.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          ))}
        </div>

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