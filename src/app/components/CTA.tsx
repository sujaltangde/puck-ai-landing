'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Github } from "lucide-react";
import { downloadZip } from "./Hero";


export default function CTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 text-gray-400">Helping users type smarter, everywhere</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Supercharge Your Browsing?
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Install Puck AI and start typing <code className="bg-gray-800 px-2 py-1 rounded text-yellow-400">puck: your questions;</code> anywhere on the web. 
          Transform how you write emails, comments, and content across all your favorite platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white cursor-pointer text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold group"
            onClick={downloadZip}
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 cursor-pointer text-white hover:bg-gray-800 px-8 py-4 text-lg bg-transparent group"
            onClick={() => window.open('https://github.com/sujaltangde/Puck-AI', '_blank')}
          >
            <Github  className="mr-2 w-5 h-5" />
            View on GitHub
          </Button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Free to install • Requires OpenAI API key • Works on Chrome, Firefox, Edge, and Brave
        </p>
      </div>
    </section>
  );
}
