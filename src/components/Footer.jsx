import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Integration', 'Updates', 'FAQ', 'Pricing'],
    Company: ['About', 'Blog', 'Careers', 'Manifesto', 'Press', 'Contract'],
    Resources: ['Examples', 'Community', 'Guides', 'Docs', 'Press'],
    Legal: ['Privacy', 'Terms', 'Security']
  };

  return (
    <footer className="bg-black text-gray-400 border-t-[1px] border-gray-800 py-10 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Logo and Social Media Section - Left Side */}
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <div className="flex items-center mb-8 justify-center md:justify-start">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full glow"></div>
              </div>
              <span className="text-white font-medium text-lg">AI Startup Kit</span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-10 md:mt-52 justify-center md:justify-start">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                {/* X (Twitter) Logo */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Footer Links Sections - Right Side */}
          <div className="w-full md:w-2/3 md:ml-0 lg:ml-96 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="text-center md:text-left">
                <h3 className="text-white font-medium mb-4 md:mb-6">{category}</h3>
                <ul className="space-y-3 md:space-y-4">
                  {links.map(link => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Add this CSS to your global stylesheet or component styles for the glow effect
const styles = `
  .glow {
    box-shadow: 0 0 15px 2px rgba(124, 58, 237, 0.5);
  }
`;

// You can either use a style tag or inject this into your CSS
const StyleTag = () => <style>{styles}</style>;

// Export the StyleTag component if you want to use it in your app
export { StyleTag };