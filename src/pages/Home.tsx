import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { CoreValueCard, DivisionCard } from '../components/Cards';
import { CORE_VALUES, DIVISIONS } from '../utils/constants';
import { HeroPattern } from '../components/HeroPattern';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative flex items-center justify-center h-screen min-h-[640px] text-center overflow-hidden">
        <HeroPattern />
        <AnimatedSection>
          <div className="z-10 relative px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/5 text-[#C9A96E] text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse"></span>
              Holding Technologique Africaine
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>
              Construire l'avenir<br />
              <span className="text-[#C9A96E]">de la tech africaine.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
              Nous investissons, créons et faisons croître les champions technologiques du continent.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#about"
                className="inline-block bg-[#C9A96E] text-[#0B111E] font-bold py-3.5 px-9 rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#E8C98A] hover:shadow-[0_0_24px_rgba(201,169,110,0.45)] transform hover:-translate-y-0.5"
              >
                Découvrir notre vision
              </a>
              <a
                href="#divisions"
                className="inline-block border border-white/20 text-white font-semibold py-3.5 px-9 rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:border-[#C9A96E]/50 hover:text-[#C9A96E]"
              >
                Nos divisions
              </a>
            </div>
          </div>
        </AnimatedSection>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce z-10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About Akollad Section */}
      <section id="about" className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] text-center mb-3">À propos</p>
            <h2 className="text-3xl md:text-5xl font-bold text-center" style={{ fontFamily: "'Syne', sans-serif" }}>
              Un groupe pensé<br />pour l'Afrique de demain.
            </h2>
            <p className="mt-6 text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
              Akollad Groupe est une holding technologique visionnaire dédiée à la promotion de l'innovation sur le continent africain. Nous unissons un portefeuille diversifié d'entreprises de logiciels, de plateformes numériques et de projets technologiques — chacun contribuant à la transformation numérique de l'Afrique.
            </p>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <CoreValueCard title={value.title} description={value.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="py-24 lg:py-36 bg-white/[0.02]">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] text-center mb-3">Nos entités</p>
            <h2 className="text-3xl md:text-5xl font-bold text-center" style={{ fontFamily: "'Syne', sans-serif" }}>Nos Divisions</h2>
            <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto leading-relaxed">
              Quatre centres d'excellence spécialisés, une seule ambition : façonner l'avenir numérique de l'Afrique.
            </p>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIVISIONS.map((division, index) => (
              <AnimatedSection key={division.name} delay={index * 100}>
                <DivisionCard name={division.name} description={division.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Vision Section */}
      <section id="vision" className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">Impact &amp; Vision</p>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
              Construire l'écosystème<br />tech africain.
            </h2>
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Notre vision est de construire l'avenir numérique de l'Afrique à partir de la base. En renforçant les talents locaux, en investissant dans des startups disruptives et en bâtissant une infrastructure fiable, Akollad Groupe s'engage à créer un écosystème technologique autonome qui stimule la croissance économique et le progrès social sur tout le continent.
            </p>
            <a
              href="#divisions"
              className="mt-10 inline-block bg-[#C9A96E] text-[#0B111E] font-bold py-3.5 px-9 rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#E8C98A] hover:shadow-[0_0_24px_rgba(201,169,110,0.4)] transform hover:-translate-y-0.5"
            >
              Explorer nos divisions
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
              Prêt à construire l'avenir avec nous ?
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Partenaires, investisseurs, talents — écrivez-nous et rejoignez l'aventure Akollad.
            </p>
            <a
              href="mailto:contact@akollad.com"
              className="mt-8 inline-block bg-[#C9A96E] text-[#0B111E] font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#E8C98A] hover:shadow-[0_0_28px_rgba(201,169,110,0.45)] transform hover:-translate-y-0.5"
            >
              Nous écrire
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
