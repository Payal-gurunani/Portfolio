import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-20"></div>
      
      <div className="absolute inset-0">
        <div 
          className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{
            top: '40%',
            right: '10%',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{
            bottom: '20%',
            left: '50%',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
      </div>
      
      <div className="relative z-10 text-center animate-fade-in px-4">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
            <span className="gradient-text">Payal Gurunani</span>
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
        </div>
        
        <h2 className="text-xl sm:text-2xl md:text-4xl mb-8 text-gray-300 font-light">
           Full Stack Developer | Problem Solver | Project Builder
        </h2>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-400 leading-relaxed">
  Turning ideas into full-stack applications, solving complex problems with DSA, and building meaningful projects that blend technology and impact.
</p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white/30 hover:border-white/60 rounded-full font-semibold glass-effect transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </button>
      </div>
    </section>
  )
}

export default Hero

