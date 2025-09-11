'use client'

import { useState } from 'react'

type Region = {
  name: string;
  available: boolean;
}

export default function SpainMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  
  const regions: { [key: string]: Region } = {
    galicia: { name: 'Galicia', available: false },
    asturias: { name: 'Asturias', available: false },
    cantabria: { name: 'Cantabria', available: false },
    paisvasco: { name: 'País Vasco', available: false },
    navarra: { name: 'Navarra', available: false },
    larioja: { name: 'La Rioja', available: false },
    aragon: { name: 'Aragón', available: false },
    cataluna: { name: 'Cataluña', available: true },
    madrid: { name: 'Madrid', available: true },
    castillaleon: { name: 'Castilla y León', available: false },
    castillalamancha: { name: 'Castilla-La Mancha', available: false },
    valencia: { name: 'Comunidad Valenciana', available: false },
    murcia: { name: 'Región de Murcia', available: false },
    andalucia: { name: 'Andalucía', available: false },
    extremadura: { name: 'Extremadura', available: false },
    baleares: { name: 'Islas Baleares', available: false },
    canarias: { name: 'Islas Canarias', available: false }
  }

  return (
    <div className="max-w-2xl mx-auto relative">
      {hoveredRegion && regions[hoveredRegion] && (
        <div className="absolute bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm -translate-y-full">
          <span className={regions[hoveredRegion].available ? 'text-[#FFB800] font-medium' : 'text-gray-500'}>
            {regions[hoveredRegion].name}
            {regions[hoveredRegion].available ? ' (Disponible)' : ' (Próximamente)'}
          </span>
        </div>
      )}
      <svg width="837" height="670" viewBox="0 0 837 670" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Galicia */}
        <path d="M109.345 3.3125L117.712 8.63672H131.565L132.129 9.12598L143.644 19.1055H163.272L159.563 22.5674L148.685 32.7207L162.313 54.6777L163.086 55.9229L162.133 57.0342L158.409 61.3779L166.168 70.5469L167.208 71.7764L166.229 73.0557L149.925 94.3203L164.814 95.6152L166.252 95.7402L166.587 97.1445L170.613 114.056L171.003 115.693L169.455 116.356L148.119 125.501V140.771L146.947 141.303L120.373 153.383L119.861 153.614L119.305 153.547L93.1768 150.38L74.2764 156.68L73.5811 156.912L72.9014 156.64L56.7949 150.197L54.2773 149.19L55.9834 147.082L65.1885 135.71L15.5312 153.445L11.9521 154.723L12.9248 151.05L20.1719 123.67L20.2432 123.402L20.3838 123.164L30.252 106.464L4.27734 62.3848L3.41016 60.915L4.72656 59.8281L23.1748 44.5869L34.3809 33.3809L34.9668 32.7959H49.1904L49.6377 33.04L57.2939 37.2148L82.0176 16.3555L82.1895 16.2109L82.3896 16.1074L107.354 3.22266L108.375 2.69531L109.345 3.3125Z" 
          fill={regions.galicia.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373" 
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('galicia')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Asturias */}
        <path d="M231.966 13.137L242.071 21.6868L278.65 30.4349L281.369 31.0843L279.877 33.4476L260.55 64.0482L260.104 64.7542L259.29 64.9339L204.53 77.013L204.005 77.1282L203.491 76.9651L165.644 64.886L164.863 64.637L164.481 63.9114L148.376 33.3109L147.657 31.9466L148.794 30.9056L158.457 22.0472L159.031 21.5218H216.393L229.587 12.9847L230.833 12.178L231.966 13.137Z" 
          fill={regions.asturias.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373" 
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('asturias')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Cantabria */}
        <path d="M320.5 45.5L350 35.5L365.5 50L359 65.5L320.5 75.5L300.5 65.5L320.5 45.5Z"
          fill={regions.cantabria.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('cantabria')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* País Vasco */}
        <path d="M380.5 35.5L410 25.5L425.5 40L419 55.5L380.5 65.5L360.5 55.5L380.5 35.5Z"
          fill={regions.paisvasco.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('paisvasco')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Navarra */}
        <path d="M440.5 45.5L470 35.5L485.5 50L479 65.5L440.5 75.5L420.5 65.5L440.5 45.5Z"
          fill={regions.navarra.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('navarra')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* La Rioja */}
        <path d="M460.5 85.5L490 75.5L505.5 90L499 105.5L460.5 115.5L440.5 105.5L460.5 85.5Z"
          fill={regions.larioja.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('larioja')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Aragón */}
        <path d="M520.5 125.5L580 95.5L620.5 140L599 185.5L520.5 215.5L480.5 185.5L520.5 125.5Z"
          fill={regions.aragon.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('aragon')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Cataluña */}
        <path d="M642.535 68.2612L690.852 77.1186L692.015 77.3325L692.389 78.4536L700.038 101.403L768.139 109.231L797.344 91.0776L798.386 90.4301L799.435 91.0649L830.035 109.586L832.803 111.261L830.068 112.989L816.942 121.278L830.375 134.004L831.979 135.524L830.308 136.969L765.08 193.339L764.709 193.66L764.231 193.772L679.515 213.752L669.826 225.258H679.854L680.31 226.625L685.141 241.121L685.744 242.93L683.966 243.619L659.002 253.282L658.013 253.664L657.142 253.061L636.204 238.566L635.493 238.074L635.364 237.218L630.533 205.007L630.487 204.703L630.535 204.399L635.287 174.298L630.625 161.085L630.132 159.689L631.324 158.81L645.923 148.052L652.142 93.6391L636.084 80.6411L634.788 79.5922L635.587 78.1284L640.418 69.27L641.111 67.9995L642.535 68.2612Z"
          fill={regions.cataluna.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('cataluna')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Madrid */}
        <path d="M416.278 280.43L405.443 291.265H335.304L334.712 290.638L321.614 276.77H297.848L298.86 274.068L303.692 261.183L303.838 260.795L304.126 260.497L371.771 190.436L372.36 189.826H386.729L387.186 191.193L393.628 210.52L393.859 211.215L393.588 211.895L387.635 226.777L406.029 245.171L406.232 245.375L406.371 245.628L416.034 263.343L416.278 263.792V280.43Z"
          fill={regions.madrid.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('madrid')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Castilla y León */}
        <path d="M280.5 125.5L420 85.5L520.5 140L479 225.5L280.5 285.5L200.5 225.5L280.5 125.5Z"
          fill={regions.castillaleon.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('castillaleon')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Castilla-La Mancha */}
        <path d="M320.5 285.5L460 245.5L560.5 300L519 385.5L320.5 445.5L240.5 385.5L320.5 285.5Z"
          fill={regions.castillalamancha.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('castillalamancha')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Comunidad Valenciana */}
        <path d="M580.5 265.5L640 235.5L680.5 280L659 325.5L580.5 355.5L540.5 325.5L580.5 265.5Z"
          fill={regions.valencia.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('valencia')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Murcia */}
        <path d="M520.5 385.5L580 355.5L620.5 400L599 445.5L520.5 475.5L480.5 445.5L520.5 385.5Z"
          fill={regions.murcia.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('murcia')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Andalucía */}
        <path d="M280.5 445.5L420 405.5L520.5 460L479 545.5L280.5 605.5L200.5 545.5L280.5 445.5Z"
          fill={regions.andalucia.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('andalucia')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Extremadura */}
        <path d="M200.5 325.5L280 285.5L340.5 320L319 365.5L200.5 405.5L160.5 365.5L200.5 325.5Z"
          fill={regions.extremadura.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('extremadura')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Islas Baleares */}
        <path d="M720.5 265.5L760 255.5L780.5 270L774 285.5L720.5 295.5L700.5 285.5L720.5 265.5Z"
          fill={regions.baleares.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('baleares')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Islas Canarias */}
        <path d="M100.5 565.5L140 555.5L160.5 570L154 585.5L100.5 595.5L80.5 585.5L100.5 565.5Z"
          fill={regions.canarias.available ? "#FFB800" : "#D9D9D9"}
          stroke="#737373"
          strokeWidth="4"
          onMouseEnter={() => setHoveredRegion('canarias')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />
      </svg>
    </div>
  )
}