import Link from 'next/link'
import { FaMicroscope, FaHeart, FaUserMd, FaTrophy } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden flex items-center" 
      style={{
        background: `linear-gradient(to bottom right, #b7d778, #a5d058)`,
        minHeight: 'calc(85vh - 50px)' // Much larger hero - almost full viewport
      }}
    >
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

          {/* Hero Image - Much Larger */}
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

      {/* Features Section - Integrated directly below the main hero content */}
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

    </section>
  )
}