'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function HeaderMobile() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      }
    }

    detectActiveSection()
    window.addEventListener('hashchange', detectActiveSection)
    return () => window.removeEventListener('hashchange', detectActiveSection)
  }, [pathname])

  // Función para manejar clics con scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') || href.includes('#')) {
      e.preventDefault()
      setIsMenuOpen(false) // Cerrar menú al hacer clic
      
      const targetId = href.split('#')[1]
      
      if (href.startsWith('#')) {
        // Enlace dentro de la misma página
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
          window.history.pushState(null, '', `#${targetId}`)
        }
      } else {
        // Para enlaces como /#appointment desde otras páginas
        if (pathname !== '/') {
          window.location.href = href
        } else {
          const element = document.getElementById(targetId)
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
            window.history.pushState(null, '', `#${targetId}`)
          }
        }
      }
    } else {
      setIsMenuOpen(false) // Cerrar menú al navegar
    }
  }

  const isLinkActive = (link: string) => {
    if (link === 'home') return activeSection === 'home'
    if (link === 'staff') return activeSection === 'staff'
    if (link === 'why-choose-us') return activeSection === 'why-choose-us'
    if (link === 'history') return activeSection === 'history'
    if (link === 'services') return activeSection === 'services'
    if (link === 'testimonials') return activeSection === 'testimonials'
    return false
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Info Bar - Compacta */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-xs">
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3" style={{color: '#b7d778'}} fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="text-gray-700 font-semibold">(+51) 913 080 814</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3" style={{color: '#b7d778'}} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              <span className="text-gray-600 text-xs">Lun-Vie: 9am-8pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/mariano_logo.png" 
              alt="Dr. Mariano Flores Rubio" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Menú Hamburguesa */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Menú"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <div className={`absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg transform transition-all duration-300 z-40 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="space-y-3">
            <Link
              href="/"
              className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 text-sm ${
                isLinkActive('home') 
                  ? 'text-green-600 bg-green-50 border-l-4 border-green-600' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={(e) => {
                handleSmoothScroll(e, '/')
              }}
            >
              Inicio
            </Link>
            
            <Link
              href="/#staff"
              className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 text-sm ${
                isLinkActive('staff') 
                  ? 'text-green-600 bg-green-50 border-l-4 border-green-600' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={(e) => handleSmoothScroll(e, '/#staff')}
            >
              Staff Médico
            </Link>
            
            <Link
              href="/why-choose-us"
              className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 text-sm ${
                isLinkActive('why-choose-us') 
                  ? 'text-green-600 bg-green-50 border-l-4 border-green-600' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={(e) => {
                handleSmoothScroll(e, '/why-choose-us')
              }}
            >
              Por qué Elegirnos
            </Link>
            
            <Link
              href="/why-choose-us#history"
              className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 text-sm ${
                isLinkActive('history') 
                  ? 'text-green-600 bg-green-50 border-l-4 border-green-600' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={(e) => handleSmoothScroll(e, '/why-choose-us#history')}
            >
              Nuestra Historia
            </Link>
            
            <Link
              href="/services"
              className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 text-sm ${
                isLinkActive('services') 
                  ? 'text-green-600 bg-green-50 border-l-4 border-green-600' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={(e) => {
                handleSmoothScroll(e, '/services')
              }}
            >
              Servicios
            </Link>
            
            <Link
              href="/testimonials"
              className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 text-sm ${
                isLinkActive('testimonials') 
                  ? 'text-green-600 bg-green-50 border-l-4 border-green-600' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={(e) => {
                handleSmoothScroll(e, '/testimonials')
              }}
            >
              Testimonios
            </Link>
          </nav>

          {/* CTA Button Mobile */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link
              href="#appointment"
              className="block w-full text-center text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:opacity-90 hover:scale-105 text-sm"
              style={{backgroundColor: '#b7d778'}}
              onClick={(e) => handleSmoothScroll(e, '#appointment')}
            >
              Agenda una cita
            </Link>
          </div>
        </div>
      </div>


    </header>
  )
}