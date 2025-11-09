import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { CoreValueCard, DivisionCard } from '../components/Cards';
import { CORE_VALUES, DIVISIONS } from '../utils/constants';
import { HeroPattern } from '../components/HeroPattern';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative flex items-center justify-center h-screen min-h-[600px] text-center overflow-hidden">
        <HeroPattern />
        <AnimatedSection>
          <div className="z-10 relative px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider">
              Construire l'avenir de la <span className="text-[#31FF88]">tech africaine.</span>
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-300">
              Ouvrez le code de l'innovation.
            </p>
            <a 
              href="#about"
              className="mt-8 inline-block bg-[#31FF88] text-[#162650] font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_#31FF88] transform hover:-translate-y-1"
            >
              Découvrez notre vision
            </a>
          </div>
        </AnimatedSection>
      </section>
      
      {/* About Akollad Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              À propos de <span className="text-[#31FF88] font-mono">{'{ Akollad }'}</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300 text-center max-w-3xl mx-auto">
              Akollad est une holding technologique visionnaire dédiée à la promotion de l'innovation sur le continent africain. Nous agissons comme une entité mère, unissant un portefeuille diversifié d'entreprises de logiciels, de plateformes numériques et de projets technologiques, chacun contribuant à la transformation numérique de l'Afrique.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center">Nos Divisions</h2>
            <p className="mt-4 text-lg text-gray-300 text-center max-w-3xl mx-auto">
              Nous opérons à travers des entités spécialisées, chacune étant un centre d'excellence dans son domaine respectif.
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
                Impact et <span className="text-[#31FF88]">Vision</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Notre vision est de construire l'avenir numérique de l'Afrique à partir de la base. En renforçant les talents locaux, en investissant dans des startups disruptives et en bâtissant une infrastructure fiable, Akollad s'engage à créer un écosystème technologique autonome qui stimule la croissance économique et le progrès social sur tout le continent. Nous croyons au pouvoir de la technologie pour résoudre des problèmes significatifs et libérer l'immense potentiel de l'Afrique.
              </p>
           </AnimatedSection>
         </div>
      </section>
    </>
  );
};

export default Home;
