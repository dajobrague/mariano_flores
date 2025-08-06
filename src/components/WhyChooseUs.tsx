'use client'

export default function WhyChooseUs() {
  return (
    <>
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images Side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Top left image - teeth with dental tool */}
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🦷</div>
                    <p className="text-sm">Imagen dental 1</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                {/* Top right image - dental prosthetics */}
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🔬</div>
                    <p className="text-sm">Imagen dental 2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{color: '#b7d778'}}>
                ¿Por qué elegirnos?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#b7d778'}}></div>
                  <p className="text-gray-700 text-lg">
                    <strong>Experiencia en odontología desde hace 4 generaciones.</strong>
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#b7d778'}}></div>
                  <p className="text-gray-700 text-lg">
                    <strong>Promovemos la salud dental de una manera ética.</strong>
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#b7d778'}}></div>
                  <p className="text-gray-700 text-lg">
                    <strong>Amor por nuestra profesión.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20" style={{backgroundColor: '#b7d778'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-white text-lg mb-4">Conoce nuestra</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Historia
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-green-800 rounded-3xl p-8 text-white">
              <p className="text-sm leading-relaxed">
                En 1920 se gradúa Mariano Flores Rodríguez tras terminar la carrera de Odontología en la Universidad Nacional Mayor de San Marcos.
              </p>
              <br />
              <p className="text-sm leading-relaxed">
                En 1964 se funda el Colegio Odontológico del Perú, para lo cual Mariano Flores Rodríguez fue una pieza importante para su creación.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-800 rounded-3xl p-8 text-white">
              <p className="text-sm leading-relaxed">
                Mariano Flores Rubio continuó el legado familiar, presidiendo la Sociedad Peruana de Prótesis Dental y Maxilofacial (1970), el Colegio Odontológico de Lima (1986), y el Colegio Odontológico del Perú (1992).
              </p>
              <br />
              <p className="text-sm leading-relaxed">
                Fue cofundador de la Academia Internacional de Odontología Integral (AIO).
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-green-800 rounded-3xl p-8 text-white">
              <p className="text-sm leading-relaxed">
                Esther Flores Mubarak, tercera generación de odontólogos, fue Presidenta Fundadora de AFONAJE, líder el Internacional College of Dentists (Perú) y la Asociación de exalumnas de la Facultad de Estomatología de la UPCH.
              </p>
              <br />
              <p className="text-sm leading-relaxed">
                La clínica familiar fue inaugurada en el año 2006.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="rounded-3xl overflow-hidden shadow-2xl relative"
            style={{
              backgroundColor: '#4a7c59',
              minHeight: '400px'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">▶️</div>
                <h3 className="text-3xl font-light opacity-80">video</h3>
                <p className="text-sm mt-4 opacity-60">Video placeholder - aquí irá el video del consultorio</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}