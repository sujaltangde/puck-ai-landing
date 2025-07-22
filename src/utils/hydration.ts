// Utility functions for handling hydration issues

export const isClient = typeof window !== 'undefined'

export const isServer = !isClient

// Check if we're in development mode
export const isDev = process.env.NODE_ENV === 'development'

// Suppress hydration warnings in development
export const suppressHydrationWarning = isDev

// Debug hydration mismatches
export const debugHydration = (componentName: string) => {
  if (isDev && isClient) {
    console.log(`[Hydration Debug] ${componentName} mounted on client`)
  }
}

// Safe access to window/document
export const safeWindow = isClient ? window : null
export const safeDocument = isClient ? document : null 