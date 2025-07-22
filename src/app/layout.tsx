import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Puck AI - Your AI Assistant Everywhere",
  description:
    "AI-powered assistance for any text input field on any website. Special Gmail integration for context-aware email responses.",
  keywords: "AI assistant, browser extension, Gmail integration, writing assistant, productivity",
  openGraph: {
    title: "Puck AI - Your AI Assistant Everywhere",
    description: "AI-powered assistance for any text input field on any website.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress LocatorJS errors
              window.addEventListener('error', function(e) {
                if (e.message && e.message.includes('LocatorJS')) {
                  e.preventDefault();
                  return false;
                }
              });
              
              // Suppress console errors from LocatorJS
              const originalError = console.error;
              console.error = function(...args) {
                if (args[0] && typeof args[0] === 'string' && args[0].includes('LocatorJS')) {
                  return;
                }
                if (args[0] && typeof args[0] === 'string' && args[0].includes('locator-hook-status-message')) {
                  return;
                }
                originalError.apply(console, args);
              };

              // Remove LocatorJS attributes from head
              document.addEventListener('DOMContentLoaded', function() {
                const head = document.head;
                if (head) {
                  head.removeAttribute('data-locator-hook-status-message');
                }
              });
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}
