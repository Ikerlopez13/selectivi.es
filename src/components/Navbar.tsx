'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isMadridPage = pathname === '/madrid'

  return (
    <nav className="border-b bg-white mb-8 shadow-md z-10 relative">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logoo.svg" alt="SelectiviES" width={40} height={40} />
          <span className="text-2xl font-bold">
            selectivi<span className="text-[#FFB800]">{isMadridPage ? 'MAD' : 'ES'}</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
          <a href="#" className="bg-gray-100 text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Hazte Premium ⭐️
          </a>
          <a href="#" className="bg-[#FFB800] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#ffc835] transition-colors">
            Iniciar Sesión
          </a>
        </div>
      </div>
    </nav>
  )
}