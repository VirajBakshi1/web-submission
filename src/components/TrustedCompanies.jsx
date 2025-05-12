// TrustedCompanies.jsx
import React from 'react';

const TrustedCompanies = () => {
  // Array of company data with names and logo placeholders
  // You'll replace the placeholder path with your actual PNG image paths
  const companies = [
    { name: 'Acme Corp', logo: 'src/assets/logos/logo1.png' },
    { name: 'Echo Valley', logo: 'src/assets/logos/logo2.png' },
    { name: 'Quantum', logo: 'src/assets/logos/logo3.png' },
    { name: 'PULSE', logo: 'src/assets/logos/logo4.png' },
    { name: 'Outside', logo: 'src/assets/logos/logo5.png' },
    { name: 'APEX', logo: 'src/assets/logos/logo6.png' },
    { name: 'Celestial', logo: 'src/assets/logos/logo7.png' },
    { name: '2TWICE', logo: 'src/assets/logos/logo8.png' }
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