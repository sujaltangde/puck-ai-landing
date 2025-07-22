import { Download, MousePointer, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Download,
    title: "Install Extension",
    description: "Add Puck AI to your Chrome browser and configure your OpenAI API key for instant access.",
  },
  {
    icon: MousePointer,
    title: "Type the Command",
    description: "Navigate to any website and type `puck: your question;` in any text input field.",
  },
  {
    icon: Sparkles,
    title: "Get Contextual AI",
    description: "Receive intelligent responses based on the current webpage context and your specific request.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get started in three simple steps and transform your web experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
