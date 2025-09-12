'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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
      <div className="relative">
        <Image 
          src="/images/Group 27.svg"
          alt="Mapa de España"
          width={837}
          height={670}
          className="w-full h-auto"
          useMap="#spain-map"
        />

        <map name="spain-map">
          {/* Madrid */}
          <area 
            shape="poly" 
            coords="416,280,405,291,335,291,334,290,321,276,297,276,298,274,303,261,303,260,304,260,371,190,372,189,386,189,387,191,393,210,393,211,393,211,387,226,406,245,406,245,406,245,416,263,416,263,416,280"
            href="#"
            onMouseEnter={() => setHoveredRegion(regions.find(r => r.id === 'madrid') || null)}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={(e) => {
              e.preventDefault()
              const region = regions.find(r => r.id === 'madrid')
              if (region) handleRegionClick(region)
            }}
            alt="Madrid"
            className="cursor-pointer"
          />

          {/* Cataluña */}
          <area 
            shape="poly" 
            coords="642,68,690,77,692,77,692,78,700,101,768,109,797,91,798,90,799,91,830,109,832,111,830,112,816,121,830,134,831,135,830,136,765,193,764,193,764,193,679,213,669,225,679,225,680,226,685,241,685,242,683,243,659,253,658,253,657,253,636,238,635,238,635,237,630,205,630,204,630,204,635,174,630,161,630,159,631,158,645,148,652,93,636,80,634,79,635,78,640,69,641,67,642,68"
            href="#"
            onMouseEnter={() => setHoveredRegion(regions.find(r => r.id === 'cataluna') || null)}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={(e) => {
              e.preventDefault()
              const region = regions.find(r => r.id === 'cataluna')
              if (region) handleRegionClick(region)
            }}
            alt="Cataluña"
            className="cursor-pointer"
          />
        </map>

        {/* Overlay para regiones disponibles */}
        <svg 
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 837 670"
          fill="none"
        >
          {/* Madrid */}
          <path
            d="M416.278 280.43L405.443 291.265H335.304L334.712 290.638L321.614 276.77H297.848L298.86 274.068L303.692 261.183L303.838 260.795L304.126 260.497L371.771 190.436L372.36 189.826H386.729L387.186 191.193L393.628 210.52L393.859 211.215L393.588 211.895L387.635 226.777L406.029 245.171L406.232 245.375L406.371 245.628L416.034 263.343L416.278 263.792V280.43Z"
            fill="#FFB800"
            fillOpacity="0.5"
          />

          {/* Cataluña */}
          <path
            d="M642.535 68.2612L690.852 77.1186L692.015 77.3325L692.389 78.4536L700.038 101.403L768.139 109.231L797.344 91.0776L798.386 90.4301L799.435 91.0649L830.035 109.586L832.803 111.261L830.068 112.989L816.942 121.278L830.375 134.004L831.979 135.524L830.308 136.969L765.08 193.339L764.709 193.66L764.231 193.772L679.515 213.752L669.826 225.258H679.854L680.31 226.625L685.141 241.121L685.744 242.93L683.966 243.619L659.002 253.282L658.013 253.664L657.142 253.061L636.204 238.566L635.493 238.074L635.364 237.218L630.533 205.007L630.487 204.703L630.535 204.399L635.287 174.298L630.625 161.085L630.132 159.689L631.324 158.81L645.923 148.052L652.142 93.6391L636.084 80.6411L634.788 79.5922L635.587 78.1284L640.418 69.27L641.111 67.9995L642.535 68.2612Z"
            fill="#FFB800"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </div>
  )
}