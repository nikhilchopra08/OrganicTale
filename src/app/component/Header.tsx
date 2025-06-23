import { Home , ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import OrganicTaleLogo from './Logo'

const Header = () => {
    return (
        <header className="p-5 w-full bg-slate-950 shadow-lg border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                <OrganicTaleLogo/>
                    
                    {/* Creative Back to Home Button */}
                    <div className="flex items-center space-x-4">
                        <Link href="/">
                            <div className="group relative">
                                {/* Main Button */}
                                <button className="relative flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-orange-600 hover:to-orange-700 px-6 py-2.5 rounded-full text-slate-300 hover:text-white font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-slate-600 hover:border-orange-500 overflow-hidden">
                                    {/* Animated Background Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                                    
                                    {/* Content */}
                                    <div className="relative flex items-center space-x-2">
                                        {/* Animated Arrow */}
                                        <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
                                        
                                        {/* Text with fade effect instead of sliding */}
                                        <span className="relative inline-block min-w-[50px] text-center">
                                            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0">
                                                Back to
                                            </span>
                                            <span className="inline-block transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full">
                                                Return
                                            </span>
                                        </span>
                                        
                                        {/* Home Icon with rotation */}
                                        <Home className="w-4 h-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                                        
                                        {/* Fading "Home" text */}
                                        <span className="relative inline-block min-w-[35px] text-center">
                                            <span className="inline-block transition-opacity duration-300 group-hover:opacity-0">
                                                Home
                                            </span>
                                            <span className="inline-block transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full">
                                                Base
                                            </span>
                                        </span>
                                    </div>
                                    
                                    {/* Sparkle Effect */}
                                    <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                                    <div className="absolute bottom-1 left-2 w-0.5 h-0.5 bg-orange-300 rounded-full opacity-0 group-hover:opacity-100 animation-delay-150 group-hover:animate-ping"></div>
                                </button>
                                
                                {/* Trailing Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:animate-pulse rounded-full pointer-events-none"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header