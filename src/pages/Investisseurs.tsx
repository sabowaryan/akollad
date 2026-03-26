import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const StatCard: React.FC<{ value: string; label: string; sub?: string }> = ({ value, label, sub }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
    <div className="text-3xl sm:text-4xl font-extrabold text-[#C9A96E] mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>{value}</div>
    <div className="text-white font-semibold text-sm sm:text-base">{label}</div>
    {sub && <div className="text-gray-500 text-xs mt-1">{sub}</div>}
  </div>
);

const Investisseurs: React.FC = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <AnimatedSection>
            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C9A96E] transition-colors duration-300 text-xs uppercase tracking-widest font-semibold mb-8 group">
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l'accueil
            </Link>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">Relations Investisseurs</p>
            <h1
              className="font-extrabold uppercase tracking-tight leading-tight text-white mb-6"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}
            >
              Investir dans<br /><span className="text-[#C9A96E]">la tech africaine.</span>
            </h1>
            <p className="text-gray-400 max-w-2xl leading-relaxed text-sm sm:text-base">
              Akollad Groupe est une holding technologique en pleine croissance, opérant sur l'un des marchés les plus dynamiques du monde. Nous ouvrons notre capital à des partenaires stratégiques partageant notre vision d'un avenir numérique africain.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <StatCard value="2+" label="Produits SaaS" sub="En production" />
            <StatCard value="4" label="Divisions actives" sub="Labs · Studio · Cloud · Ventures" />
            <StatCard value="Pan-africain" label="Marché adressable" sub="1,4 Md d'habitants" />
            <StatCard value="Nov. 2025" label="Fondation" sub="Croissance continue" />
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">Notre thèse</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                Pourquoi investir avec Akollad ?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: 'Un marché en transformation',
                    desc: "L'Afrique compte plus d'un milliard d'habitants, une population majoritairement jeune et connectée. La digitalisation est structurelle et irréversible."
                  },
                  {
                    title: 'Un modèle holding diversifié',
                    desc: "Notre structure en holding réduit les risques : plusieurs divisions, plusieurs produits, plusieurs marchés. La résilience est intégrée au modèle."
                  },
                  {
                    title: 'Des produits en production',
                    desc: "PikSend et GateCtr sont des produits SaaS actifs, avec des clients réels. Nous ne promettons pas — nous livrons."
                  },
                  {
                    title: 'Une équipe ancrée localement',
                    desc: "Notre expertise du contexte africain est un avantage compétitif durable face aux acteurs internationaux qui n'y comprennent les réalités du terrain."
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1 flex-shrink-0 bg-[#C9A96E]/40 rounded-full mt-1"></div>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="font-bold text-white text-lg mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Entrer en contact
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Nous sommes ouverts aux discussions avec des investisseurs institutionnels, des family offices et des partenaires stratégiques. Pour toute demande d'information ou de présentation, contactez notre équipe.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <svg className="w-4 h-4 text-[#C9A96E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:investisseurs@akollad.com" className="text-gray-300 hover:text-[#C9A96E] transition-colors">investisseurs@akollad.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <svg className="w-4 h-4 text-[#C9A96E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-300">Kinshasa, RDC</span>
                  </div>
                </div>
                <a
                  href="mailto:investisseurs@akollad.com"
                  className="block w-full text-center bg-[#C9A96E] text-[#0B111E] font-bold py-3 px-6 rounded-full text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#E8C98A]"
                >
                  Demander un deck investisseurs
                </a>
              </div>

              <div className="mt-6 bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <p className="text-gray-500 text-xs leading-relaxed italic">
                  Les informations présentées sur cette page sont données à titre indicatif. Tout investissement comporte des risques. Les performances passées ne préjugent pas des performances futures.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Investisseurs;
