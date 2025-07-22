'use client'

import Image from 'next/image'

const websites = [
  { logo: '/media/logos/amazon_logo.webp', name: 'Amazon' },
  { logo: '/media/logos/chatgpt_logo.webp', name: 'ChatGPT' },
  { logo: '/media/logos/flipkart_logo.webp', name: 'Flipkart' },
  { logo: '/media/logos/github_logo.webp', name: 'GitHub' },
  { logo: '/media/logos/instagram_logo.webp', name: 'Instagram' },
  { logo: '/media/logos/linkedin_logo.webp', name: 'LinkedIn' },
  { logo: '/media/logos/quora_logo.webp', name: 'Quora' },
  { logo: '/media/logos/slack_logo.webp', name: 'Slack' },
  { logo: '/media/logos/telegram_logo.webp', name: 'Telegram' },
  { logo: '/media/logos/youtube_logo.webp', name: 'YouTube' },
  { logo: '/media/logos/gmail_logo.webp', name: 'Gmail' },
  { logo: '/media/logos/sheets_logo.webp', name: 'Sheets' }
]

// Duplicate the array for seamless infinite loop
const loopWebsites = [...websites, ...websites]

export default function WebsiteCarousel() {
  return (
    <section className="py-24 px-0 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Works Everywhere You Do
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          From emails to social media, documents to forms - Puck AI enhances your writing across all platforms
        </p>
      </div>
      <div className="relative w-full">
        {/* Auto-scrolling carousel */}
        <div className="overflow-hidden w-full">
          <div
            className="flex items-center gap-8 animate-carousel"
            style={{
              width: `calc(10 * 8rem * 2)`, // 10 logos * 8rem width * 2 (duplicated)
              animation: 'carousel-scroll 30s linear infinite',
            }}
          >
            {loopWebsites.map((website, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-32 h-32 flex items-center justify-center"
              >
                <div className="w-24 h-24 flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                  <Image
                    src={website.logo}
                    alt={website.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes carousel-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          animation: carousel-scroll 30s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-carousel > div {
            width: 6rem !important;
            height: 6rem !important;
          }
        }
      `}</style>
    </section>
  )
} 