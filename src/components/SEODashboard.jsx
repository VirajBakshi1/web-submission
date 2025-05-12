// SEODashboard.jsx
import React from 'react';

const SEODashboard = () => {
  // Data for each card
  const cards = [
    {
      title: "SEO goal setting",
      description: "Helps you set and achieve SEO goals with guided assistance.",
      image: "src/assets/Ring-image.png", // Using the image path you provided
      position: "col-span-1"
    },
    {
      title: "User-friendly dashboard",
      description: "Perform complex SEO audits and optimizations with a single click.",
      image: "src/assets/ss2-image.png",
      position: "col-span-2 md:col-span-2"
    },
    {
      title: "Visual reports",
      description: "Visual insights into your site's performance.",
      stats: {
        value: "59.8K",
        change: "+10.7%"
      },
      image: "src/assets/ss3-image.png",
      position: "col-span-2 md:col-span-2"
    },
    {
      title: "Smart Keyword Generator",
      description: "Automatic suggestions and the best keywords to target.",
      image: "src/assets/Cone-image.png",
      position: "col-span-1"
    }
  ];

  // Component for the main heading
  const Header = () => (
    <div className="text-center mb-6 md:mb-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight px-4">
        Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
      </h1>
    </div>
  );

  // Card component with different layouts based on index
  const Card = ({ card, index }) => {
    // Cards 0 and 3 (first and last) have image above text
    if (index === 0 || index === 3) {
      return (
        <div className={`rounded-xl overflow-hidden ${card.position} bg-black border-[1px] border-gray-800 flex flex-col h-[450px] sm:h-auto`}>
          {/* Image section - taller on mobile only */}
          <div className="h-60 sm:h-40 md:h-48 bg-black flex items-center justify-center">
            <img src={card.image} alt={card.title} className="w-4/5 h-4/5 sm:w-full sm:h-full object-contain" />
          </div>
          
          {/* Text content */}
          <div className="p-6 sm:p-4 md:p-6 flex flex-col flex-grow">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-3 sm:mb-2">{card.title}</h2>
            <p className="text-gray-300 text-sm md:text-base">{card.description}</p>
          </div>
        </div>
      );
    }
    
    // Cards 1 and 2 (second and third) have overlay design
    return (
      <div className={`relative rounded-xl overflow-hidden ${card.position} bg-black h-[450px] sm:h-48 md:h-auto`}>
        <div className="absolute inset-0 bg-opacity-30">
          <img src={card.image} alt={card.title} className="w-full h-full mt-3 md:mt-5 ml-3 md:ml-5 object-contain" />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/30 to-transparent sm:from-purple-900/80 sm:via-purple-900/20"></div>
        
        {/* Text content */}
        <div className="relative p-6 sm:p-4 md:p-6 flex flex-col h-full justify-end">
          {card.stats && (
            <div className="mb-4 sm:mb-2 md:mb-4">
              <p className="text-sm text-gray-400 mb-1">Traffic</p>
              <div className="flex items-baseline">
                <span className="text-3xl sm:text-2xl md:text-4xl font-bold text-white">{card.stats.value}</span>
                <span className="ml-2 text-sm text-green-400">{card.stats.change}</span>
              </div>
            </div>
          )}
          <h2 className="text-xl sm:text-lg md:text-xl font-semibold text-white mb-3 sm:mb-1 md:mb-2">{card.title}</h2>
          <p className="text-gray-300 text-sm md:text-base">{card.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 text-white">
      <Header />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SEODashboard;