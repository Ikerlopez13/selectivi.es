'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SpainMap() {
  const router = useRouter()
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  const regions = [
    {
      id: 'madrid',
      name: 'Madrid',
      path: 'M416.278 280.43L405.443 291.265H335.304L334.712 290.638L321.614 276.77H297.848L298.86 274.068L303.692 261.183L303.838 260.795L304.126 260.497L371.771 190.436L372.36 189.826H386.729L387.186 191.193L393.628 210.52L393.859 211.215L393.588 211.895L387.635 226.777L406.029 245.171L406.232 245.375L406.371 245.628L416.034 263.343L416.278 263.792V280.43Z',
      available: true,
      url: '/madrid'
    },
    {
      id: 'cataluna',
      name: 'Cataluña',
      path: 'M642.535 68.2612L690.852 77.1186L692.015 77.3325L692.389 78.4536L700.038 101.403L768.139 109.231L797.344 91.0776L798.386 90.4301L799.435 91.0649L830.035 109.586L832.803 111.261L830.068 112.989L816.942 121.278L830.375 134.004L831.979 135.524L830.308 136.969L765.08 193.339L764.709 193.66L764.231 193.772L679.515 213.752L669.826 225.258H679.854L680.31 226.625L685.141 241.121L685.744 242.93L683.966 243.619L659.002 253.282L658.013 253.664L657.142 253.061L636.204 238.566L635.493 238.074L635.364 237.218L630.533 205.007L630.487 204.703L630.535 204.399L635.287 174.298L630.625 161.085L630.132 159.689L631.324 158.81L645.923 148.052L652.142 93.6391L636.084 80.6411L634.788 79.5922L635.587 78.1284L640.418 69.27L641.111 67.9995L642.535 68.2612Z',
      available: true,
      url: 'https://selectivi.cat'
    },
    // Resto de regiones...
  ]

  const handleRegionClick = (region: typeof regions[0]) => {
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
          className="absolute z-10 bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm transform -translate-x-1/2 -translate-y-full"
          style={{
            left: '50%',
            top: '0',
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
        <g>
          {regions.map((region) => (
            <path
              key={region.id}
              d={region.path}
              fill={region.available ? '#FFB800' : '#D9D9D9'}
              stroke="#737373"
              strokeWidth="2"
              className={`transition-colors duration-200 ${
                region.available ? 'hover:fill-yellow-500 cursor-pointer' : 'hover:fill-gray-400'
              }`}
              onMouseEnter={() => setHoveredRegion(region)}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => handleRegionClick(region)}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
}