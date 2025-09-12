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
        width="837" 
        height="670" 
        viewBox="0 0 837 670" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Regiones no disponibles */}
        <path d="M279.381 416.763L311.492 429.76L444.676 416.121L445.875 415.998L446.544 417.001L456.207 431.496L456.638 432.143L456.52 432.909L451.899 462.943L477.61 477.312H493.814L492.619 480.1L485.932 495.704L503.313 511.575L525.766 527.612L527.319 528.723L526.282 530.326L517.584 543.768L508.808 574.086L508.648 574.637L508.222 575.02L484.868 595.957L483.025 597.61L481.797 595.46L475.79 584.948L460.116 581.386L443.186 601.397L442.27 602.48L440.944 601.973L413.953 591.653L309.531 596.436L285.078 616.156L284.636 616.514L284.071 616.584L259.054 619.711L217.68 666.655L216.901 667.538L215.752 667.286L189.982 661.65L189.509 661.546L189.135 661.237L165.782 641.909L165.42 641.611L165.229 641.181L149.291 605.32L139.126 595.938L138.309 595.183L138.519 594.09L142.298 574.434L99.9023 545.143L71.8604 554.49L69.4834 555.282L69.2373 552.788L64.4062 503.666L64.3311 502.904L64.7852 502.286L84.6924 475.211L87.8174 463.496L88.2129 462.012H105.119L108.753 448.202L109.146 446.711H128.239L128.761 447.084L145.34 458.926L187.09 468.204L195.993 454.85L196.814 453.618L198.232 454.043L213.37 458.584L221.393 452.569L220.623 429.451L220.59 428.457L221.362 427.831L251.157 403.672L251.521 403.378L251.977 403.276L276.94 397.638L279.381 397.087V416.763Z" 
          className="hover:fill-gray-400 transition-colors duration-200"
          fill="#D9D9D9" 
          stroke="#737373" 
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion({ id: 'andalucia', name: 'Andalucía', available: false })}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        <path d="M603.438 229.42L657.393 250.358L659.605 251.216L658.384 253.252L622.255 313.464L611.27 345.634L622.059 377.229L661.59 396.995L664.96 398.68L661.676 400.527L610.841 429.121L591.746 492.771L590.282 497.65L588.036 493.079L564.683 445.567L564.478 445.15V386.536L545.15 380.093V352.753L528.047 347.548L527.301 347.321L526.905 346.649L518.853 332.96L517.72 331.034L519.758 330.121L541.93 320.181V293.708H570.356L600.146 257.044L588.269 242.198L586.979 240.586L588.631 239.348L601.515 229.685L602.403 229.018L603.438 229.42Z" 
          className="hover:fill-gray-400 transition-colors duration-200"
          fill="#D9D9D9" 
          stroke="#737373" 
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion({ id: 'aragon', name: 'Aragón', available: false })}
          onMouseLeave={() => setHoveredRegion(null)}
        />

        {/* Cataluña - Disponible */}
        <path 
          d="M642.535 68.2612L690.852 77.1186L692.015 77.3325L692.389 78.4536L700.038 101.403L768.139 109.231L797.344 91.0776L798.386 90.4301L799.435 91.0649L830.035 109.586L832.803 111.261L830.068 112.989L816.942 121.278L830.375 134.004L831.979 135.524L830.308 136.969L765.08 193.339L764.709 193.66L764.231 193.772L679.515 213.752L669.826 225.258H679.854L680.31 226.625L685.141 241.121L685.744 242.93L683.966 243.619L659.002 253.282L658.013 253.664L657.142 253.061L636.204 238.566L635.493 238.074L635.364 237.218L630.533 205.007L630.487 204.703L630.535 204.399L635.287 174.298L630.625 161.085L630.132 159.689L631.324 158.81L645.923 148.052L652.142 93.6391L636.084 80.6411L634.788 79.5922L635.587 78.1284L640.418 69.27L641.111 67.9995L642.535 68.2612Z" 
          className="cursor-pointer hover:fill-yellow-500 transition-colors duration-200"
          fill="#FFB800" 
          stroke="#737373" 
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion(regions.find(r => r.id === 'cataluna') || null)}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick(regions.find(r => r.id === 'cataluna')!)}
        />

        {/* Madrid - Disponible */}
        <path 
          d="M416.278 280.43L405.443 291.265H335.304L334.712 290.638L321.614 276.77H297.848L298.86 274.068L303.692 261.183L303.838 260.795L304.126 260.497L371.771 190.436L372.36 189.826H386.729L387.186 191.193L393.628 210.52L393.859 211.215L393.588 211.895L387.635 226.777L406.029 245.171L406.232 245.375L406.371 245.628L416.034 263.343L416.278 263.792V280.43Z" 
          className="cursor-pointer hover:fill-yellow-500 transition-colors duration-200"
          fill="#FFB800" 
          stroke="#737373" 
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion(regions.find(r => r.id === 'madrid') || null)}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick(regions.find(r => r.id === 'madrid')!)}
        />

        {/* Resto de regiones no disponibles */}
        <path d="M552.876 67.6337L561.896 72.1434L582.133 67.4735L583.175 67.2333L583.953 67.9667L596.988 80.2333L640.382 76.2889L641.348 76.201L642.015 76.9052L656.51 92.2059L657.168 92.9003L657.04 93.8475L649.793 147.802L649.684 148.615L649.033 149.118L632.693 161.743L638.273 171.507L638.645 172.157L638.498 172.891L632.131 204.724L638.503 238.972L639.104 242.203L635.958 241.252L602.529 231.145L594.709 239.617L603.646 255.257L604.491 256.736L603.165 257.806L553.237 298.069L551.481 299.485L550.286 297.573L538.706 279.044L503.4 274.337L502.399 274.203L501.912 273.318L493.055 257.213L492.255 255.759L493.535 254.705L506.497 244.03V216.366L463.248 192.776L459.888 190.943L463.312 189.231L473.48 184.146V166.225L474.848 165.77L492.05 160.036L482.524 139.519L481.204 136.678H519.592L516.226 123.886L516.16 123.636V100.585L517.023 99.9882L549.982 77.2303V66.1864L552.876 67.6337Z" 
          className="hover:fill-gray-400 transition-colors duration-200"
          fill="#D9D9D9" 
          stroke="#737373" 
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion({ id: 'navarra', name: 'Navarra', available: false })}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        <path d="M509.692 246.107L508.721 246.69L494.33 255.323L504.93 272.989L542.728 280.864L544.319 281.196V317.03L543.271 317.598L524.992 327.499V340.15L546.152 346.952L547.541 347.399V374.118L564.859 381.65L566.062 382.172V415.494L563.281 414.315L538.473 403.79L524.8 432.656L524.431 433.437L523.609 433.703L467.817 451.776V466.663L465.268 465.935L453.994 462.714L452.544 462.299V439.737L439.145 422.615L316.216 433.792L315.547 433.853L314.978 433.498L265.854 402.897L264.086 401.795L265.26 400.072L276.758 383.207L271.478 368.874L270.971 367.499L272.13 366.602L295.794 348.28L290.842 338.376L273.937 343.522L273.046 343.793L272.265 343.285L256.159 332.817L255.249 332.225V304.955H244.78V285.249L246.341 284.898L277.729 277.835L283.73 268.085L284.574 266.713L286.095 267.245L301.879 272.77H320.203L320.804 273.503L334.699 290.487H403.822L416.014 279.012L408.456 255.584L386.927 227.675L386.16 226.681L386.722 225.559L392.805 213.391L386.599 193.219L385.905 190.965L388.242 190.65L418.038 186.622L418.549 186.554L419.028 186.74L457.843 201.79L475.704 196.355L476.456 196.126L477.162 196.47L508.568 211.771L509.692 212.319V246.107Z" 
          className="hover:fill-gray-400 transition-colors duration-200"
          fill="#D9D9D9" 
          stroke="#737373" 
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion({ id: 'castillaleon', name: 'Castilla y León', available: false })}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        {/* ... resto de regiones ... */}
      </svg>
    </div>
  )
}