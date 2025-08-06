import Link from 'next/link'

export default function FooterMobile() {
  return (
    <footer className="text-white" style={{backgroundColor: '#1b2839'}}>
      <div className="px-4 py-8">
        {/* Logo y Descripción Principal */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img
              src="/white-logo.png"
              alt="Dr. Mariano Flores Rubio"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-white text-sm leading-relaxed max-w-sm mx-auto">
            Brindando atención dental excepcional con tecnología avanzada y 
            planes de tratamiento personalizados.
          </p>
        </div>

        {/* Información de Contacto Compacta */}
        <div className="space-y-4 mb-8">
          {/* Teléfono */}
          <a 
            href="tel:+51913080814"
            className="flex items-center justify-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="text-left">
              <span className="text-white font-semibold">(+51) 913 080 814</span>
              <div className="text-white/80 text-xs">Llámanos ahora</div>
            </div>
          </a>

          {/* Ubicación */}
          <div className="flex items-center justify-center space-x-3 p-3 bg-white/10 rounded-lg">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-left">
              <span className="text-white font-semibold">Manuel Olguin 555</span>
              <div className="text-white/80 text-xs">Surco, Lima</div>
            </div>
          </div>

          {/* Horarios */}
          <div className="flex items-center justify-center space-x-3 p-3 bg-white/10 rounded-lg">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <div className="text-left">
              <span className="text-white font-semibold">Lun-Vie: 9am-8pm</span>
              <div className="text-white/80 text-xs">Sáb: 9am-1pm</div>
            </div>
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Enlaces Rápidos</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link href="/" className="text-white hover:text-green-300 transition-colors text-center py-2 rounded-lg hover:bg-white/10">
              Inicio
            </Link>
            <Link href="/#staff" className="text-white hover:text-green-300 transition-colors text-center py-2 rounded-lg hover:bg-white/10">
              Personal
            </Link>
            <Link href="#services" className="text-white hover:text-green-300 transition-colors text-center py-2 rounded-lg hover:bg-white/10">
              Servicios
            </Link>
            <Link href="#why-choose-us" className="text-white hover:text-green-300 transition-colors text-center py-2 rounded-lg hover:bg-white/10">
              Por qué elegirnos
            </Link>
            <Link href="#testimonials" className="text-white hover:text-green-300 transition-colors text-center py-2 rounded-lg hover:bg-white/10">
              Testimonios
            </Link>
            <Link href="#appointment" className="text-white hover:text-green-300 transition-colors text-center py-2 rounded-lg hover:bg-white/10">
              Agenda ahora
            </Link>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="text-center mb-8">
          <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-green-300 transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-green-300 transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.11.221.085.342-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
        </div>



        {/* Bottom Section */}
        <div className="border-t pt-6" style={{borderColor: '#2d3748'}}>
          <div className="text-center space-y-3">
            <p className="text-white text-sm">
              © 2024 Consultorio Dental Mariano Flores Rubio
            </p>
            <p className="text-white/60 text-xs">
              Todos los derechos reservados
            </p>
            <div className="flex justify-center space-x-4 text-xs">
              <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacidad
              </Link>
              <span className="text-white/40">|</span>
              <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}