
// SEOFeatures.jsx
import React from 'react';
import { 
  Home, BarChart2, Key, AlignLeft, Target, 
  Bell, Link, Zap, BarChart
} from 'lucide-react';

const SeoFeatureCard = ({ icon, title, description }) => {
  return (
    <div className="mb-8 md:mb-10">
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="ml-2 text-base md:text-lg font-medium text-white">{title}</h3>
      </div>
      <p className="text-gray-400 text-xs md:text-sm">{description}</p>
    </div>
  );
};

const SEOFeatures = () => {
  const features = [
    {
      icon: <Home className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      title: "User-friendly dashboard",
      description: "Perform complex SEO audits and optimizations with a single click."
    },
    {
      icon: <BarChart2 className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      title: "Visual reports",
      description: "Visual insights into your site's performance."
    },
    {
      icon: <Key className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      title: "Smart Keyword Generator",
      description: "Automatic suggestions and the best keywords to target."
    },
    {
      icon: <AlignLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      title: "Content evaluation",
      description: "Simple corrections for immediate improvements."
    },
    {
      icon: <Target className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      title: "SEO goal setting",
      description: "Helps you set and achieve SEO goals with guided assistance."
    },
    {
      icon: <Bell className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      title: "Automated alerts",
      description: "Automatic notifications about your SEO health, including quick fixes."
    },
    {
      icon: <Link className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      title: "Link Optimization Wizard",
      description: "Guides you through the process of creating and managing links."
    },
    {
      icon: <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      title: "One-click optimization",
      description: "Perform complex SEO audits and optimizations with a single click."
    },
    {
      icon: <BarChart className="w-4 h-4 md:w-5 md:h-5 text-white" />,
      title: "Competitor reports",
      description: "Provides insights into competitors' keyword strategies and ranking."
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-900/30 via-purple-900/20 to-transparent min-h-screen p-10 sm:p-10 md:p-20 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1">Elevate your</h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">SEO efforts.</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <SeoFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEOFeatures;
