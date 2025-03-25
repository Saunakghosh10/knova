import React from 'react';
import { 
  Navbar, 
  HeroSection, 
  WhyChooseSection,
  RecentDoubtsSection,
  ExpertDebuggingSection,
  StatsSection,
  Footer
} from './components';

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <RecentDoubtsSection />
        <ExpertDebuggingSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;