import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RegisterUserForm from '@/components/RegisterUserForm'

export default function RegistroPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 py-10 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <RegisterUserForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}
