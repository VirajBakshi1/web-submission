// DashboardPreview.jsx
import React from 'react';

export const DashboardPreview = ({ dashboardImageSrc }) => {
  return (
    <div className="max-w-7xl w-full mx-auto mb-8 md:mb-16 px-4">
      <div className="relative">
        {/* Top-only purple gradient glow effect with increased area */}
        <div 
          className="absolute -z-10" 
          style={{
            background: 'radial-gradient(ellipse at top center, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 40%)',
            top: '-50px',
            left: '-50px',
            right: '-50px',
            height: '200px',
            borderRadius: '100%',
            filter: 'blur(30px)'
          }}
        ></div>
        
        {/* Dashboard image with top-only shadow */}
        <div className="relative">
          {/* Top shadow overlay for the image - only at top */}
          <div 
            className="absolute pointer-events-none z-10"
            style={{
              boxShadow: 'inset 0 40px 60px -80px rgba(139, 92, 246, 0.8)',
              top: 0,
              left: 0,
              right: 0,
              height: '100px',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px'
            }}
          ></div>
          
          <img 
            src={dashboardImageSrc || "/api/placeholder/1280/720"} 
            alt="SEO Dashboard Interface" 
            className="w-full h-auto rounded-xl border border-gray-800 relative z-1"
            style={{
              boxShadow: '0 -40px 100px -20px rgba(139, 92, 246, 0.7), 0 10px 30px -20px rgba(0, 0, 0, 0.7)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
