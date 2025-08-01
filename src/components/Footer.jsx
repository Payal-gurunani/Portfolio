import React, { useState, useEffect } from 'react'
import { 
  Heart, 
   
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  
} from 'lucide-react'

export  const   Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-white/10 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} John Doe. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Compact Footer Component
export const CompactFooter = () => {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="py-12 px-4 bg-gray-900/80 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-2xl font-bold gradient-text mb-4">John Doe</div>
        
        <div className="flex justify-center space-x-8 mb-8">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <div className="text-gray-400 text-sm">
          © {currentYear} Made with <Heart className="w-4 h-4 text-red-500 fill-current inline animate-pulse" /> by John Doe
        </div>
      </div>
    </footer>
  )
}

export default Footer;