import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

interface SectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

const PolicySection: React.FC<SectionProps> = ({ number, title, children }) => (
  <div className="border-b border-white/5 pb-10 mb-10 last:border-0 last:mb-0 last:pb-0">
    <div className="flex items-baseline gap-4 mb-5">
      <span className="text-[#C9A96E] font-mono text-sm font-bold flex-shrink-0">{number}</span>
      <h2 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h2>
    </div>
    <div className="pl-0 sm:pl-10 text-gray-400 text-sm leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const Confidentialite: React.FC = () => {
  return (
    <>
      <SEO
        title="Politique de Confidentialité — Akollad Groupe"
        description="Consultez la politique de confidentialité d'Akollad Groupe : collecte des données, utilisation, cookies, droits des utilisateurs et contact pour toute demande relative à vos données personnelles."
        canonical="/confidentialite"
        noIndex={true}
      />
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C9A96E] transition-colors duration-300 text-xs uppercase tracking-widest font-semibold mb-8 group">
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l'accueil
            </Link>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">Légal</p>
            <h1
              className="font-extrabold uppercase tracking-tight leading-tight text-white mb-4"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}
            >
              Politique de<br /><span className="text-[#C9A96E]">Confidentialité.</span>
            </h1>
            <p className="text-gray-500 text-xs">Dernière mise à jour : 1er janvier 2025</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 sm:p-10">

              <PolicySection number="01" title="Qui sommes-nous ?">
                <p>
                  Akollad Groupe S.A.S. (ci-après « Akollad », « nous », « notre ») est une holding technologique dont le siège est établi à Kinshasa, République Démocratique du Congo (RCCM : CD/KNG/RCCM/25-A-07960 — N° Impôt : A2557944L — ID : 01-J6100-N86614P). Nous exploitons ce site vitrine ainsi que plusieurs produits SaaS, dont PikSend (piksend.com) et GateCtr (gatectr.com).
                </p>
                <p>
                  La présente politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous visitez notre site web.
                </p>
              </PolicySection>

              <PolicySection number="02" title="Données collectées">
                <p>Dans le cadre de votre navigation sur ce site, nous pouvons collecter les catégories de données suivantes :</p>
                <ul className="list-none space-y-2">
                  {[
                    'Données de navigation : adresse IP, type de navigateur, pages consultées, durée de visite.',
                    'Données de contact : lorsque vous nous envoyez un e-mail via les formulaires ou adresses disponibles sur le site.',
                    'Données techniques : cookies de session nécessaires au bon fonctionnement du site.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#C9A96E] flex-shrink-0 mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </PolicySection>

              <PolicySection number="03" title="Finalités du traitement">
                <p>Vos données sont utilisées exclusivement aux fins suivantes :</p>
                <ul className="list-none space-y-2">
                  {[
                    'Assurer le bon fonctionnement et la sécurité du site.',
                    'Répondre à vos demandes de contact (presse, investisseurs, candidatures, etc.).',
                    "Améliorer l'expérience utilisateur grâce à des statistiques d'audience anonymisées.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#C9A96E] flex-shrink-0 mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>Nous ne vendons, ne louons et ne partageons jamais vos données personnelles avec des tiers à des fins commerciales.</p>
              </PolicySection>

              <PolicySection number="04" title="Cookies">
                <p>
                  Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement. Aucun cookie publicitaire ou de traçage tiers n'est déposé sur votre terminal sans votre consentement explicite.
                </p>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies. Cela peut altérer certaines fonctionnalités du site.
                </p>
              </PolicySection>

              <PolicySection number="05" title="Conservation des données">
                <p>
                  Les données de navigation sont conservées pour une durée maximale de <strong className="text-white">13 mois</strong>. Les données transmises via nos formulaires de contact sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées conformément aux obligations légales applicables.
                </p>
              </PolicySection>

              <PolicySection number="06" title="Vos droits">
                <p>Conformément à la réglementation applicable, vous disposez des droits suivants sur vos données personnelles :</p>
                <ul className="list-none space-y-2">
                  {[
                    "Droit d'accès : obtenir une copie des données vous concernant.",
                    'Droit de rectification : corriger des données inexactes ou incomplètes.',
                    "Droit à l'effacement : demander la suppression de vos données.",
                    "Droit d'opposition : vous opposer à certains traitements.",
                    "Droit à la portabilité : recevoir vos données dans un format structuré.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#C9A96E] flex-shrink-0 mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:privacy@akollad.com" className="text-[#C9A96E] hover:text-[#E8C98A] transition-colors">privacy@akollad.com</a>
                </p>
              </PolicySection>

              <PolicySection number="07" title="Sécurité">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute divulgation, altération ou destruction. Notre site est servi exclusivement en HTTPS.
                </p>
              </PolicySection>

              <PolicySection number="08" title="Modifications">
                <p>
                  Nous nous réservons le droit de modifier cette politique à tout moment. La version en vigueur est toujours celle publiée sur cette page, avec la date de mise à jour en en-tête.
                </p>
              </PolicySection>

              <PolicySection number="09" title="Contact">
                <p>
                  Pour toute question relative à cette politique de confidentialité ou au traitement de vos données, vous pouvez nous contacter à :<br />
                  <a href="mailto:privacy@akollad.com" className="text-[#C9A96E] hover:text-[#E8C98A] transition-colors">privacy@akollad.com</a>
                </p>
              </PolicySection>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Confidentialite;
