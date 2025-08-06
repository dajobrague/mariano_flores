'use client'

export default function Services() {
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg mb-4" style={{color: '#b7d778'}}>Conoce nuestros</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{color: '#345114'}}>
            Servicios
          </h1>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Images Grid */}
              <div className={`grid grid-cols-3 gap-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {service.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">{image.placeholder}</div>
                      <p className="text-xs">{image.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: '#345114'}}>
                  {service.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors cursor-pointer">
                  <span className="text-2xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}