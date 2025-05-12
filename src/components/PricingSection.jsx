import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  // State to track billing period (monthly or annual)
  const [isAnnual, setIsAnnual] = useState(false);
  
  // Toggle between monthly and annual billing
  const toggleBillingPeriod = () => {
    setIsAnnual(!isAnnual);
  };

  // Calculate annual price with 20% discount
  const getAnnualPrice = (monthlyPrice) => {
    // Extract the numeric value from the price string
    const priceValue = parseFloat(monthlyPrice.replace('$', ''));
    // Calculate annual price with 20% discount
    const annualPrice = priceValue * 12 * 0.8;
    return `$${annualPrice}/yr`;
  };

  // Define pricing plan data using an array
  const pricingPlans = [
    {
      name: "Basic",
      monthlyPrice: "$29/mo",
      features: [
        "Keyword optimization",
        "Automated meta tags",
        "SEO monitoring",
        "Monthly reports"
      ]
    },
    {
      name: "Pro",
      monthlyPrice: "$79/mo",
      features: [
        "Keyword optimization",
        "Automated meta tags",
        "SEO monitoring",
        "Monthly reports",
        "Content suggestions",
        "Link optimization"
      ]
    },
    {
      name: "Business",
      monthlyPrice: "$149/mo",
      features: [
        "Keyword optimization",
        "Automated meta tags",
        "SEO monitoring",
        "Monthly reports",
        "Content suggestions",
        "Link optimization",
        "Multi-user access",
        "API integration"
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white px-4">
      <div className="max-w-7xl w-full mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-5xl font-bold mb-6">Pricing</h1>
        
        {/* Section Subtitle */}
        <p className="text-xl mb-12 max-w-3xl mx-auto">
          Choose the right plan to meet your SEO 
          <br />
          needs and start optimizing today.
        </p>
        
        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center">
            <span className={`mr-3 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            
            {/* Interactive toggle switch */}
            <button 
              onClick={toggleBillingPeriod}
              className="w-12 h-6 bg-gray-800 rounded-full p-1 flex"
              aria-label={isAnnual ? "Switch to monthly billing" : "Switch to annual billing"}
            >
              <div 
                className={`w-4 h-4 rounded-full transition-all duration-300 transform ${
                  isAnnual ? 'translate-x-6 bg-purple-500' : 'translate-x-0 bg-purple-500'
                }`}
              ></div>
            </button>
            
            <span className={`ml-3 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-1 text-xs text-purple-400 font-medium">Save 20%</span>
            </span>
          </div>
        </div>
        
        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className="group bg-black border border-gray-800 rounded-lg overflow-hidden transition-all duration-150 hover:shadow-[0_0_60px_rgba(147,51,234,0.5)] relative h-full flex flex-col w-full"
            >
              {/* Combined Grid and Gradient Effect Container */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-0 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                
                {/* Grid pattern with mask to fade it out */}
                <div className="absolute inset-0" style={{ 
                  maskImage: 'linear-gradient(to top, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0))', 
                  WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0))'
                }}>
                  <div className="h-full w-full grid grid-cols-6 grid-rows-10">
                    {Array.from({ length: 60 }).map((_, i) => (
                      <div key={i} className="border-b border-r border-white/40"
                      style={{ 
                        borderRightStyle: 'dashed', 
                        borderBottomStyle: 'dashed',
                        borderWidth: '1px'
                      }}></div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-10 text-left flex-grow relative z-10">
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                
                {/* Dynamic price display based on selected billing period */}
                <div className="relative h-12">
                  <p 
                    className={`text-xl text-gray-300 absolute transition-all duration-300 ${
                      isAnnual ? 'opacity-0 -translate-y-2' : 'opacity-100'
                    }`}
                  >
                    {plan.monthlyPrice}
                  </p>
                  <p 
                    className={`text-xl text-gray-300 absolute transition-all duration-300 ${
                      isAnnual ? 'opacity-100' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    {getAnnualPrice(plan.monthlyPrice)}
                  </p>
                </div>
                
                <div className="border-t border-gray-800 my-4"></div>
                
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-white mt-0.5 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 mt-auto relative z-10">
                <button className="w-full bg-gray-800 group-hover:bg-purple-600 text-white py-3 rounded-md transition-colors duration-150">
                  Join waitlist
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional disclaimer text */}
        <p className="text-gray-400 text-sm mt-10">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </div>
  );
};

export default PricingSection;