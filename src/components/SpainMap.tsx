'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Region = {
  id: string
  name: string
  available: boolean
  url?: string
  path: string
}

export default function SpainMap() {
  const router = useRouter()
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null)

  const regions: Region[] = [
    {
      id: 'madrid',
      name: 'Madrid',
      available: true,
      url: '/madrid',
      path: 'M416.278 280.43L405.443 291.265H335.304L334.712 290.638L321.614 276.77H297.848L298.86 274.068L303.692 261.183L303.838 260.795L304.126 260.497L371.771 190.436L372.36 189.826H386.729L387.186 191.193L393.628 210.52L393.859 211.215L393.588 211.895L387.635 226.777L406.029 245.171L406.232 245.375L406.371 245.628L416.034 263.343L416.278 263.792V280.43Z'
    },
    {
      id: 'cataluna',
      name: 'Cataluña',
      available: true,
      url: 'https://selectivi.cat',
      path: 'M642.535 68.2612L690.852 77.1186L692.015 77.3325L692.389 78.4536L700.038 101.403L768.139 109.231L797.344 91.0776L798.386 90.4301L799.435 91.0649L830.035 109.586L832.803 111.261L830.068 112.989L816.942 121.278L830.375 134.004L831.979 135.524L830.308 136.969L765.08 193.339L764.709 193.66L764.231 193.772L679.515 213.752L669.826 225.258H679.854L680.31 226.625L685.141 241.121L685.744 242.93L683.966 243.619L659.002 253.282L658.013 253.664L657.142 253.061L636.204 238.566L635.493 238.074L635.364 237.218L630.533 205.007L630.487 204.703L630.535 204.399L635.287 174.298L630.625 161.085L630.132 159.689L631.324 158.81L645.923 148.052L652.142 93.6391L636.084 80.6411L634.788 79.5922L635.587 78.1284L640.418 69.27L641.111 67.9995L642.535 68.2612Z'
    },
    {
      id: 'andalucia',
      name: 'Andalucía',
      available: false,
      path: 'M279.381 416.763L311.492 429.76L444.676 416.121L445.875 415.998L446.544 417.001L456.207 431.496L456.638 432.143L456.52 432.909L451.899 462.943L477.61 477.312H493.814L492.619 480.1L485.932 495.704L503.313 511.575L525.766 527.612L527.319 528.723L526.282 530.326L517.584 543.768L508.808 574.086L508.648 574.637L508.222 575.02L484.868 595.957L483.025 597.61L481.797 595.46L475.79 584.948L460.116 581.386L443.186 601.397L442.27 602.48L440.944 601.973L413.953 591.653L309.531 596.436L285.078 616.156L284.636 616.514L284.071 616.584L259.054 619.711L217.68 666.655L216.901 667.538L215.752 667.286L189.982 661.65L189.509 661.546L189.135 661.237L165.782 641.909L165.42 641.611L165.229 641.181L149.291 605.32L139.126 595.938L138.309 595.183L138.519 594.09L142.298 574.434L99.9023 545.143L71.8604 554.49L69.4834 555.282L69.2373 552.788L64.4062 503.666L64.3311 502.904L64.7852 502.286L84.6924 475.211L87.8174 463.496L88.2129 462.012H105.119L108.753 448.202L109.146 446.711H128.239L128.761 447.084L145.34 458.926L187.09 468.204L195.993 454.85L196.814 453.618L198.232 454.043L213.37 458.584L221.393 452.569L220.623 429.451L220.59 428.457L221.362 427.831L251.157 403.672L251.521 403.378L251.977 403.276L276.94 397.638L279.381 397.087V416.763Z'
    },
    // ... resto de regiones
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
        width="837" 
        height="670" 
        viewBox="0 0 837 670" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {regions.map((region) => (
          <path
            key={region.id}
            d={region.path}
            className={`
              transition-colors duration-200
              ${region.available ? 'cursor-pointer hover:fill-yellow-500' : 'hover:fill-gray-400'}
            `}
            fill={region.available ? '#FFB800' : '#D9D9D9'}
            stroke="#737373"
            strokeWidth="4"
            onMouseEnter={() => setHoveredRegion(region)}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick(region)}
          />
        ))}
      </svg>
    </div>
  )
}