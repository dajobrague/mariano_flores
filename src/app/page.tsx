import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import MedicalStaff from '@/components/MedicalStaff'
import AppointmentBooking from '@/components/AppointmentBooking'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <MedicalStaff />
        <AppointmentBooking />
      </main>
      <Footer />
    </div>
  );
}
