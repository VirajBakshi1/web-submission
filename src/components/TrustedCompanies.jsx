// TrustedCompanies.jsx
import React from 'react';


const TrustedCompanies = () => {
  // Array of company data with names and logo placeholders
  // You'll replace the placeholder path with your actual PNG image paths
  const companies = [
    { name: 'Acme Corp', logo:"https://iili.io/38EbUfp.png" },
    { name: 'Echo Valley', logo: "https://iili.io/38EbrgI.png" },
    { name: 'Quantum', logo: "https://iili.io/38Ebg0N.png" },
    { name: 'PULSE', logo: "https://iili.io/38Eb6Jt.png" },
    { name: 'Outside', logo: "https://iili.io/38EbP5X.png" },
    { name: 'APEX', logo: "https://iili.io/38Ebien.png" },
    { name: 'Celestial', logo: "https://iili.io/38Ebsbs.png" },
    { name: '2TWICE', logo: "https://iili.io/38EbQzG.png" }
  ];
  
  
  return (
    <div className="py-10 md:py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section heading */}
        <h2 className="text-gray-300 text-center text-base md:text-xl mb-8 md:mb-12 font-light">
          Trusted by the world's most innovative teams
        </h2>
        
        {/* Company logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="bg-black border border-gray-800 rounded-xl p-4 md:p-8 flex items-center justify-center"
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="h-6 md:h-8 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;