'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Chrome, Brain, Globe } from "lucide-react"

export const downloadZip = () => {
  const link = document.createElement('a')
  link.href = '/data/Puck-AI.zip'
  link.download = 'Puck-AI.zip'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function Hero() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-video')
    if (demoSection) {
      demoSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gray-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-4 mr-10  flex justify-center">
          <Image 
            src="/puck-logo.png" 
            alt="Puck AI Logo" 
            width={200} 
            height={200} 
            className="filter invert"
            priority
          />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Puck AI
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">Your AI Assistant, Everywhere</p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          A powerful Chrome extension that provides AI-powered assistance for any text input field on any website. Simply type <code className="bg-gray-800 px-2 py-1 rounded text-yellow-400">puck: your question;</code> in any text field and get contextual responses based on the current webpage. Special integrations for Gmail, GitHub, Slack, YouTube, and more.
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
            <Chrome className="w-4 h-4 text-blue-400" />
            <span className="text-sm">Chrome Extension</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-sm">Context-Aware AI</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
            <Globe className="w-4 h-4 text-green-400" />
            <span className="text-sm">Works Everywhere</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white cursor-pointer text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold"
            onClick={downloadZip}
          >
            Install now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 cursor-pointer text-white hover:bg-gray-800 px-8 py-3 text-lg bg-transparent"
            onClick={scrollToDemo}
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
