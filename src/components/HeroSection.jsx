import React from 'react';

export const HeroSection = () => {
  return (
    <div className="relative text-center py-10 md:py-16 px-4 overflow-hidden bg-black md:bg-transparent isolate">
      {/* Radial gradient background - hidden on mobile, visible on md+ screens */}
      <div 
        className="absolute inset-0 -z-10 w-[200%] h-[200%] left-[-50%] top-[-50%] bg-black opacity-0 md:opacity-100"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.2) 5%, rgba(0, 0, 0, 1) 70%)',
        }}
      ></div>
      
      {/* New Feature Badge */}
      <div className="inline-block mb-6 md:mb-8">
        <div className="bg-black/50 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-purple-300 border border-gray-900 text-xs md:text-sm flex items-center">
          <span className="bg-purple-700 text-white text-xs px-1.5 py-0.5 rounded-md mr-1.5 md:mr-2 font-medium">NEW</span>
          Latest integration just arrived
        </div>
      </div>
      
      {/* Main Headline */}
      <div className="mb-4 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
          <div className="text-white mb-1 md:mb-2">
            Boost your
          </div>
          
          <div className="bg-gradient-to-t from-purple-600 via-purple-200 to-white inline-block text-transparent bg-clip-text">
            rankings with AI.
          </div>
        </h1>
      </div>
      
      {/* Subheadline */}
      <p className="text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10 text-base md:text-lg relative z-10">
        Elevate your site's visibility effortlessly with AI, where
        smart technology meets user-friendly SEO tools.
      </p>
      
      {/* CTA Button */}
      <button className="bg-white hover:bg-gray-100 text-black px-5 py-2.5 md:px-6 md:py-3 z-10 rounded-md font-medium transition-colors duration-200 relative">
        Start for free
      </button>
    </div>
  );
};

export default HeroSection;