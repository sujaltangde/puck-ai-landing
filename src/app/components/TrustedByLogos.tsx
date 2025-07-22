'use client'

const logos = [
  {
    name: 'Carnival',
    svg: (
      <svg viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
        <rect width="80" height="32" rx="6" fill="currentColor" className="text-gray-700" />
        <text x="40" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial, sans-serif">Carnival</text>
      </svg>
    ),
  },
  {
    name: 'Indiana University',
    svg: (
      <svg viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
        <rect width="40" height="32" rx="6" fill="currentColor" className="text-gray-700" />
        <text x="20" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial, sans-serif">IU</text>
      </svg>
    ),
  },
  {
    name: 'DoorDash',
    svg: (
      <svg viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
        <rect width="80" height="32" rx="6" fill="currentColor" className="text-gray-700" />
        <text x="40" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial, sans-serif">DOORDASH</text>
      </svg>
    ),
  },
  {
    name: 'Lyft',
    svg: (
      <svg viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
        <rect width="60" height="32" rx="6" fill="currentColor" className="text-gray-700" />
        <text x="30" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial, sans-serif">lyft</text>
      </svg>
    ),
  },
  {
    name: 'Compass',
    svg: (
      <svg viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
        <rect width="80" height="32" rx="6" fill="currentColor" className="text-gray-700" />
        <text x="40" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial, sans-serif">COMPASS</text>
      </svg>
    ),
  },
  {
    name: 'L’Oreal',
    svg: (
      <svg viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
        <rect width="80" height="32" rx="6" fill="currentColor" className="text-gray-700" />
        <text x="40" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial, sans-serif">L&apos;ORÉAL</text>
      </svg>
    ),
  },
  {
    name: 'Zendesk',
    svg: (
      <svg viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
        <rect width="60" height="32" rx="6" fill="currentColor" className="text-gray-700" />
        <text x="30" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial, sans-serif">Zendesk</text>
      </svg>
    ),
  },
]

export default function TrustedByLogos() {
  return (
    <section className="w-full bg-black py-12 px-2 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h3 className="text-lg md:text-xl font-medium text-gray-300 mb-8 text-center">
          Trusted by more than <span className="font-bold text-white">100,000</span> of the world’s leading organizations
        </h3>
        <div className="w-full flex flex-wrap md:flex-nowrap justify-center items-center gap-x-10 gap-y-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer"
              title={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 