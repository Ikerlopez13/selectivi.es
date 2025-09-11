import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/images/logoo.svg" alt="SelectiviES" width={32} height={32} />
          <span className="text-xl font-bold">selectivi<span className="text-[#FFB800]">ES</span></span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Hazte Premium</a>
          <a href="#" className="bg-[#FFB800] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#ffc835] transition-colors">
            Iniciar Sesión
          </a>
        </div>
      </div>
    </nav>
  )
}