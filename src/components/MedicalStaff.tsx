export default function MedicalStaff() {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-medium mb-4 text-lg" style={{color: '#b7d778'}}>Conoce a nuestro</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#345114'}}>
            Staff Médico
          </h2>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {doctors.map((doctor, index) => (
            <div key={index} className="text-center">
              {/* Doctor Image with Special Shape */}
              <div className="relative mb-6">
                <div 
                  className="w-72 h-80 mx-auto relative overflow-hidden"
                  style={{
                    borderRadius: '60px 60px 20px 20px' // Special rounded shape like in the screenshot
                  }}
                >
                  {/* Doctor Image */}
                  <img
                    src={doctor.image}
                    alt={`Foto de ${doctor.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Doctor Name */}
              <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                {doctor.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}