'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Region = {
  id: string
  name: string
  available: boolean
  url?: string
}

export default function SpainMap() {
  const router = useRouter()
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null)

  const regions: Region[] = [
    {
      id: 'madrid',
      name: 'Madrid',
      available: true,
      url: '/madrid'
    },
    {
      id: 'cataluna',
      name: 'Cataluña',
      available: true,
      url: 'https://selectivi.cat'
    }
  ]

  const handleRegionClick = (region: Region) => {
    if (region.available && region.url) {
      if (region.url.startsWith('http')) {
        window.location.href = region.url
      } else {
        router.push(region.url)
      }
    }
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Tooltip */}
      {hoveredRegion && (
        <div 
          className="absolute z-10 bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm transform -translate-x-1/2"
          style={{
            left: '50%',
            top: '10px',
          }}
        >
          <span className={`font-medium ${hoveredRegion.available ? 'text-[#FFB800]' : 'text-gray-500'}`}>
            {hoveredRegion.name}
            {hoveredRegion.available ? ' (Disponible)' : ' (Próximamente)'}
          </span>
        </div>
      )}

      {/* SVG Map */}
      <svg 
        viewBox="0 0 837 670" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Galicia */}
        <path d="M71.5 120.5L80 115.5L89.5 106L96 99L102.5 94L109.5 91L116 89.5L122 89.5L127.5 91L132 94L136 98.5L139 103.5L141 109L142 115L142 121L141 127L139 132.5L136 137.5L132 142L127.5 145.5L122 148L116 149.5L109.5 150L102.5 149.5L96 148L89.5 145.5L84 142L79 137.5L75 132.5L72.5 127L71.5 120.5Z" fill="#D9D9D9" stroke="#737373" strokeWidth="2" className="hover:fill-gray-400" onMouseEnter={() => setHoveredRegion({ id: 'galicia', name: 'Galicia', available: false })} onMouseLeave={() => setHoveredRegion(null)} />

        {/* Asturias */}
        <path d="M142 89.5L150 88L158.5 87.5L167 88L175 89.5L182.5 92L189 95.5L194.5 100L199 105.5L202 111.5L204 118L204.5 124.5L204 131L202 137L199 142.5L194.5 147L189 150.5L182.5 153L175 154.5L167 155L158.5 154.5L150 153L142 150.5L135 147L129 142.5L124.5 137L121.5 131L120 124.5L120.5 118L122 111.5L125 105.5L129 100L135 95.5L142 92L142 89.5Z" fill="#D9D9D9" stroke="#737373" strokeWidth="2" className="hover:fill-gray-400" onMouseEnter={() => setHoveredRegion({ id: 'asturias', name: 'Asturias', available: false })} onMouseLeave={() => setHoveredRegion(null)} />

        {/* Madrid */}
        <path 
          d="M416.278 280.43L405.443 291.265H335.304L334.712 290.638L321.614 276.77H297.848L298.86 274.068L303.692 261.183L303.838 260.795L304.126 260.497L371.771 190.436L372.36 189.826H386.729L387.186 191.193L393.628 210.52L393.859 211.215L393.588 211.895L387.635 226.777L406.029 245.171L406.232 245.375L406.371 245.628L416.034 263.343L416.278 263.792V280.43Z" 
          fill="#FFB800"
          stroke="#737373"
          strokeWidth="2"
          className="cursor-pointer hover:fill-yellow-500 transition-colors duration-200"
          onMouseEnter={() => setHoveredRegion(regions.find(r => r.id === 'madrid') || null)}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick(regions.find(r => r.id === 'madrid')!)}
        />

        {/* Cataluña */}
        <path 
          d="M642.535 68.2612L690.852 77.1186L692.015 77.3325L692.389 78.4536L700.038 101.403L768.139 109.231L797.344 91.0776L798.386 90.4301L799.435 91.0649L830.035 109.586L832.803 111.261L830.068 112.989L816.942 121.278L830.375 134.004L831.979 135.524L830.308 136.969L765.08 193.339L764.709 193.66L764.231 193.772L679.515 213.752L669.826 225.258H679.854L680.31 226.625L685.141 241.121L685.744 242.93L683.966 243.619L659.002 253.282L658.013 253.664L657.142 253.061L636.204 238.566L635.493 238.074L635.364 237.218L630.533 205.007L630.487 204.703L630.535 204.399L635.287 174.298L630.625 161.085L630.132 159.689L631.324 158.81L645.923 148.052L652.142 93.6391L636.084 80.6411L634.788 79.5922L635.587 78.1284L640.418 69.27L641.111 67.9995L642.535 68.2612Z" 
          fill="#FFB800"
          stroke="#737373"
          strokeWidth="2"
          className="cursor-pointer hover:fill-yellow-500 transition-colors duration-200"
          onMouseEnter={() => setHoveredRegion(regions.find(r => r.id === 'cataluna') || null)}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick(regions.find(r => r.id === 'cataluna')!)}
        />

        {/* Resto de regiones... */}
      </svg>
    </div>
  )
}