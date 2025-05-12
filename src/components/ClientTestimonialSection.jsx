import React from 'react';

const ClientTestimonialSection = () => {
  return (
    <>
      {/* CSS for responsive grid lines with tablet-specific breakpoint */}
      <style>
        {`
          .horizontal-line-top, .horizontal-line-bottom {
            height: 1px;
            position: absolute;
            left: 10%;
            right: 10%;
            background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,0));
          }
          
          /* Mobile positions (390px) */
          .horizontal-line-top {
            top: 18px;
          }
          
          .horizontal-line-bottom {
            top: calc(120px + 14%);
          }
          
          .vertical-line-left, .vertical-line-right {
            width: 1px;
            position: absolute;
            background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,0));
            /* Mobile height - shorter */
            top: -5%;
            bottom: 40%;
          }
          
          /* Mobile positions for vertical lines (390px) */
          .vertical-line-left {
            left: 30%;
          }
          
          .vertical-line-right {
            left: 70%;
          }
          
          /* Tablet breakpoint (810px) */
          @media (min-width: 640px) and (max-width: 1023px) {
            .horizontal-line-top {
              top: 10%; /* Tablet position */
              left: 5%;  /* Wider on tablet */
              right: 5%;
            }
            
            .horizontal-line-bottom {
              top: 90%; /* Tablet position */
              left: 5%;  /* Wider on tablet */
              right: 5%;
            }
            
            .vertical-line-left {
              left: 22%; /* Tablet position */
              top: -14%;   /* Taller on tablet but not full height */
              bottom: -14%;
            }
            
            .vertical-line-right {
              left: 46.5%; /* Tablet position */
              top: -14%;   /* Taller on tablet but not full height */
              bottom: -14%;
            }
          }
          
          /* Desktop breakpoint (1200px+) */
          @media (min-width: 1024px) {
            .horizontal-line-top {
              top: 12%; /* Desktop position */
              left: 0%;  /* Full width on desktop */
              right: 0%;
            }
            
            .horizontal-line-bottom {
              top: 88%; /* Desktop position */
              left: 0%;  /* Full width on desktop */
              right: 0%;
            }
            
            .vertical-line-left {
              left: 46%; /* Desktop position */
              top: 0;    /* Full height on desktop */
              bottom: 0;
            }
            
            .vertical-line-right {
              left: 20%; /* Desktop position */
              top: 0;    /* Full height on desktop */
              bottom: 0;
            }
          }
        `}
      </style>
    
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 lg:mb-6">Our clients</h2>
          
          {/* Section Subtitle */}
          <p className="text-lg sm:text-xl mb-10 sm:mb-14 lg:mb-20 max-w-2xl mx-auto">
            Hear firsthand how our solutions have
            boosted online success for users like you.
          </p>
          
          {/* Testimonial Container with Grid Lines */}
          <div className="relative mt-8 sm:mt-12 lg:mt-16">
            {/* Grid Lines that extend to edges */}
            <div className="absolute inset-0">
              {/* Horizontal Lines */}
              <div className="horizontal-line-top"></div>
              <div className="horizontal-line-bottom"></div>
              
              {/* Vertical Lines */}
              <div className="vertical-line-left"></div>
              <div className="vertical-line-right"></div>
            </div>
            
            {/* Testimonial Content - Responsive layout for all screen sizes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 relative">
              {/* Profile Image - Responsive adjustments for all breakpoints */}
              <div className="flex items-center justify-center sm:justify-end p-4 sm:p-6 lg:p-8">
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-56 lg:h-56">
                  {/* Image with purple shadow */}
                  <div className="w-full h-full rounded-xl overflow-hidden bg-purple-400 shadow-neon-strong backdrop-blur-2xl shadow-purple-400/70">
                    <img 
                      src="https://iili.io/38EmJee.png" 
                      alt="Talia Taylor" 
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                </div>
              </div>
              
              {/* Testimonial Text - Responsive text sizes for all breakpoints */}
              <div className="p-4 sm:p-6 lg:p-8 text-center sm:text-left flex flex-col justify-center">
                <p className="text-xl sm:text-xl lg:text-2xl font-medium mb-6 sm:mb-6 lg:mb-8">
                  "This product has completely transformed how I manage my projects and deadlines"
                </p>
                <div>
                  <h4 className="text-lg sm:text-lg lg:text-xl font-semibold">Talia Taylor</h4>
                  <p className="text-gray-400 text-base sm:text-base lg:text-lg">Digital Marketing Director @ Quantum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTestimonialSection;