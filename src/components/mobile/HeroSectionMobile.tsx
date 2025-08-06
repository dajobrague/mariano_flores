import Link from 'next/link'

export default function HeroSectionMobile() {
  return (
    <section 
      className="relative overflow-hidden flex items-center min-h-screen" 
      style={{
        background: `linear-gradient(to bottom right, #b7d778, #a5d058)`,
      }}
    >
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

          {/* Features Icons Row - Simplificado para móvil */}
          <div className="grid grid-cols-2 gap-4 px-4 mt-12">
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="mb-3 p-3 rounded-full bg-white/20">
                <svg className="w-6 h-6" style={{color: '#2e7d32'}} fill="currentColor" viewBox="0 0 512 512">
                  <path d="M160 320h12v16c0 8.84 7.16 16 16 16h40c8.84 0 16-7.16 16-16v-16h12c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32V16c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v16c-17.67 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32zm304 128h-1.29C493.24 413.99 512 369.2 512 320c0-105.88-86.12-192-192-192v64c70.58 0 128 57.42 128 128s-57.42 128-128 128H48c-26.51 0-48 21.49-48 48 0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48zm-360-32h208c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z"/>
                </svg>
              </div>
              <h3 className="text-sm font-medium leading-tight text-white">
                Atención de Calidad
              </h3>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="mb-3 p-3 rounded-full bg-white/20">
                <svg className="w-6 h-6" style={{color: '#2e7d32'}} fill="currentColor" viewBox="0 0 512 512">
                  <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
                </svg>
              </div>
              <h3 className="text-sm font-medium leading-tight text-white">
                Atención Ética
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}