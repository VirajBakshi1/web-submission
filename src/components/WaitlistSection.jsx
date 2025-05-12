
// WaitlistSection.jsx
import React from 'react';

const WaitlistSection = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-6xl relative">
        {/* Background Container */}
        <div className="rounded-2xl overflow-hidden border border-purple-800/30 bg-black relative p-4 sm:p-8 md:p-16">
          {/* Radial Gradient */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: 'radial-gradient(circle at center top, rgba(91, 33, 182, 0.4) 0%, rgba(0, 0, 0, 1) 70%)',
            }}
          ></div>
          
          {/* Grid Pattern that fades with gradient */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              maskImage: 'radial-gradient(circle at center top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
              WebkitMaskImage: 'radial-gradient(circle at center top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
            }}
          >
            <div className="h-full w-full grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 grid-rows-4 md:grid-rows-6">
              {Array.from({ length: 72 }).map((_, i) => (
                <div key={i} className="border-r border-b border-purple-500/30" style={{ 
                  borderRightStyle: 'dashed', 
                  borderBottomStyle: 'dashed',
                  borderWidth: '1px'
                }}></div>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center py-8 md:py-16">
            {/* Main Heading */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-16">
              AI-driven SEO
              <br />
              for everyone.
            </h1>
            
            {/* Email Form */}
            <div className="w-full max-w-lg flex flex-col md:flex-row gap-4 mb-6 md:mb-8 px-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow px-4 py-3 rounded-lg bg-black/60 border border-purple-800/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="whitespace-nowrap px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Join waitlist
              </button>
            </div>
            
            {/* Disclaimer */}
            <p className="text-gray-400 text-center text-sm md:text-base">
              No credit card required · 7-days free trial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistSection;