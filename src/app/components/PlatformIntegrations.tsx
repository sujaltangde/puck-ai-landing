import { Mail, Github, MessageSquare, Youtube, HelpCircle, Globe } from "lucide-react"

const platforms = [
  {
    icon: Mail,
    name: "Gmail",
    description: "Compose emails with context from the current email thread. Generate professional responses based on conversation history.",
    color: "text-red-400"
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Write issue descriptions and comments with full context. Generate pull request descriptions and respond to issues.",
    color: "text-gray-400"
  },
  {
    icon: MessageSquare,
    name: "Slack",
    description: "Compose messages with conversation context. Generate responses based on recent messages and participants.",
    color: "text-purple-400"
  },
  {
    icon: Youtube,
    name: "YouTube",
    description: "Write comments with video context. Access video title, description, and engagement metrics.",
    color: "text-red-500"
  },
  {
    icon: HelpCircle,
    name: "Quora",
    description: "Write answers with full question context. Generate responses to existing answers.",
    color: "text-orange-400"
  },
  {
    icon: Globe,
    name: "Any Website",
    description: "Works on any website with text input fields. While enhanced for specific platforms, Puck works everywhere.",
    color: "text-green-400"
  }
]

export default function PlatformIntegrations() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 pb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Platform Integrations
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Puck AI provides enhanced context-aware assistance for popular platforms while working universally across the web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <platform.icon className={`w-8 h-8 ${platform.color} group-hover:scale-110 transition-transform`} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{platform.name}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{platform.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">How to Use Puck</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <code className="text-yellow-400 text-lg">puck:Write a professional email response to this customer inquiry;</code>
            </div>
            <p className="text-gray-400 mb-4">
              Simply type <code className="bg-gray-800 px-2 py-1 rounded text-yellow-400">puck: your question;</code> in any text field
            </p>
            <p className="text-gray-400">
              Puck automatically analyzes the webpage context and provides intelligent responses based on your request
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 