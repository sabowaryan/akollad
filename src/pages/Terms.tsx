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

const BulletItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-3">
    <span className="text-[#C9A96E] flex-shrink-0 mt-0.5">—</span>
    <span>{children}</span>
  </li>
);

const Terms: React.FC = () => {
  return (
    <>
      <SEO
        title="Conditions Générales d'Utilisation — Akollad Groupe"
        description="Consultez les conditions générales d'utilisation d'Akollad Groupe. Règles d'accès au site, propriété intellectuelle, responsabilités et droit applicable."
        canonical="/terms"
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
              Conditions<br /><span className="text-[#C9A96E]">Générales.</span>
            </h1>
            <p className="text-gray-500 text-xs">Dernière mise à jour : 1er janvier 2025</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 sm:p-10">

              <PolicySection number="01" title="Acceptation des conditions">
                <p>
                  En accédant et en utilisant le site web d'Akollad Groupe S.A.S. (ci-après « Akollad », « nous », « notre »), vous acceptez pleinement et sans réserve les présentes Conditions Générales d'Utilisation (CGU). Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
                </p>
                <p>
                  Akollad se réserve le droit de modifier ces conditions à tout moment. La version en vigueur est celle publiée sur cette page, avec la date de mise à jour en en-tête.
                </p>
              </PolicySection>

              <PolicySection number="02" title="Présentation du site">
                <p>
                  Le présent site est un site vitrine institutionnel présentant Akollad Groupe S.A.S., holding technologique dont le siège est établi à Kinshasa, République Démocratique du Congo (RCCM : CD/KNG/RCCM/25-A-07960 — N° Impôt : A2557944L — ID : 01-J6100-N86614P).
                </p>
                <p>
                  Le site fournit des informations générales sur le groupe, ses divisions (Labs, Studio, Cloud, Ventures) et ses produits SaaS (PikSend, GateCtr). Il ne constitue pas une offre commerciale directe.
                </p>
              </PolicySection>

              <PolicySection number="03" title="Accès au site">
                <p>L'accès au site est libre et gratuit. Akollad s'efforce d'assurer une disponibilité optimale, mais ne peut garantir un accès ininterrompu. Le site peut être suspendu sans préavis pour :</p>
                <ul className="list-none space-y-2">
                  {[
                    'Maintenance technique ou mise à jour de contenu.',
                    'Incidents techniques indépendants de notre volonté.',
                    'Raisons de sécurité ou de protection des données.',
                  ].map(item => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
              </PolicySection>

              <PolicySection number="04" title="Propriété intellectuelle">
                <p>
                  L'ensemble des éléments du site — textes, images, logos, graphismes, icônes, typographies, architecture — est la propriété exclusive d'Akollad Groupe ou de ses partenaires, et est protégé par les lois congolaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification, distribution ou exploitation, totale ou partielle, de ces éléments sans l'autorisation écrite préalable d'Akollad est strictement interdite.
                </p>
              </PolicySection>

              <PolicySection number="05" title="Utilisation autorisée">
                <p>Vous êtes autorisé à consulter le site à des fins personnelles et non commerciales. En utilisant ce site, vous vous engagez à ne pas :</p>
                <ul className="list-none space-y-2">
                  {[
                    'Reproduire ou distribuer le contenu sans autorisation écrite.',
                    'Utiliser le site à des fins illégales ou frauduleuses.',
                    'Tenter de compromettre la sécurité ou le fonctionnement du site.',
                    'Collecter des données personnelles d\'autres utilisateurs.',
                    'Publier ou transmettre tout contenu nuisible, diffamatoire ou illicite.',
                  ].map(item => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
              </PolicySection>

              <PolicySection number="06" title="Liens hypertextes">
                <p>
                  Le site peut contenir des liens vers des sites tiers (PikSend, GateCtr, réseaux sociaux, etc.). Ces liens sont fournis à titre informatif. Akollad n'exerce aucun contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur disponibilité ou leur contenu.
                </p>
                <p>
                  Tout lien externe pointant vers notre site doit faire l'objet d'une autorisation préalable. Contactez-nous à <a href="mailto:contact@akollad.com" className="text-[#C9A96E] hover:text-[#E8C98A] transition-colors">contact@akollad.com</a>.
                </p>
              </PolicySection>

              <PolicySection number="07" title="Limitation de responsabilité">
                <p>
                  Les informations publiées sur ce site sont fournies à titre indicatif et sans garantie d'exactitude, d'exhaustivité ou d'actualité. Akollad ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder.
                </p>
                <p>
                  Akollad ne garantit pas que le site est exempt de virus ou d'autres éléments nuisibles. Il vous incombe de prendre les précautions nécessaires pour protéger vos équipements.
                </p>
              </PolicySection>

              <PolicySection number="08" title="Protection des données personnelles">
                <p>
                  La collecte et le traitement de vos données personnelles dans le cadre de l'utilisation de ce site sont régis par notre{' '}
                  <Link to="/confidentialite" className="text-[#C9A96E] hover:text-[#E8C98A] transition-colors">
                    Politique de Confidentialité
                  </Link>
                  , qui fait partie intégrante des présentes CGU.
                </p>
              </PolicySection>

              <PolicySection number="09" title="Droit applicable et juridiction">
                <p>
                  Les présentes CGU sont régies par le droit de la République Démocratique du Congo. Tout litige relatif à l'interprétation ou à l'exécution des présentes conditions sera soumis à la compétence exclusive des tribunaux de Kinshasa, RDC.
                </p>
              </PolicySection>

              <PolicySection number="10" title="Contact">
                <p>
                  Pour toute question relative aux présentes CGU, contactez-nous à :<br />
                  <a href="mailto:legal@akollad.com" className="text-[#C9A96E] hover:text-[#E8C98A] transition-colors">legal@akollad.com</a>
                </p>
              </PolicySection>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Terms;
