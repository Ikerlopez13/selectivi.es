'use client'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logoo.svg" alt="SelectiviES" className="w-10 h-10" />
          <span className="text-xl font-bold">selectivi<span className="text-[#FFB800]">ES</span></span>
        </div>
        <div className="grid grid-cols-3 gap-12 w-full max-w-3xl">
          <div className="space-y-2">
            <div className="h-3 bg-gray-400 rounded" />
            <div className="h-3 bg-gray-400 rounded" />
            <div className="h-3 bg-gray-400 rounded" />
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-400 rounded" />
            <div className="h-3 bg-gray-400 rounded" />
            <div className="h-3 bg-gray-400 rounded" />
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-400 rounded" />
            <div className="h-3 bg-gray-400 rounded" />
            <div className="h-3 bg-gray-400 rounded" />
          </div>
        </div>
      </div>
    </footer>
  )
}


