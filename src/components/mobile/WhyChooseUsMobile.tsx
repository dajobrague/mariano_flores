'use client'
import { useState, useRef, useEffect, useCallback } from 'react'

export default function WhyChooseUsMobile() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = useCallback(() => {
    setIsVideoPlaying(true)
    setIsPaused(false)
    // Auto-play when video becomes visible
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log('Error playing video:', error)
        })
      }
    }, 100)
  }, [])

  const handleTogglePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play().catch((error) => {
          console.log('Error playing video:', error)
        })
        setIsPaused(false)
      } else {
        videoRef.current.pause()
        setIsPaused(true)
      }
    }
  }, [isPaused])

  const handleCloseVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setIsVideoPlaying(false)
    setIsPaused(false)
  }, [])

  // Add event listeners to sync video state
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPaused(false)
    const handlePause = () => setIsPaused(true)
    const handleError = (error: Event) => {
      console.log('Video error:', error)
    }

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('error', handleError)

    return () => {
      if (video) {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
        video.removeEventListener('error', handleError)
      }
    }
  }, [isVideoPlaying])

  return (
    <>
      {/* Benefits Section */}
      <section id="why-choose-us" className="py-16 bg-white">
        <div className="max-w-sm mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8" style={{color: '#b7d778'}}>
              ¿Por qué elegirnos?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-left">
                <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#b7d778'}}></div>
                <p className="text-gray-700">
                  <strong>Experiencia en odontología desde hace 4 generaciones.</strong>
                </p>
              </div>
              
              <div className="flex items-start gap-4 text-left">
                <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#b7d778'}}></div>
                <p className="text-gray-700">
                  <strong>Promovemos la salud dental de una manera ética.</strong>
                </p>
              </div>
              
              <div className="flex items-start gap-4 text-left">
                <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#b7d778'}}></div>
                <p className="text-gray-700">
                  <strong>Amor por nuestra profesión.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="rounded-2xl h-32 overflow-hidden shadow-lg">
              <img 
                src="/por-que-elegirnos-1.png" 
                alt="Imagen dental 1" 
                className="w-full h-32 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="rounded-2xl h-32 overflow-hidden shadow-lg">
              <img 
                src="/por-que-elegirnos-2.png" 
                alt="Imagen dental 2" 
                className="w-full h-32 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-16" style={{backgroundColor: '#b7d778'}}>
        <div className="max-w-sm mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-white mb-4">Conoce nuestra</p>
            <h2 className="text-3xl font-bold text-white">
              Historia
            </h2>
          </div>

          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-green-800 rounded-2xl p-6 text-white">
              <p className="text-sm leading-relaxed">
                En 1920 se gradúa Mariano Flores Rodríguez tras terminar la carrera de Odontología en la Universidad Nacional Mayor de San Marcos.
              </p>
              <br />
              <p className="text-sm leading-relaxed">
                En 1964 se funda el Colegio Odontológico del Perú, para lo cual Mariano Flores Rodríguez fue una pieza importante para su creación.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-800 rounded-2xl p-6 text-white">
              <p className="text-sm leading-relaxed">
                Mariano Flores Rubio continuó el legado familiar, presidiendo la Sociedad Peruana de Prótesis Dental y Maxilofacial (1970), el Colegio Odontológico de Lima (1986), y el Colegio Odontológico del Perú (1992).
              </p>
              <br />
              <p className="text-sm leading-relaxed">
                Fue cofundador de la Academia Internacional de Odontología Integral (AIO).
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-green-800 rounded-2xl p-6 text-white">
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
      <section className="py-16 bg-white">
        <div className="max-w-sm mx-auto px-4">
          <div 
            className="rounded-2xl overflow-hidden shadow-2xl relative"
            style={{ height: '250px' }}
          >
            {!isVideoPlaying ? (
              // Custom overlay
              <div 
                className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center cursor-pointer group"
                onClick={handlePlayVideo}
              >
                <div className="text-center text-white">
                  {/* Logo */}
                  <div className="mb-4">
                    <img 
                      src="/white-logo.png" 
                      alt="Dr. Mariano Flores Rubio" 
                      className="h-12 w-auto mx-auto opacity-90 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Play Button */}
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:bg-white group-hover:bg-opacity-10 transition-all duration-300">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2"></div>
                  </div>
                  
                  {/* Text */}
                  <p className="text-sm font-light">Haz clic para reproducir</p>
                </div>
              </div>
            ) : (
              // Custom Video Player Container
              <div className="custom-video-player w-full h-full relative bg-black rounded-2xl overflow-hidden">
                {/* Native HTML5 Video */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  preload="metadata"
                  playsInline
                  muted={false}
                >
                  <source src="/video-web-horizontal.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                
                {/* Custom Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <button 
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                        onClick={handleTogglePlayPause}
                        title={isPaused ? "Reproducir" : "Pausar"}
                      >
                        {isPaused ? (
                          // Play icon
                          <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                        ) : (
                          // Pause icon
                          <div className="flex gap-0.5">
                            <div className="w-0.5 h-3 bg-white"></div>
                            <div className="w-0.5 h-3 bg-white"></div>
                          </div>
                        )}
                      </button>
                      <span className="text-xs font-medium">Dr. Mariano Flores Rubio</span>
                    </div>
                    <div className="text-xs opacity-80">
                      Nuestras instalaciones
                    </div>
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="absolute top-3 right-3">
                  <button 
                    className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-all"
                    onClick={handleCloseVideo}
                  >
                    <div className="text-white text-xs">×</div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}