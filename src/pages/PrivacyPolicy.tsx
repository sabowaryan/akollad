import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

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

const PrivacyPolicy: React.FC = () => {
  return (
    <>
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
            <p className="text-gray-500 text-xs">Dernière mise à jour : 9 novembre 2025</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 sm:p-10">

              <PolicySection number="01" title="Introduction">
                <p>
                  Akollad est une holding technologique visionnaire dédiée à la construction de logiciels, de sites web et d'applications innovantes. Nous nous engageons fermement à protéger la vie privée de nos utilisateurs et à traiter leurs données personnelles avec la plus grande transparence et le respect des réglementations en vigueur.
                </p>
                <p>
                  Cette Politique de Confidentialité a pour objectif d'expliquer clairement comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez nos services.
                </p>
              </PolicySection>

              <PolicySection number="02" title="Informations que nous collectons">
                <p>Nous collectons différents types d'informations dans le but de fournir et d'améliorer nos services :</p>
                <div className="space-y-3">
                  <p className="font-semibold text-white text-xs uppercase tracking-widest">Données Personnelles</p>
                  <p>Il s'agit des informations que vous nous fournissez volontairement lors de l'inscription, de l'utilisation de nos services ou lorsque vous nous contactez. Cela peut inclure :</p>
                  <ul className="list-none space-y-2">
                    {['Votre nom et prénom.', 'Votre adresse e-mail.', 'Vos coordonnées (téléphone, adresse postale, le cas échéant).', 'Toute autre information que vous choisissez de nous communiquer.'].map(item => (
                      <BulletItem key={item}>{item}</BulletItem>
                    ))}
                  </ul>
                  <p className="font-semibold text-white text-xs uppercase tracking-widest pt-2">Données d'Utilisation</p>
                  <ul className="list-none space-y-2">
                    {[
                      "L'adresse de protocole Internet (adresse IP) de votre appareil.",
                      'Le type et la version de votre navigateur.',
                      'Les pages consultées, l\'heure et la date de votre visite, le temps passé sur ces pages.',
                      'Les identifiants uniques des appareils et autres données de diagnostic.',
                    ].map(item => (
                      <BulletItem key={item}>{item}</BulletItem>
                    ))}
                  </ul>
                  <p className="font-semibold text-white text-xs uppercase tracking-widest pt-2">Cookies et Technologies de Suivi</p>
                  <p>Nous utilisons des cookies et des technologies de suivi similaires pour suivre l'activité sur nos services. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour indiquer quand un cookie est envoyé.</p>
                </div>
              </PolicySection>

              <PolicySection number="03" title="Comment nous utilisons les informations">
                <p>Akollad utilise les données collectées aux fins suivantes :</p>
                <ul className="list-none space-y-2">
                  {[
                    'Fourniture et Maintenance des Services : pour assurer le bon fonctionnement de nos plateformes.',
                    'Amélioration des Produits : pour analyser l\'utilisation et développer de nouvelles fonctionnalités.',
                    'Communication : pour vous envoyer des notifications importantes, des mises à jour de service ou des communications marketing (si vous y avez consenti).',
                    'Analyse : pour surveiller l\'utilisation de nos services et détecter, prévenir et résoudre les problèmes techniques.',
                  ].map(item => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
              </PolicySection>

              <PolicySection number="04" title="Protection des données">
                <p>
                  La sécurité de vos données est une priorité absolue pour Akollad. Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre l'accès non autorisé, la divulgation, l'altération ou la destruction.
                </p>
                <ul className="list-none space-y-2">
                  {[
                    'Le chiffrement (cryptage) des données en transit et au repos.',
                    'Des contrôles d\'accès stricts pour nos employés et sous-traitants.',
                    'Des audits de sécurité réguliers de nos systèmes.',
                  ].map(item => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
                <p>Nous conservons vos données personnelles uniquement le temps nécessaire aux fins énoncées dans cette politique.</p>
              </PolicySection>

              <PolicySection number="05" title="Partage des informations">
                <p>
                  Akollad s'engage à ne <strong className="text-white">jamais vendre, louer ou échanger</strong> vos données personnelles à des tiers à des fins de marketing.
                </p>
                <p>Nous pouvons partager vos informations uniquement dans les cas suivants :</p>
                <ul className="list-none space-y-2">
                  {[
                    'Avec votre consentement explicite.',
                    'Pour des raisons légales : si la loi l\'exige ou en réponse à des demandes valables des autorités publiques.',
                    'Avec des prestataires de services : des tiers qui nous aident à exploiter nos services, sous des obligations de confidentialité strictes.',
                  ].map(item => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
              </PolicySection>

              <PolicySection number="06" title="Vos droits">
                <p>Conformément aux lois sur la protection des données, vous disposez des droits suivants :</p>
                <ul className="list-none space-y-2">
                  {[
                    "Droit d'accès : obtenir une copie des données personnelles que nous détenons à votre sujet.",
                    'Droit de rectification : demander la correction de toute donnée inexacte ou incomplète.',
                    "Droit à l'effacement : demander la suppression de vos données personnelles, sous certaines conditions.",
                    "Droit d'opposition : vous opposer au traitement de vos données personnelles.",
                  ].map(item => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
              </PolicySection>

              <PolicySection number="07" title="Services Tiers">
                <p>
                  Nos services peuvent contenir des liens vers des sites web ou des services tiers. Ces services ont leurs propres politiques de confidentialité. Akollad n'a aucun contrôle et n'assume aucune responsabilité quant au contenu ou aux pratiques de ces sites tiers.
                </p>
              </PolicySection>

              <PolicySection number="08" title="Mises à jour de cette politique">
                <p>
                  Nous pouvons mettre à jour notre Politique de Confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page et en mettant à jour la date de "Dernière mise à jour" en haut de cette politique.
                </p>
              </PolicySection>

              <PolicySection number="09" title="Contact">
                <p>
                  Pour toute question concernant cette politique ou pour exercer vos droits, vous pouvez nous contacter à :<br />
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

export default PrivacyPolicy;
