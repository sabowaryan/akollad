import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

interface JobCardProps {
  title: string;
  division: string;
  location: string;
  type: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, division, location, type, description }) => (
  <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#C9A96E]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.07)]">
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
      <div>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C9A96E]">Akollad {division}</span>
        <h3 className="text-xl font-bold text-white mt-1" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2 flex-shrink-0">
        <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">{location}</span>
        <span className="text-xs px-3 py-1 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 text-[#C9A96E]">{type}</span>
      </div>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>
    <a
      href="mailto:carrieres@akollad.com"
      className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/15 hover:border-[#C9A96E] hover:text-[#C9A96E] px-5 py-2.5 rounded-full transition-all duration-300"
    >
      Postuler
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
);

const JOBS: JobCardProps[] = [
  {
    title: 'Ingénieur·e Full-Stack Senior',
    division: 'Studio',
    location: 'Kinshasa / Remote',
    type: 'CDI',
    description: "Rejoignez notre pôle Studio pour concevoir et développer des applications web et mobiles de classe mondiale. Vous travaillerez sur des projets à fort impact pour nos clients et nos produits internes.",
  },
  {
    title: 'Ingénieur·e ML / IA',
    division: 'Labs',
    location: 'Kinshasa / Remote',
    type: 'CDI',
    description: "Au sein de notre pôle Labs, vous concevez et déployez des modèles d'apprentissage automatique appliqués à des problématiques concrètes sur le continent africain.",
  },
  {
    title: 'DevOps / Cloud Engineer',
    division: 'Cloud',
    location: 'Kinshasa',
    type: 'CDI',
    description: "Vous construisez et maintenez notre infrastructure cloud souveraine : CI/CD, Kubernetes, sécurité et monitoring. Une expérience sur GCP, AWS ou Azure est requise.",
  },
  {
    title: 'Analyste Investissements Tech',
    division: 'Ventures',
    location: 'Kinshasa / Paris',
    type: 'CDI',
    description: "Vous identifiez et évaluez des opportunités d'investissement dans des startups technologiques africaines, réalisez des due diligences et accompagnez nos participations.",
  },
  {
    title: 'Designer UX/UI',
    division: 'Studio',
    location: 'Remote',
    type: 'Freelance / CDI',
    description: "Vous concevez des expériences numériques mémorables pour nos clients et nos produits. Maîtrise de Figma requise. Sensibilité aux marchés africains appréciée.",
  },
];

const Carrieres: React.FC = () => {
  return (
    <>
      <SEO
        title="Carrières — Rejoignez Akollad Groupe"
        description="Rejoignez l'équipe Akollad et participez à la construction de l'avenir technologique africain. Découvrez nos offres d'emploi en Labs, Studio, Cloud et Ventures."
        canonical="/carrieres"
      />
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">Rejoignez-nous</p>
            <h1
              className="font-extrabold uppercase tracking-tight leading-tight text-white mb-6"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}
            >
              Carrières chez<br /><span className="text-[#C9A96E]">Akollad Groupe.</span>
            </h1>
            <p className="text-gray-400 max-w-2xl leading-relaxed text-sm sm:text-base">
              Nous construisons l'avenir technologique de l'Afrique. Si vous êtes passionné·e par la tech et animé·e par un désir d'impact réel, votre place est ici.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values strip */}
      <section className="py-12 sm:py-16 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Impact réel', desc: 'Chaque ligne de code, chaque investissement contribue à transformer un continent.' },
              { label: 'Remote-first', desc: "Nous croyons au talent où qu'il se trouve. Nos équipes travaillent depuis toute l'Afrique et au-delà." },
              { label: 'Croissance', desc: 'Un environnement stimulant, des projets variés et un accès direct aux décideurs du groupe.' },
            ].map((v) => (
              <div key={v.label} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-8 h-1 bg-[#C9A96E] rounded mb-3"></div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>{v.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10" style={{ fontFamily: "'Syne', sans-serif" }}>
              Postes ouverts
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4 sm:gap-6">
            {JOBS.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 80}>
                <JobCard {...job} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-16 bg-[#C9A96E]/5 border border-[#C9A96E]/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                Vous ne trouvez pas votre poste ?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Envoyez-nous une candidature spontanée. Nous sommes toujours à la recherche de talents exceptionnels.
              </p>
              <a
                href="mailto:carrieres@akollad.com"
                className="inline-block bg-[#C9A96E] text-[#0B111E] font-bold py-3 px-8 rounded-full text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#E8C98A]"
              >
                Candidature spontanée
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Carrieres;
