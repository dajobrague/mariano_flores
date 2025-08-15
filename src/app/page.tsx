'use client'


import { useMobile } from '../hooks/useMobile'

// Desktop Components
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import MedicalStaff from '@/components/MedicalStaff'

import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import TestimonialsPage from '@/components/TestimonialsPage'
import AppointmentBooking from '@/components/AppointmentBooking'
import Footer from '@/components/Footer'

// Mobile Components
import HeaderMobile from '@/components/mobile/HeaderMobile'
import HeroSectionMobile from '@/components/mobile/HeroSectionMobile'
import MedicalStaffMobile from '@/components/mobile/MedicalStaffMobile'
import ServicesMobile from '@/components/mobile/ServicesMobile'
import WhyChooseUsMobile from '@/components/mobile/WhyChooseUsMobile'
import TestimonialsMobile from '@/components/mobile/TestimonialsMobile'
import AppointmentBookingMobile from '@/components/mobile/AppointmentBookingMobile'
import FooterMobile from '@/components/mobile/FooterMobile'

export default function Home() {
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
          <HeroSectionMobile />
          <MedicalStaffMobile />
          <AppointmentBookingMobile />
          <ServicesMobile />
          <WhyChooseUsMobile />
          <TestimonialsMobile />
        </main>
        <FooterMobile />
      </div>
    )
  } else {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <MedicalStaff />
          <AppointmentBooking />
          <Services />
          <WhyChooseUs />
          <TestimonialsPage />
        </main>
        <Footer />
      </div>
    )
  }
}
