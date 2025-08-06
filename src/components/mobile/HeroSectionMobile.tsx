import Link from 'next/link'
import { FaMicroscope, FaHeart, FaUserMd, FaTrophy } from 'react-icons/fa'

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
    </section>
  )
}