import Link from 'next/link'
import React from 'react'

const StoryButton = () => {
  return (
    <Link href={"/story"}>
      <div className="group relative inline-block">
        <button className="relative bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-orange-500/30 hover:border-orange-400/50 overflow-hidden">
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
            <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-orange-200 rounded-full animate-ping"></div>
            <div className="absolute bottom-2 left-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse animation-delay-200"></div>
            <div className="absolute bottom-1 right-2 w-1 h-1 bg-orange-200 rounded-full animate-ping animation-delay-300"></div>
          </div>

          {/* Main Content */}
          <div className="relative flex items-center space-x-2">
            {/* Writing Icon Animation */}
            <div className="relative">
              <svg 
                className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              {/* Ink trail effect */}
              <div className="absolute -top-1 -right-1 w-2 h-0.5 bg-white/60 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300 animation-delay-150"></div>
            </div>

            {/* Text with typewriter effect */}
            <span className="relative">
              <span className="inline-block transition-all duration-300 group-hover:tracking-wide">
                Craft
              </span>
              <span className="inline-block mx-1 transition-all duration-300 group-hover:text-orange-200">
                Your
              </span>
              <span className="inline-block transition-all duration-300 group-hover:tracking-wide">
                Story
              </span>
            </span>

            {/* Sparkle effect */}
            <div className="relative ml-1">
              <span className="text-lg leading-none transition-all duration-300 group-hover:animate-pulse">✨</span>
            </div>
          </div>

          {/* Flowing underline effect */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-orange-200 group-hover:w-full transition-all duration-500 ease-out"></div>
          
          {/* Ripple effect on hover */}
          <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 group-hover:animate-ping"></div>
        </button>

        {/* Floating text hint */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
          <span className="text-xs text-slate-400 whitespace-nowrap font-medium">
            Turn ideas into engaging narratives
          </span>
        </div>
      </div>
    </Link>
  )
}

export default StoryButton