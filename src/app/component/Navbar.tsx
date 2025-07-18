'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import StoryButton from './StoryButton'
import OrganicTaleLogo from './Logo'
import NavBtn from './NavBtn'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
  ]

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)

    if (element) {
      const navbarHeight = 64 // Height of the navbar (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }

    // Close mobile menu after clicking
    setIsOpen(false)
  }

  return (
    <nav className="bg-slate-950 shadow-lg border-b border-slate-800 sticky top-0 py-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <OrganicTaleLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
{navItems.map((item) => (
  <NavBtn
    key={item.name} // 🔑 Add this line
    item={item}
    onClick={scrollToSection}
  />
))}

            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <StoryButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-orange-500 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-950 border-t border-slate-800 flex flex-col">
{navItems.map((item) => (
  <NavBtn
    key={item.name} // 🔑 Add this line
    item={item}
    onClick={scrollToSection}
  />
))}

          {/* Mobile CTA Button */}
          <div className="pt-4 pb-2 mx-auto">
            <StoryButton />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar