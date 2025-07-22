import Hero from "./components/Hero"
import Features from "./components/Features"
import PlatformIntegrations from "./components/PlatformIntegrations"
import DemoVideo from "./components/DemoVideo"
import HowItWorks from "./components/HowItWorks"
import WebsiteCarousel from "./components/WebsiteCarousel"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <PlatformIntegrations />
      <DemoVideo />
      <HowItWorks />
      <WebsiteCarousel />
      <CTA />
      <Footer />
    </div>
  )
}
