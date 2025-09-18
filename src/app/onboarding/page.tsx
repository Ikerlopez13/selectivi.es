import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Onboarding from '@/components/Onboarding'

export default function OnboardingPage() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#FFF7D1] via-white to-[#FFF1B2]" />
      <Navbar />
      <div className="flex-1 relative">
        <Onboarding />
      </div>
      <Footer />
    </main>
  )
}


