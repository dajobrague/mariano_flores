'use client'

import Link from 'next/link'
import { FaMicroscope, FaHeart, FaUserMd, FaTrophy } from 'react-icons/fa'
import { useState, useEffect, useCallback, useRef } from 'react'
import { getBanners, BannerData } from '../services/airtable'

export default function HeroSection() {
  // Datos de fallback (slide original)
  const getFallbackSlides = useCallback(() => [
    {
      id: 'original',
      banner: undefined, // Usará la imagen original
      orden: 0
    }
  ], [])

  const [banners, setBanners] = useState<BannerData[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [fadeOpacity, setFadeOpacity] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const currentSlideRef = useRef(0)
  const isTransitioningRef = useRef(false)
  const FADE_DURATION_MS = 500

  // Obtener banners de Airtable
  useEffect(() => {
    console.log('HeroSection - Starting to fetch banners...')
    const fetchBanners = async () => {
      try {
        console.log('HeroSection - Calling getBanners()...')
        const bannersData = await getBanners()
        console.log('HeroSection - Banners received from Airtable:', bannersData)
        
        // Si no hay banners de Airtable, usar solo el slide original
        if (!bannersData || bannersData.length === 0) {
          console.log('HeroSection - No banners found, using only original slide')
          setBanners(getFallbackSlides())
          setCurrentSlide(0)
          setIsLoading(false)
          return
        }
        
        // Orden solicitado: primero el banner 0, luego el hero original, luego el resto de banners (2 en adelante)
        const firstBanner = bannersData[0] ? [bannersData[0]] : []
        const remainingBanners = bannersData.length > 1 ? bannersData.slice(1) : []
        const allSlides = [
          ...firstBanner,
          ...getFallbackSlides(),
          ...remainingBanners
        ]
        console.log('HeroSection - All slides combined:', allSlides)
        setBanners(allSlides)
        setCurrentSlide(0)
        currentSlideRef.current = 0
        setIsLoading(false)
      } catch (err) {
        console.error('HeroSection - Error al cargar banners:', err)
        console.error('HeroSection - Error details:', JSON.stringify(err, null, 2))
        // Usar solo el slide original
        const fallbackSlides = getFallbackSlides()
        console.log('HeroSection - Using fallback slides:', fallbackSlides)
        setBanners(fallbackSlides)
        setCurrentSlide(0)
        currentSlideRef.current = 0
        setIsLoading(false)
      }
    }

    fetchBanners()
  }, [getFallbackSlides])

  // Sincronizar ref del slide actual
  useEffect(() => {
    currentSlideRef.current = currentSlide
  }, [currentSlide])

  // Función para transicionar con fade
  const goToSlide = useCallback((nextIndex: number) => {
    if (isTransitioningRef.current || nextIndex === currentSlideRef.current) return
    isTransitioningRef.current = true
    setFadeOpacity(0)
    const timeoutId = setTimeout(() => {
      setCurrentSlide(nextIndex)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setFadeOpacity(1)
          isTransitioningRef.current = false
        })
      })
    }, FADE_DURATION_MS)

    return () => clearTimeout(timeoutId)
  }, [])

  // Auto-advance slideshow cada 5 segundos (solo cuando haya banners cargados)
  useEffect(() => {
    if (banners.length <= 1) return
    const interval = setInterval(() => {
      const next = (currentSlideRef.current + 1) % banners.length
      goToSlide(next)
    }, 5000)
    return () => clearInterval(interval)
  }, [banners.length, goToSlide])

  // Primer fade al terminar carga de banners
  useEffect(() => {
    if (!isLoading && banners.length > 0) {
      setFadeOpacity(0)
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setFadeOpacity(1))
      })
      return () => cancelAnimationFrame(id)
    }
  }, [isLoading, banners.length])

  // Función para renderizar el slide actual
  const renderCurrentSlide = () => {
    console.log('HeroSection - renderCurrentSlide:', { 
      bannersLength: banners.length, 
      currentSlide, 
      banners: banners.map(b => ({ id: b.id, hasBanner: !!b.banner }))
    })

    if (banners.length === 0) {
      // Loading state - mostrar slide original
      console.log('HeroSection - Showing original slide (no banners loaded)')
      return renderOriginalSlide()
    }

    const currentBanner = banners[currentSlide]
    console.log('HeroSection - Current banner:', { currentBanner, currentSlide })
    
    // Si el slide actual es el hero original o no tiene banner, mostrar el hero completo original
    if (currentBanner?.id === 'original' || !currentBanner?.banner || currentBanner.banner.length === 0) {
      console.log('HeroSection - Showing original slide (first slide or no banner)')
      return renderOriginalSlide()
    }

    // Para slides de Airtable, mostrar solo la imagen
    console.log('HeroSection - Showing image slide:', currentBanner.banner[0].url)
    return renderImageSlide(currentBanner.banner[0].url)
  }

  // Slide original completo (hero actual)
  const renderOriginalSlide = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
        {/* Content */}
        <div className="text-left relative flex flex-col justify-start h-full min-h-[400px] pt-16">
          {/* Decorative dots pattern */}
          <div className="absolute -top-8 -left-8 grid grid-cols-8 gap-2 opacity-30">
            {/* Fixed dots to avoid hydration mismatch */}
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8" style={{color: '#2e7d32'}}>
            Dientes Sanos
          </h1>
          
          <p className="text-xl mb-8 leading-relaxed" style={{color: '#4a6741'}}>
            Programa tu cita ahora mismo
          </p>

          <div className="mb-8">
            <Link
              href="#appointment"
              className="text-white px-12 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl hover:opacity-90 inline-block"
              style={{backgroundColor: '#2e7d32'}}
            >
              Agendar Ahora
            </Link>
          </div>
        </div>

        {/* Hero Image - Original */}
        <div className="relative h-full min-h-[450px] lg:min-h-[500px]">
          <div className="absolute inset-0 flex items-end justify-center">
            <img
              src="/hero_image.png"
              alt="Dental Implant Illustration - Healthy Teeth"
              className="w-full h-full object-contain object-bottom"
              style={{maxHeight: 'calc(75vh - 60px)'}}
            />
          </div>
        </div>
      </div>
    </div>
  )

  // Slide de imagen de Airtable (cover a ancho/alto completo del contenedor)
  const renderImageSlide = (imageUrl: string) => (
    <div className="relative w-full" style={{ height: 'calc(85vh - 50px)' }}>
      <img
        src={imageUrl}
        alt="Banner slide"
        className="w-full h-full object-cover"
      />
    </div>
  )

  if (isLoading) {
    // Reservar espacio sin mostrar el hero original para evitar el flash inicial
    return (
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          background: 'transparent',
          minHeight: 'calc(85vh - 50px)'
        }}
      >
        <div className="w-full h-full" />
      </section>
    )
  }

  return (
    <section 
      className="relative overflow-hidden flex items-center" 
      style={{
        background: banners[currentSlide]?.id === 'original' ? `linear-gradient(to bottom right, #b7d778, #a5d058)` : 'transparent',
        minHeight: 'calc(85vh - 50px)' // Much larger hero - almost full viewport
      }}
    >
      {/* Slideshow Content con fade */}
      <div className="relative w-full h-full" style={{ transition: 'opacity 700ms ease', opacity: fadeOpacity }}>
        {renderCurrentSlide()}
      </div>

      {/* Controles laterales e indicadores - Solo si hay más de una imagen */}
      {banners.length > 1 && (
        <>
          {/* Flecha izquierda */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => goToSlide((currentSlideRef.current - 1 + banners.length) % banners.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition"
          >
            <span className="sr-only">Anterior</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M15.78 3.22a.75.75 0 010 1.06L9.06 11l6.72 6.72a.75.75 0 11-1.06 1.06l-7.25-7.25a.75.75 0 010-1.06l7.25-7.25a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Flecha derecha */}
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => goToSlide((currentSlideRef.current + 1) % banners.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition"
          >
            <span className="sr-only">Siguiente</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M8.22 20.78a.75.75 0 010-1.06L14.94 13 8.22 6.28a.75.75 0 111.06-1.06l7.25 7.25a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-110' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Features Section - Solo mostrar en slide original */}
      {banners[currentSlide]?.id === 'original' && (
        <section className="bg-gray-100 border-t border-gray-200 absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 py-4" style={{position: 'relative'}}>
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center py-8 px-6" style={{position: 'relative'}}>
                <div className="mb-4 p-3 rounded-full bg-gray-50" style={{color: '#345114'}}>
                  <FaMicroscope className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-medium leading-tight max-w-[200px]" style={{color: '#345114'}}>Atención de calidad basada en la experiencia y en el conocimiento.</h3>
                {/* Rounded divider line */}
                <div className="hidden md:block absolute right-0 top-4 bottom-4 w-1" style={{
                  backgroundColor: '#345114',
                  borderRadius: '2px'
                }}></div>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center py-8 px-6" style={{position: 'relative'}}>
                <div className="mb-4 p-3 rounded-full bg-gray-50" style={{color: '#345114'}}>
                  <FaHeart className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-medium leading-tight max-w-[200px]" style={{color: '#345114'}}>Promovemos la salud dental de una manera ética.</h3>
                {/* Rounded divider line */}
                <div className="hidden md:block absolute right-0 top-4 bottom-4 w-1" style={{
                  backgroundColor: '#345114',
                  borderRadius: '2px'
                }}></div>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center py-8 px-6" style={{position: 'relative'}}>
                <div className="mb-4 p-3 rounded-full bg-gray-50" style={{color: '#345114'}}>
                  <FaUserMd className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-medium leading-tight max-w-[200px]" style={{color: '#345114'}}>Amor por nuestra profesión.</h3>
                {/* Rounded divider line */}
                <div className="hidden md:block absolute right-0 top-4 bottom-4 w-1" style={{
                  backgroundColor: '#345114',
                  borderRadius: '2px'
                }}></div>
              </div>
              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center py-8 px-6">
                <div className="mb-4 p-3 rounded-full bg-gray-50" style={{color: '#345114'}}>
                  <FaTrophy className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-medium leading-tight max-w-[200px]" style={{color: '#345114'}}>Experiencia en odontología desde hace 4 generaciones.</h3>
              </div>
            </div>
          </div>
        </section>
      )}

    </section>
  )
}