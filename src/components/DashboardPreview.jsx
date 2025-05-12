import React from 'react';

export const DashboardPreview = ({ dashboardImageSrc }) => {
  return (
    <div className="max-w-7xl w-full mx-auto mb-16 px-4">
      <div className="relative">
        {/* Top-only purple gradient glow effect with increased area */}
        <div 
          className="absolute -z-10" 
          style={{
            background: 'radial-gradient(ellipse at top center, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 40%)',
            top: '-100px',
            left: '-100px',
            right: '-100px',
            height: '300px',
            borderRadius: '100%',
            filter: 'blur(40px)'
          }}
        ></div>
        
        {/* Dashboard image with top-only shadow */}
        <div className="relative">
          {/* Top shadow overlay for the image - only at top */}
          <div 
            className="absolute pointer-events-none z-10"
            style={{
              boxShadow: 'inset 0 70px 100px -120px rgba(139, 92, 246, 0.8)',
              top: 0,
              left: 0,
              right: 0,
              height: '150px',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px'
            }}
          ></div>
          
          {/* Bottom-to-top gradient (black to transparent) */}
          <div 
            className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0) 100%)',
              height: '300px',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px'
            }}
          ></div>
          
          <img 
            src={dashboardImageSrc || "https://iili.io/38Emdmu.png"} 
            alt="SEO Dashboard Interface" 
            className="w-full h-auto rounded-xl border border-gray-800 relative z-1"
            style={{
              boxShadow: '0 -80px 200px -20px rgba(139, 92, 246, 0.7), 0 20px 60px -30px rgba(0, 0, 0, 0.7)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;