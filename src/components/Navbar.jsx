// Navbar.jsx
import React, { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black py-3 px-4 md:py-4 md:px-6 flex justify-between md:justify-center md:gap-6 items-center relative border-b border-gray-900">
      {/* Logo - Recreated using precise styling to match the image */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
        {/* SVG for precise control over the purple orb with correctly positioned highlight */}
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          {/* Rounded square background */}
          <rect 
            x="2" y="2" width="96" height="96" 
            rx="24" ry="24" 
            fill="transparent" 
            stroke="#333" 
            strokeWidth="1"
          />
          
          {/* Purple glow filter */}
          <defs>
            <filter id="purple-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feFlood floodColor="#a855f7" floodOpacity="0.8" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feComposite in="SourceGraphic" in2="glow" operator="over" />
            </filter>
          </defs>
          
          {/* Purple circle with glow */}
          <circle 
            cx="50" cy="50" r="25" 
            fill="url(#purple-gradient)" 
            filter="url(#purple-glow)" 
          />
          
          {/* Gradient for the purple orb */}
          <defs>
            <radialGradient id="purple-gradient" cx="40%" cy="40%" r="60%" fx="30%" fy="30%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="60%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#7e22ce" />
            </radialGradient>
          </defs>
          
          {/* White highlight at center */}
          <circle 
            cx="50" cy="50" r="10" 
            fill="white" 
            opacity="0.9" 
            filter="blur(5px)" 
          />
          
          {/* Smaller brighter highlight at center for more intense effect */}
          <circle 
            cx="50" cy="50" r="4" 
            fill="white" 
            opacity="1" 
          />
        </svg>
      </div>
      
      {/* Navigation Links - Desktop & Tablet Only */}
      <div className="hidden md:block bg-black border border-gray-800 rounded-full py-2 px-8">
        <div className="flex space-x-6">
          <div className="flex items-center text-gray-300">
            Features <ChevronRight className="h-4 w-4 ml-1" />
          </div>
          <div className="text-gray-300">Developers</div>
          <div className="flex items-center text-gray-300">
            Company <ChevronRight className="h-4 w-4 ml-1" />
          </div>
          <div className="text-gray-300">Blog</div>
          <div className="text-gray-300">Changelog</div>
        </div>
      </div>
      
      {/* CTA Button - Desktop & Tablet Only - With New Styling */}
      <div className="hidden md:flex items-center justify-center">
        <div className="relative">
          {/* Outer border */}
          <div className="absolute -inset-2 rounded-xl border border-gray-700 opacity-70"></div>
          
          {/* Button with internal white shadow */}
          <button 
            className="relative bg-purple-700 hover:bg-purple-600 text-white px-8 py-1 rounded-xl font-medium text-lg transition-colors duration-200"
            style={{
              boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 0 10px 2px rgba(139, 92, 246, 0.6)'
            }}
          >
            Join waitlist
          </button>
        </div>
      </div>
      
      {/* Mobile Controls - Right Side Group */}
      <div className="flex items-center space-x-3 md:hidden">
        {/* CTA Button - Mobile Only - With New Styling */}
        <div className="relative">
          {/* Outer border */}
          <div className="absolute -inset-1 rounded-xl border border-gray-700 opacity-70"></div>
          
          {/* Button with internal white shadow */}
          <button 
            className="relative bg-purple-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200"
            style={{
              boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 0 10px 2px rgba(139, 92, 246, 0.4)',
            }}
          >
            Join waitlist
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="text-white focus:outline-none md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu - Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-t border-gray-800 z-50 md:hidden">
          <div className="flex flex-col py-4 px-4">
            <a href="#" className="py-3 text-gray-300 flex items-center justify-between border-b border-gray-800">
              Features <ChevronRight className="h-4 w-4" />
            </a>
            <a href="#" className="py-3 text-gray-300 border-b border-gray-800">
              Developers
            </a>
            <a href="#" className="py-3 text-gray-300 flex items-center justify-between border-b border-gray-800">
              Company <ChevronRight className="h-4 w-4" />
            </a>
            <a href="#" className="py-3 text-gray-300 border-b border-gray-800">
              Blog
            </a>
            <a href="#" className="py-3 text-gray-300 border-b border-gray-800">
              Changelog
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;