import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Presse: React.FC = () => {
  const contacts = [
    {
      role: 'Relations Presse',
      name: 'Équipe Communication',
      email: 'presse@akollad.com',
      desc: "Demandes d'interviews, portraits, couverture éditoriale.",
    },
    {
      role: 'Partenariats Médias',
      name: 'Équipe Partenariats',
      email: 'media@akollad.com',
      desc: 'Sponsoring, co-branding, présence dans vos événements.',
    },
  ];

  const facts = [
    { label: 'Fondation', value: 'Novembre 2025' },
    { label: 'Siège social', value: 'Kinshasa, RDC' },
    { label: 'Modèle', value: 'Holding technologique' },
    { label: 'Divisions', value: 'Labs · Studio · Cloud · Ventures' },
    { label: 'Produits', value: 'PikSend · GateCtr' },
    { label: 'Marchés', value: 'Afrique & International' },
  ];

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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">Presse &amp; Médias</p>
            <h1
              className="font-extrabold uppercase tracking-tight leading-tight text-white mb-6"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}
            >
              Espace<br /><span className="text-[#C9A96E]">Presse &amp; Médias.</span>
            </h1>
            <p className="text-gray-400 max-w-2xl leading-relaxed text-sm sm:text-base">
              Retrouvez ici les ressources, visuels et informations clés sur Akollad Groupe. Pour toute demande presse, notre équipe est disponible dans les 48h ouvrées.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 sm:py-16 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <AnimatedSection>
            <h2 className="text-xl font-bold text-white mb-8" style={{ fontFamily: "'Syne', sans-serif" }}>Fiche Groupe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {facts.map((f) => (
                <div key={f.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-[10px] uppercase tracking-widest text-[#C9A96E] font-semibold mb-1">{f.label}</div>
                  <div className="text-white font-semibold text-sm">{f.value}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">Kit presse</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                Ressources disponibles
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: '🖼',
                    title: 'Logos & Identité visuelle',
                    desc: 'Logo Akollad Groupe en différents formats (SVG, PNG), sur fond clair et foncé. Charte graphique disponible sur demande.',
                  },
                  {
                    icon: '📋',
                    title: 'Dossier de presse',
                    desc: 'Présentation complète du groupe, de nos divisions, de nos produits et de notre vision stratégique.',
                  },
                  {
                    icon: '🖼',
                    title: 'Photos & Visuels',
                    desc: 'Visuels haute résolution libres de droits pour la presse, sous réserve de crédit "© Akollad Groupe".',
                  },
                  {
                    icon: '🎤',
                    title: 'Biographies dirigeants',
                    desc: 'Biographies et photos officielles des membres de la direction, disponibles sur demande auprès de notre service presse.',
                  },
                ].map((r) => (
                  <div key={r.title} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                    <span className="text-2xl flex-shrink-0">{r.icon}</span>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1">{r.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="mailto:presse@akollad.com?subject=Demande Kit Presse"
                className="mt-8 inline-block bg-[#C9A96E] text-[#0B111E] font-bold py-3 px-8 rounded-full text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#E8C98A]"
              >
                Demander le kit presse
              </a>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">Contacts</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                Contacts presse
              </h2>
              <div className="space-y-5">
                {contacts.map((c) => (
                  <div key={c.role} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="text-[10px] uppercase tracking-widest text-[#C9A96E] font-semibold mb-1">{c.role}</div>
                    <div className="font-bold text-white mb-1">{c.name}</div>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">{c.desc}</p>
                    <a
                      href={`mailto:${c.email}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#C9A96E] hover:text-[#E8C98A] transition-colors duration-300"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {c.email}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="font-bold text-white text-sm mb-2">Délai de réponse</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Notre équipe presse répond à toutes les demandes dans un délai de <strong className="text-white">48 heures ouvrées</strong>. Pour les urgences éditoriales, merci d'indiquer votre délai de bouclage dans le sujet du mail.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presse;
