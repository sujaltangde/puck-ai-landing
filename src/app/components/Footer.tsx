import Image from "next/image"
import { Twitter, Github, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <Image src="/puck-logo.png" alt="Puck AI" width={52} height={52} className="filter mb-7 invert" />
            <span className="text-xl font-bold text-white">Puck AI</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Support
            </a>

            <div className="flex items-center gap-4 ml-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2025 Puck AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
