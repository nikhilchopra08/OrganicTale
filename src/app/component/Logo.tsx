import Link from 'next/link'
import React from 'react'

const OrganicTaleLogo = () => {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="flex items-center group relative">
        {/* Icon Container */}
        <div className="relative mr-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
            <div className="relative">
              {/* Organic leaf/story icon */}
              <svg 
                className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" opacity="0.6"/>
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              
              {/* Sparkle effect */}
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-orange-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Floating glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300 blur-sm"></div>
        </div>

        {/* Brand Text */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-1">
            <span className="text-xl font-bold text-white transition-all duration-300 group-hover:text-orange-200">
              Organic
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent transition-all duration-300 group-hover:from-orange-300 group-hover:to-orange-200">
              Tale
            </span>
          </div>
          
          {/* Tagline */}
          <span className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 font-medium tracking-wide">
            Authentic Stories
          </span>
        </div>

        {/* Animated underline */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 group-hover:w-full transition-all duration-500 ease-out"></div>
      </Link>
    </div>
  )
}

export default OrganicTaleLogo