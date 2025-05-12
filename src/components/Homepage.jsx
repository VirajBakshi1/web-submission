import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import DashboardPreview from './DashboardPreview';
import TrustedCompanies from './TrustedCompanies';
import SEODashboard from './SEODashboard';
import SEOFeatures from './SEOFeatures';
import ClientTestimonialSection from './ClientTestimonialSection';
import PricingSection from './PricingSection';
import WaitlistSection from './WaitlistSection';
import Footer from './Footer';
const Homepage = ({ dashboardImageSrc }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Hero section with headline and CTA */}
      <HeroSection />
      
      {/* Dashboard preview image */}
      <DashboardPreview dashboardImageSrc={dashboardImageSrc} />
      {/* Trusted companies section */}
      <TrustedCompanies />
      
      {/* SEO Dashboard section */}
      <SEODashboard />
      
      {/* SEO Features section */}
      <SEOFeatures />
      
      <ClientTestimonialSection />

      {/* Pricing section */}
      <PricingSection />

      {/* Waitlist section */}
      <WaitlistSection />
      

      {/* Footer or additional sections can be added here */}
      <Footer />
    </div>
  );
};

export default Homepage;