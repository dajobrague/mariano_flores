'use client'

import { useMobile } from '@/hooks/useMobile'

// Desktop Components
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import MedicalStaff from '@/components/MedicalStaff'
import AppointmentBooking from '@/components/AppointmentBooking'
import Footer from '@/components/Footer'

// Mobile Components
import HeaderMobile from '@/components/mobile/HeaderMobile'
import HeroSectionMobile from '@/components/mobile/HeroSectionMobile'
import MedicalStaffMobile from '@/components/mobile/MedicalStaffMobile'
import AppointmentBookingMobile from '@/components/mobile/AppointmentBookingMobile'
import FooterMobile from '@/components/mobile/FooterMobile'

interface ResponsiveWrapperProps {
  children?: React.ReactNode
  showHero?: boolean
  showStaff?: boolean
  showAppointment?: boolean
}

export default function ResponsiveWrapper({ 
  children, 
  showHero = false, 
  showStaff = false, 
  showAppointment = false 
}: ResponsiveWrapperProps) {
  const { isMobile, isLoading } = useMobile()

  // Mostrar loading mínimo para evitar flash
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {isMobile ? <HeaderMobile /> : <Header />}
      
      <main>
        {/* Hero Section */}
        {showHero && (isMobile ? <HeroSectionMobile /> : <HeroSection />)}
        
        {/* Medical Staff */}
        {showStaff && (isMobile ? <MedicalStaffMobile /> : <MedicalStaff />)}
        
        {/* Appointment Booking */}
        {showAppointment && (isMobile ? <AppointmentBookingMobile /> : <AppointmentBooking />)}
        
        {/* Children for other content */}
        {children}
      </main>
      
      {/* Footer */}
      {isMobile ? <FooterMobile /> : <Footer />}
    </div>
  )
}