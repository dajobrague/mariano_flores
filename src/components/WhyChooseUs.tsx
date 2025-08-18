'use client'
import { useState } from 'react'
import ReactPlayer from 'react-player'

export default function WhyChooseUs() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
  }

  return (
    <>
      {/* Benefits Section */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images Side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Top left image - teeth with dental tool */}
                <div className="rounded-2xl h-64 overflow-hidden shadow-lg">
                  <img 
                    src="/por-que-elegirnos-1.png" 
                    alt="Imagen dental 1" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                {/* Top right image - dental prosthetics */}
                <div className="rounded-2xl h-64 overflow-hidden shadow-lg">
                  <img 
                    src="/por-que-elegirnos-2.png" 
                    alt="Imagen dental 2" 
                    className="w-full h-64 object-cover"
                  />
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
            style={{ height: '400px' }}
          >
            {!isVideoPlaying ? (
              // Custom overlay
              <div 
                className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center cursor-pointer group"
                onClick={handlePlayVideo}
              >
                <div className="text-center text-white">
                  <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white group-hover:bg-opacity-10 transition-all duration-300">
                    <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-2"></div>
                  </div>
                  <h3 className="text-2xl font-light mb-2">Conoce nuestro consultorio</h3>
                  <p className="text-sm opacity-80">Haz clic para reproducir</p>
                </div>
              </div>
            ) : (
              // ReactPlayer - Custom video player without YouTube branding
              <ReactPlayer
                url="https://www.youtube.com/watch?v=6VxikzfluYE"
                width="100%"
                height="400px"
                playing={true}
                controls={true}
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      rel: 0,
                      showinfo: 0
                    }
                  }
                }}
              />
            )}
          </div>
        </div>
      </section>
    </>
  )
}