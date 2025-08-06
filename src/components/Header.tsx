'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')

  // Detectar la sección activa basada en la URL y scroll
  useEffect(() => {
    const detectActiveSection = () => {
      const hash = window.location.hash
      
      if (pathname === '/') {
        if (hash === '#staff') {
          setActiveSection('staff')
        } else if (hash === '#appointment') {
          setActiveSection('appointment')
        } else {
          setActiveSection('home')
        }
      } else if (pathname === '/why-choose-us') {
        if (hash === '#history') {
          setActiveSection('history')
        } else {
          setActiveSection('why-choose-us')
        }
      } else if (pathname === '/services') {
        setActiveSection('services')
      } else if (pathname === '/testimonials') {
        setActiveSection('testimonials')
      } else {
        setActiveSection('')
      }
    }

    detectActiveSection()
    
    // Escuchar cambios en la URL
    window.addEventListener('hashchange', detectActiveSection)
    window.addEventListener('popstate', detectActiveSection)
    
    return () => {
      window.removeEventListener('hashchange', detectActiveSection)
      window.removeEventListener('popstate', detectActiveSection)
    }
  }, [pathname])

  // Función para manejar clics con scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') || href.includes('#')) {
      e.preventDefault()
      const targetId = href.split('#')[1]
      
      if (href.startsWith('#')) {
        // Enlace dentro de la misma página
        if (pathname === '/') {
          // Si estamos en home, hacer scroll suave
          const element = document.getElementById(targetId)
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
            window.history.pushState(null, '', `#${targetId}`)
          }
        } else {
          // Si estamos en otra página, navegar a home con el hash
          window.location.href = `/${href}`
        }
      } else {
        // Enlace a otra página con hash
        window.location.href = href
      }
    }
  }

  // Función para determinar si un enlace está activo
  const isActive = (section: string) => {
    return activeSection === section
  }
  return (
    <header className="bg-white">
      {/* Top Level - Logo, Horarios, Teléfono, Ubicación */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="/mariano_logo.png"
                  alt="Dr. Mariano Flores Rubio"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Horarios, Teléfono, Ubicación - Tag Style */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Horarios Tag */}
              <div className="flex items-center px-4 py-3 rounded-full border border-gray-200 bg-gray-50 hover:bg-green-50 transition-colors min-h-[48px] w-auto">
                <svg className="w-4 h-4 mr-3 flex-shrink-0" style={{color: '#b7d778'}} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                <div className="text-gray-700 text-sm leading-tight">
                  <div className="font-semibold text-xs whitespace-nowrap">Lunes - Viernes: 9 am - 8 pm</div>
                  <div className="font-medium text-xs text-gray-600 whitespace-nowrap">Sábado: 9 am - 1 pm</div>
                </div>
              </div>

              {/* Teléfono Tag */}
              <div className="flex items-center px-4 py-3 rounded-full border border-gray-200 bg-gray-50 hover:bg-green-50 transition-colors min-h-[48px] w-auto">
                <svg className="w-4 h-4 mr-3 flex-shrink-0" style={{color: '#b7d778'}} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div className="text-gray-700 text-sm leading-tight flex items-center">
                  <span className="font-semibold text-xs whitespace-nowrap">(+51) 913 080 814</span>
                </div>
              </div>

              {/* Ubicación Tag */}
              <div className="flex items-center px-4 py-3 rounded-full border border-gray-200 bg-gray-50 hover:bg-green-50 transition-colors min-h-[48px] w-auto">
                <svg className="w-4 h-4 mr-3 flex-shrink-0" style={{color: '#b7d778'}} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div className="text-gray-700 text-sm leading-tight">
                  <div className="font-semibold text-xs whitespace-nowrap">Manuel Olguin 555</div>
                  <div className="font-medium text-xs text-gray-600 whitespace-nowrap">Surco, Lima</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Level - Navegación, Redes Sociales, CTA */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Navegación Principal */}
            <nav className="flex items-center space-x-8">
              <Link 
                href="/" 
                className={`font-medium transition-all duration-300 text-sm relative group ${
                  isActive('home') 
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={(e) => handleSmoothScroll(e, '/')}
              >
                Inicio
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-green-600 transition-all duration-300 ${
                  isActive('home') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link 
                href="/#staff" 
                className={`font-medium transition-all duration-300 text-sm relative group ${
                  isActive('staff') 
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={(e) => handleSmoothScroll(e, '#staff')}
              >
                Staff
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-green-600 transition-all duration-300 ${
                  isActive('staff') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link 
                href="/why-choose-us" 
                className={`font-medium transition-all duration-300 text-sm relative group ${
                  isActive('why-choose-us') 
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={(e) => handleSmoothScroll(e, '/why-choose-us')}
              >
                Porqué Elegirnos
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-green-600 transition-all duration-300 ${
                  isActive('why-choose-us') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link 
                href="/why-choose-us#history" 
                className={`font-medium transition-all duration-300 text-sm relative group ${
                  isActive('history') 
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={(e) => handleSmoothScroll(e, '/why-choose-us#history')}
              >
                Nuestra Historia
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-green-600 transition-all duration-300 ${
                  isActive('history') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link 
                href="/services" 
                className={`font-medium transition-all duration-300 text-sm relative group ${
                  isActive('services') 
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={(e) => handleSmoothScroll(e, '/services')}
              >
                Servicios
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-green-600 transition-all duration-300 ${
                  isActive('services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link 
                href="/testimonials" 
                className={`font-medium transition-all duration-300 text-sm relative group ${
                  isActive('testimonials') 
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={(e) => handleSmoothScroll(e, '/testimonials')}
              >
                Testimonios
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-green-600 transition-all duration-300 ${
                  isActive('testimonials') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            </nav>

            {/* Redes Sociales y CTA */}
            <div className="flex items-center space-x-6">
              {/* Iconos de Redes Sociales */}
              <div className="flex items-center space-x-3">
                {/* Instagram */}
                <a 
                  href="#" 
                  className="transition-colors" 
                  style={{color: '#b7d778'}}
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.65-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="#" 
                  className="transition-colors" 
                  style={{color: '#b7d778'}}
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                  </svg>
                </a>
              </div>

              {/* CTA Button */}
              <Link
                href="#appointment"
                className="text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:opacity-90 hover:scale-105 text-sm"
                style={{backgroundColor: '#b7d778'}}
                onClick={(e) => handleSmoothScroll(e, '#appointment')}
              >
                Agenda una cita
              </Link>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}