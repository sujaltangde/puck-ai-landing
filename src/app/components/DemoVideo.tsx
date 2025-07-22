"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ReactPlayer from "react-player";
import { downloadZip } from "./Hero";

export default function DemoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Only autoplay if user has interacted with the page
          if (userInteracted) {
            setIsPlaying(true);
          }
        } else {
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, [userInteracted]);

  // Track user interaction with the page
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
    };

    // Listen for any user interaction
    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("scroll", handleUserInteraction, { once: true });
    document.addEventListener("keydown", handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  const handleError = (error: unknown) => {
    console.log("Video playback error:", error);
    setIsPlaying(false);
  };

  return (
    <section
      id="demo-video"
      className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            See Puck AI in Action
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how easy it is to get AI assistance on any website with just a
            click
          </p>
        </div>

        <div ref={videoRef} className="relative max-w-4xl mx-auto">
          {/* React Player */}
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <ReactPlayer
              src="/media/videos/puck_demo.mp4"
              playing={isPlaying}
              controls
              width="100%"
              height="100%"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={handleError}
              className="react-player"
              loop={true}
              muted={true}
              playsInline={true}
            />
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Universal Compatibility
              </h3>
              <p className="text-gray-400 text-sm">
                Works on any website with text input fields
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Instant Activation
              </h3>
              <p className="text-gray-400 text-sm">
                Click any text field to get AI assistance instantly
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Smart Suggestions
              </h3>
              <p className="text-gray-400 text-sm">
                Context-aware responses tailored to your needs
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-white cursor-pointer text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold"
              onClick={downloadZip}
            >
              Try Puck AI Now
            </Button>
            <p className="text-gray-500 text-sm mt-4">
              Free to install • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
