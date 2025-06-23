import React from 'react'

interface NavItem {
  name: string
  href: string
}

interface NavBtnProps {
  item: NavItem
  onClick: (href: string) => void
}

const NavBtn: React.FC<NavBtnProps> = ({ item, onClick }) => {
  return (
    <button
      key={item.name}
      onClick={() => onClick(item.href)}
      className="group relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>
      
      {/* Text Content */}
      <span className="relative z-10 text-slate-300 group-hover:text-white transition-all duration-300 group-hover:font-semibold">
        {item.name}
      </span>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-orange-500/30 transition-all duration-300"></div>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 group-hover:w-full group-hover:left-0 transition-all duration-400 ease-out rounded-full"></div>
      
      {/* Subtle Glow Dots */}
      <div className="absolute top-1 right-1 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-pulse transition-opacity duration-300"></div>
      <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-orange-300 rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300 animation-delay-200"></div>
      
      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
    </button>
  )
}

export default NavBtn