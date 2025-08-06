import ResponsiveWrapper from '@/components/ResponsiveWrapper'

export default function Home() {
  return (
    <ResponsiveWrapper 
      showHero={true} 
      showStaff={true} 
      showAppointment={true}
    />
  );
}
