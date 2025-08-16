'use client'
import { useState, useEffect, useRef } from 'react'

// YouTube API types
interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  destroy: () => void;
}

interface YouTubeEvent {
  target: YouTubePlayer;
}

declare global {
  interface Window {
    YT: {
      Player: new (element: HTMLElement, config: {
        height: string;
        width: string;
        videoId: string;
        playerVars: Record<string, number>;
        events: {
          onReady: (event: YouTubeEvent) => void;
        };
      }) => YouTubePlayer;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function WhyChooseUsMobile() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const playerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load YouTube API
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
      
      window.onYouTubeIframeAPIReady = () => {
        if (isVideoPlaying && playerRef.current) {
          initializePlayer()
        }
      }
    } else if (isVideoPlaying && playerRef.current) {
      initializePlayer()
    }
  }, [isVideoPlaying])

  const initializePlayer = () => {
    if (playerRef.current && window.YT) {
      new window.YT.Player(playerRef.current, {
        height: '250',
        width: '100%',
        videoId: '6VxikzfluYE',
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          cc_load_policy: 0,
          fs: 1,
          disablekb: 0
        },
        events: {
          onReady: (event: YouTubeEvent) => {
            event.target.playVideo()
          }
        }
      })
    }
  }

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
  }

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
            <div className="rounded-2xl h-32 overflow-hidden shadow-md">
              <img 
                src="/por-que-elegirnos-1.png" 
                alt="Imagen dental 1" 
                className="w-full h-32 object-cover"
              />
            </div>
            
            {/* Top right image */}
            <div className="rounded-2xl h-32 overflow-hidden shadow-md">
              <img 
                src="/por-que-elegirnos-2.png" 
                alt="Imagen dental 2" 
                className="w-full h-32 object-cover"
              />
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
            style={{ height: '250px' }}
          >
            {!isVideoPlaying ? (
              // Custom overlay - Mobile
              <div 
                className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center cursor-pointer group"
                onClick={handlePlayVideo}
              >
                <div className="text-center text-white">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:bg-white group-hover:bg-opacity-10 transition-all duration-300">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                  <h3 className="text-lg font-light mb-1">Conoce nuestro consultorio</h3>
                  <p className="text-xs opacity-80">Toca para reproducir</p>
                </div>
              </div>
            ) : (
              // Custom YouTube Player (no branding) - Mobile
              <div 
                ref={playerRef}
                className="w-full h-full"
                style={{ height: '250px' }}
              />
            )}
          </div>
        </div>
      </section>
    </>
  )
}