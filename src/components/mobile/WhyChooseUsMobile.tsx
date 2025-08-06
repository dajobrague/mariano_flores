'use client'

export default function WhyChooseUsMobile() {
  return (
    <>
      {/* Benefits Section - Mobile */}
      <section id="why-choose-us" className="py-12 bg-white">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-6" style={{color: '#b7d778'}}>
              ¿Por qué elegirnos?
            </h2>
          </div>

          {/* Images Grid - Mobile */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {/* Top left image */}
            <div className="bg-gray-200 rounded-2xl h-32 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-2xl mb-1">🦷</div>
                <p className="text-xs">Imagen dental 1</p>
              </div>
            </div>
            
            {/* Top right image */}
            <div className="bg-gray-200 rounded-2xl h-32 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-2xl mb-1">🔬</div>
                <p className="text-xs">Imagen dental 2</p>
              </div>
            </div>
          </div>
          
          {/* Benefits List */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#b7d778'}}></div>
              <p className="text-gray-700 text-sm">
                <strong>Experiencia en odontología desde hace 4 generaciones.</strong>
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#b7d778'}}></div>
              <p className="text-gray-700 text-sm">
                <strong>Promovemos la salud dental de una manera ética.</strong>
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#b7d778'}}></div>
              <p className="text-gray-700 text-sm">
                <strong>Atención de calidad basada en la experiencia y en el conocimiento.</strong>
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#b7d778'}}></div>
              <p className="text-gray-700 text-sm">
                <strong>Amor por nuestra profesión.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section - Mobile */}
      <section id="history" className="py-12" style={{backgroundColor: '#4a7c59'}}>
        <div className="px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Historia
            </h2>
          </div>

          {/* History Cards - Horizontal Scroll */}
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 min-w-max px-2">
              {/* Card 1 */}
              <div className="bg-green-800 rounded-2xl p-6 text-white w-80 flex-shrink-0">
                <p className="text-sm leading-relaxed">
                  En 1920 se gradúa Mariano Flores Rodríguez tras terminar la carrera de Odontología en la Universidad Nacional Mayor de San Marcos.
                </p>
                <br />
                <p className="text-sm leading-relaxed">
                  En 1964 se funda el Colegio Odontológico del Perú, para lo cual Mariano Flores Rodríguez fue una pieza importante para su creación.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-green-800 rounded-2xl p-6 text-white w-80 flex-shrink-0">
                <p className="text-sm leading-relaxed">
                  Mariano Flores Rubio continuó el legado familiar, presidiendo la Sociedad Peruana de Prótesis Dental y Maxilofacial (1970), el Colegio Odontológico de Lima (1986), y el Colegio Odontológico del Perú (1992).
                </p>
                <br />
                <p className="text-sm leading-relaxed">
                  Fue cofundador de la Academia Internacional de Odontología Integral (AIO).
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-green-800 rounded-2xl p-6 text-white w-80 flex-shrink-0">
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

          {/* Scroll indicator */}
          <div className="text-center mt-4">
            <p className="text-white/70 text-xs">← Desliza para ver más →</p>
          </div>
        </div>
      </section>

      {/* Video Section - Mobile */}
      <section className="py-12 bg-white">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div 
            className="rounded-2xl overflow-hidden shadow-lg relative"
            style={{
              backgroundColor: '#4a7c59',
              minHeight: '250px'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-3">▶️</div>
                <h3 className="text-xl font-light opacity-80">video</h3>
                <p className="text-xs mt-2 opacity-60 px-4">Video placeholder - aquí irá el video del consultorio</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}