'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isMadridPage = pathname === '/madrid'

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logoo.svg" alt="SelectiviES" width={32} height={32} />
          <span className="text-xl font-bold">
            selectivi<span className="text-[#FFB800]">{isMadridPage ? 'MAD' : 'ES'}</span>
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Calculadora</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Notes de tall</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Exámens</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Millors Videos</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
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