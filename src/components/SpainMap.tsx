'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Region = {
  name: string;
  available: boolean;
  url?: string;
}

export default function SpainMap() {
  const router = useRouter()
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  
  const regions: { [key: string]: Region } = {
    galicia: { name: 'Galicia', available: false },
    asturias: { name: 'Asturias', available: false },
    cantabria: { name: 'Cantabria', available: false },
    paisvasco: { name: 'País Vasco', available: false },
    navarra: { name: 'Navarra', available: false },
    larioja: { name: 'La Rioja', available: false },
    aragon: { name: 'Aragón', available: false },
    cataluna: { 
      name: 'Cataluña', 
      available: true,
      url: 'https://selectivi.cat'
    },
    madrid: { 
      name: 'Madrid', 
      available: true,
      url: '/madrid'
    },
    castillaleon: { name: 'Castilla y León', available: false },
    castillalamancha: { name: 'Castilla-La Mancha', available: false },
    valencia: { name: 'Comunidad Valenciana', available: false },
    murcia: { name: 'Región de Murcia', available: false },
    andalucia: { name: 'Andalucía', available: false },
    extremadura: { name: 'Extremadura', available: false },
    baleares: { name: 'Islas Baleares', available: false },
    canarias: { name: 'Islas Canarias', available: false }
  }

  const handleRegionClick = (region: string) => {
    const regionData = regions[region]
    if (regionData.available && regionData.url) {
      if (regionData.url.startsWith('http')) {
        window.location.href = regionData.url
      } else {
        router.push(regionData.url)
      }
    }
  }

  const handleMouseEnter = (region: string) => {
    setHoveredRegion(region)
  }

  const handleMouseLeave = () => {
    setHoveredRegion(null)
  }

  return (
    <div className="max-w-2xl mx-auto relative">
      {hoveredRegion && regions[hoveredRegion] && (
        <div 
          className="absolute bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm -translate-y-full"
          style={{
            left: '50%',
            transform: 'translateX(-50%) translateY(-100%)',
          }}
        >
          <span className={regions[hoveredRegion].available ? 'text-[#FFB800] font-medium' : 'text-gray-500'}>
            {regions[hoveredRegion].name}
            {regions[hoveredRegion].available ? ' (Disponible)' : ' (Próximamente)'}
          </span>
        </div>
      )}

      <div className="w-full">
        <Image 
          src="/images/Group 27.svg" 
          alt="Mapa de España" 
          width={837} 
          height={670}
          useMap="#spain-map"
          className="w-full h-auto"
        />

        <map name="spain-map">
          {/* Madrid */}
          <area 
            shape="poly" 
            coords="416,280,405,291,335,291,334,290,321,276,297,276,298,274,303,261,303,260,304,260,371,190,372,189,386,189,387,191,393,210,393,211,393,211,387,226,406,245,406,245,406,245,416,263,416,263,416,280"
            href={regions.madrid.available ? regions.madrid.url : undefined}
            onMouseEnter={() => handleMouseEnter('madrid')}
            onMouseLeave={handleMouseLeave}
            alt="Madrid"
            className={`cursor-${regions.madrid.available ? 'pointer' : 'default'}`}
          />

          {/* Cataluña */}
          <area 
            shape="poly" 
            coords="642,68,690,77,692,77,692,78,700,101,768,109,797,91,798,90,799,91,830,109,832,111,830,112,816,121,830,134,831,135,830,136,765,193,764,193,764,193,679,213,669,225,679,225,680,226,685,241,685,242,683,243,659,253,658,253,657,253,636,238,635,238,635,237,630,205,630,204,630,204,635,174,630,161,630,159,631,158,645,148,652,93,636,80,634,79,635,78,640,69,641,67,642,68"
            href={regions.cataluna.available ? regions.cataluna.url : undefined}
            onMouseEnter={() => handleMouseEnter('cataluna')}
            onMouseLeave={handleMouseLeave}
            alt="Cataluña"
            className={`cursor-${regions.cataluna.available ? 'pointer' : 'default'}`}
          />

          {/* Resto de áreas... */}
        </map>
      </div>
    </div>
  )
}