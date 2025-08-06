export default function MedicalStaffMobile() {
  const doctors = [
    {
      name: "Dra. Shereen Awuapara Flores",
      image: "/dra_shereen.png"
    },
    {
      name: "Dra. Esther Flores Mubarak", 
      image: "/dra_ester.png"
    },
    {
      name: "Dra. Nadia Awuapara Flores",
      image: "/dra_nadia.png"
    },
    {
      name: "Dra. Ariana Benavides",
      image: "/dra_ariana.png"
    }
  ]

  return (
    <section id="staff" className="py-16 bg-white">
      <div className="px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-medium mb-3 text-lg" style={{color: '#b7d778'}}>Conoce a nuestro</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#345114'}}>
            Staff Médico
          </h2>
        </div>

        {/* Scroll Horizontal de Doctores */}
        <div className="relative">
          {/* Indicador de scroll */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-500">
              ← Desliza para ver todos →
            </p>
          </div>

          {/* Container con scroll horizontal */}
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-6 px-4" style={{width: 'max-content'}}>
              {doctors.map((doctor, index) => (
                <div key={index} className="flex-shrink-0 text-center w-64">
                  {/* Doctor Image con forma especial */}
                  <div className="relative mb-6">
                    <div 
                      className="w-56 h-64 mx-auto relative overflow-hidden shadow-lg"
                      style={{
                        borderRadius: '40px 40px 15px 15px' // Forma especial adaptada para móvil
                      }}
                    >
                      <img
                        src={doctor.image}
                        alt={`Foto de ${doctor.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Doctor Name */}
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight px-2">
                    {doctor.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de posición (dots) */}
          <div className="flex justify-center space-x-2 mt-6">
            {doctors.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
                style={{backgroundColor: index === 0 ? '#b7d778' : undefined}}
              ></div>
            ))}
          </div>
        </div>

        {/* Call to Action - Opcional */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-6 mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Nuestro Equipo Profesional
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Contamos con especialistas altamente calificados para brindarte la mejor atención dental.
            </p>
            <div className="flex justify-center space-x-4 text-xs text-gray-500">
              <span>• Experiencia</span>
              <span>• Profesionalismo</span>
              <span>• Tecnología</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}