'use client'

import Link from 'next/link'
import { FaMicroscope, FaHeart, FaUserMd, FaTrophy } from 'react-icons/fa'
import { useState, useEffect, useCallback } from 'react'
import { getBanners, BannerData } from '../../services/airtable'

export default function HeroSectionMobile() {
  // Datos de fallback (slide original)
  const getFallbackSlides = useCallback(() => [
    {
      id: 'original',
      banner: undefined, // Usará la imagen original
      orden: 0
    }
  ], [])

  const [banners, setBanners] = useState<BannerData[]>(getFallbackSlides())
  const [currentSlide, setCurrentSlide] = useState(0)
  const [fadeOpacity, setFadeOpacity] = useState(1)

  // En móvil: forzar solo el hero original (sin slideshow)
  useEffect(() => {
    setBanners(getFallbackSlides())
  }, [getFallbackSlides])

  // Auto-advance slideshow cada 5 segundos
  useEffect(() => {
    if (banners.length <= 1) return // No hacer slideshow si solo hay una imagen

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000) // 5 segundos

    return () => clearInterval(interval)
  }, [banners.length])

  // Fade-in en cambio de slide
  useEffect(() => {
    setFadeOpacity(0)
    const id = setTimeout(() => setFadeOpacity(1), 0)
    return () => clearTimeout(id)
  }, [currentSlide])

  // En móvil siempre renderizar el hero original
  const renderCurrentSlide = () => {
    return renderOriginalSlide()
  }

  // Slide original completo (hero actual móvil)
  const renderOriginalSlide = () => (
    <div className="w-full px-4 pt-8 pb-16">
      {/* Contenido Principal */}
      <div className="text-center relative">
        {/* Decorative dots pattern - Menor cantidad para móvil */}
        <div className="absolute top-0 left-4 grid grid-cols-4 gap-2 opacity-30">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 mt-8" style={{color: '#2e7d32'}}>
          Dientes Sanos
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg sm:text-xl mb-8 leading-relaxed px-4" style={{color: '#4a6741'}}>
          Programa tu cita ahora mismo
        </p>

        {/* Hero Image - Optimizada para móvil */}
        <div className="relative mb-8 h-64 sm:h-80 flex items-center justify-center">
          <img
            src="/hero_image.png"
            alt="Dental Implant Illustration - Healthy Teeth"
            className="w-full h-full object-contain"
            style={{maxHeight: '300px'}}
          />
        </div>

        {/* CTA Button */}
        <div className="mb-8 px-4">
          <Link
            href="#appointment"
            className="inline-block w-full max-w-xs text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90 hover:scale-105"
            style={{backgroundColor: '#2e7d32'}}
          >
            Agendar Ahora
          </Link>
        </div>

        {/* Features Icons Row - 4 características como en desktop */}
        <div className="grid grid-cols-2 gap-3 px-4 mt-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="mb-2 p-2 rounded-full bg-white/20">
              <FaMicroscope className="w-5 h-5" style={{color: '#2e7d32'}} />
            </div>
            <h3 className="text-xs font-medium leading-tight" style={{color: '#2e7d32'}}>
              Atención de calidad basada en la experiencia y en el conocimiento.
            </h3>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="mb-2 p-2 rounded-full bg-white/20">
              <FaHeart className="w-5 h-5" style={{color: '#2e7d32'}} />
            </div>
            <h3 className="text-xs font-medium leading-tight" style={{color: '#2e7d32'}}>
              Promovemos la salud dental de una manera ética.
            </h3>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="mb-2 p-2 rounded-full bg-white/20">
              <FaUserMd className="w-5 h-5" style={{color: '#2e7d32'}} />
            </div>
            <h3 className="text-xs font-medium leading-tight" style={{color: '#2e7d32'}}>
              Amor por nuestra profesión.
            </h3>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="mb-2 p-2 rounded-full bg-white/20">
              <FaTrophy className="w-5 h-5" style={{color: '#2e7d32'}} />
            </div>
            <h3 className="text-xs font-medium leading-tight" style={{color: '#2e7d32'}}>
              Experiencia en odontología desde hace 4 generaciones.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )

  // Slide de imagen de Airtable (contain para mantener proporciones en móvil)
  const renderImageSlide = (imageUrl: string) => (
    <div className="relative w-full" style={{ height: '100vh' }}>
      <img
        src={imageUrl}
        alt="Banner slide"
        className="w-full h-full object-contain"
      />
    </div>
  )

  return (
    <section 
      className="relative overflow-hidden flex items-center min-h-screen" 
      style={{
        background: `linear-gradient(to bottom right, #b7d778, #a5d058)`,
      }}
    >
      {/* Slideshow Content con fade */}
      <div className="relative w-full h-full" style={{ transition: 'opacity 700ms ease', opacity: fadeOpacity }}>
        {renderCurrentSlide()}
      </div>

      {/* Controles laterales e indicadores - Solo mostrar si hay más de una imagen */}
      {banners.length > 1 && (
        <>
          {/* Flecha izquierda */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition"
          >
            <span className="sr-only">Anterior</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M15.78 3.22a.75.75 0 010 1.06L9.06 11l6.72 6.72a.75.75 0 11-1.06 1.06l-7.25-7.25a.75.75 0 010-1.06l7.25-7.25a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Flecha derecha */}
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition"
          >
            <span className="sr-only">Siguiente</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M8.22 20.78a.75.75 0 010-1.06L14.94 13 8.22 6.28a.75.75 0 111.06-1.06l7.25 7.25a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
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
    </section>
  )
}