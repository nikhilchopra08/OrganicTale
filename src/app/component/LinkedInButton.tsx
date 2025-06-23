'use client'

import Link from 'next/link'
import React from 'react'
import { ExternalLink } from 'lucide-react'

const LinkedInButton = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/nikhil-chopra-238334270/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group relative inline-block">
        <button className="relative bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-blue-500/30 hover:border-indigo-400/50 overflow-hidden">

          {/* Animated Background Sparkle */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
            <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-indigo-200 rounded-full animate-ping"></div>
            <div className="absolute bottom-2 left-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse animation-delay-200"></div>
            <div className="absolute bottom-1 right-2 w-1 h-1 bg-indigo-200 rounded-full animate-ping animation-delay-300"></div>
          </div>

          {/* Main Content */}
          <div className="relative flex items-center space-x-2">
            <ExternalLink className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300" />

            <span className="relative">
              <span className="inline-block transition-all duration-300 group-hover:tracking-wide">
                Connect
              </span>
              <span className="inline-block mx-1 transition-all duration-300 group-hover:text-indigo-200">
                on
              </span>
              <span className="inline-block transition-all duration-300 group-hover:tracking-wide">
                LinkedIn
              </span>
            </span>

            <div className="relative ml-1">
              <span className="text-lg leading-none transition-all duration-300 group-hover:animate-pulse">💼</span>
            </div>
          </div>

          {/* Flowing underline effect */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-indigo-200 group-hover:w-full transition-all duration-500 ease-out"></div>

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 group-hover:animate-ping"></div>
        </button>

        {/* Floating text hint */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
          <span className="text-xs text-slate-400 whitespace-nowrap font-medium">
            Let’s build something together!
          </span>
        </div>
      </div>
    </Link>
  )
}

export default LinkedInButton
