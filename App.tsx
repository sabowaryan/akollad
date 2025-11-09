import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import { CoreValueCard, DivisionCard } from './components/Cards';
import { CORE_VALUES, DIVISIONS } from './constants';
import { HeroPattern } from './components/HeroPattern';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section id="home" className="relative flex items-center justify-center h-screen min-h-[600px] text-center overflow-hidden">
          <HeroPattern />
          <AnimatedSection>
            <div className="z-10 relative px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider">
                Building the future of <span className="text-[#31FF88]">African tech.</span>
              </h1>
              <p className="mt-4 text-lg md:text-2xl text-gray-300">
                Open the code of innovation.
              </p>
              <a 
                href="#about"
                className="mt-8 inline-block bg-[#31FF88] text-[#162650] font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_#31FF88] transform hover:-translate-y-1"
              >
                Explore our vision
              </a>
            </div>
          </AnimatedSection>
        </section>
        
        {/* About Akollad Section */}
        <section id="about" className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                About <span className="text-[#31FF88] font-mono">{'{ Akollad }'}</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 text-center max-w-3xl mx-auto">
                Akollad is a visionary technology holding company dedicated to fostering innovation across the African continent. We serve as a parent entity, uniting a diverse portfolio of software companies, digital platforms, and tech-driven ventures, each contributing to Africa's digital transformation.
              </p>
            </AnimatedSection>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CORE_VALUES.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 100}>
                   <CoreValueCard title={value.title} description={value.description} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Divisions Section */}
        <section id="divisions" className="py-20 lg:py-32 bg-black bg-opacity-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center">Our Divisions</h2>
              <p className="mt-4 text-lg text-gray-300 text-center max-w-3xl mx-auto">
                We operate through specialized entities, each a center of excellence in its respective domain.
              </p>
            </AnimatedSection>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {DIVISIONS.map((division, index) => (
                <AnimatedSection key={division.name} delay={index * 100}>
                  <DivisionCard name={division.name} description={division.description} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & Vision Section */}
        <section id="vision" className="py-20 lg:py-32">
           <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
             <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Impact & <span className="text-[#31FF88]">Vision</span>
                </h2>
                <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                  Our vision is to build Africa's digital future from the ground up. By empowering local talent, investing in disruptive startups, and building reliable infrastructure, Akollad is committed to creating a self-sustaining tech ecosystem that drives economic growth and social progress across the continent. We believe in the power of technology to solve meaningful problems and unlock Africa's immense potential.
                </p>
             </AnimatedSection>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;
