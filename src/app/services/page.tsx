'use client'


import { useMobile } from '../../hooks/useMobile'

// Desktop Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Services from '../../components/Services'

// Mobile Components
import HeaderMobile from '../../components/mobile/HeaderMobile'
import FooterMobile from '../../components/mobile/FooterMobile'
import ServicesMobile from '../../components/mobile/ServicesMobile'

export default function ServicesPage() {
  const { isMobile, isLoading } = useMobile()

  if (isLoading) {
    // Render a loading state while isMobile is being determined
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    )
  }

  if (isMobile) {
    return (
      <div className="min-h-screen bg-white">
        <HeaderMobile />
        <main>
          <ServicesMobile />
        </main>
        <FooterMobile />
      </div>
    )
  } else {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Services />
        </main>
        <Footer />
      </div>
    )
  }
}