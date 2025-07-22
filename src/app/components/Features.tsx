import { Brain, Globe, Mail, MessageSquare, Sparkles, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Context-Aware AI",
    description: "Intelligently analyzes the current webpage and provides responses based on the context you're working in.",
  },
  {
    icon: Globe,
    title: "Universal Coverage",
    description: "Works on any website with text input fields - from social media to professional platforms.",
  },
  {
    icon: Mail,
    title: "Gmail Integration",
    description: "Compose emails with full thread context, generate professional responses, and extract conversation history.",
  },
  {
    icon: MessageSquare,
    title: "Platform-Specific Features",
    description: "Enhanced integrations for GitHub, Slack, YouTube, Facebook, Instagram, and Quora with specialized context.",
  },
  {
    icon: Sparkles,
    title: "Simple Command",
    description: "Just type `puck: your question;` in any text field and get instant AI assistance.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Processes commands as you type with no interruption to your workflow.",
  },
]

export default function Features() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to supercharge your writing and communication across the web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <feature.icon className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
