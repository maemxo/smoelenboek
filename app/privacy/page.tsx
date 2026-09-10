'use client'

import { useState } from 'react';
import Link from 'next/link';

type PolicySection = [heading: string, paragraphs: string[]];

type PolicyCopy = {
  back: string;
  label: string;
  title: string;
  updated: string;
  note: string;
  sections: PolicySection[];
};

const policy: Record<'nl' | 'en', PolicyCopy> = {
  nl: {
    back: '← Terug naar het team',
    label: 'Smoelenboek / Privacy',
    title: 'Privacyverklaring',
    updated: 'Laatst bijgewerkt: 8 september 2026',
    note: 'Deze privacyverklaring is opgesteld met  https://privacystatementgenerator.com/ De tekst is informatief bedoeld.',
    sections: [
      ['1. Inleiding', ['Smoelenboek ("wij", "ons" of "onze") beheert group4-smoelenboel.vercel.app en biedt diensten aan via de Website. Deze privacyverklaring legt uit hoe wij jouw gegevens verzamelen, gebruiken, delen en beschermen wanneer je onze Website bezoekt.']],
      ['2. Welke gegevens verzamelen wij?', ['Wij verzamelen niet bewust persoonlijke gegevens van gebruikers.']],
      ['3. Hoe gebruiken wij jouw gegevens?', ['Wij gebruiken de gegevens die wij verzamelen om:', 'items: Diensten aan te bieden, uit te voeren en te onderhouden|Onze diensten te verbeteren, te personaliseren en uit te breiden|Te begrijpen en analyseren hoe je onze diensten gebruikt|Met je te communiceren voor klantenservice, updates en marketing|Relevante advertenties te tonen|Transacties te verwerken en gerelateerde informatie te versturen|Aan wettelijke verplichtingen te voldoen']],
      ['4. Bewaartermijn', ['Wij bewaren jouw persoonlijke gegevens onbeperkt, tenzij je om verwijdering vraagt. Wij bewaren en gebruiken gegevens voor zover dat nodig is om aan wettelijke verplichtingen te voldoen, geschillen op te lossen en ons beleid te handhaven.']],
      ['5. Jouw rechten onder de AVG (EU/EER)', ['Als je in de Europese Unie of de Europese Economische Ruimte woont, heb je de volgende rechten onder de Algemene Verordening Gegevensbescherming (AVG):', 'items: Recht op inzage: je kunt een kopie van jouw persoonsgegevens opvragen|Recht op rectificatie: je kunt vragen om onjuiste gegevens te corrigeren|Recht op verwijdering: je kunt vragen om jouw persoonsgegevens te verwijderen|Recht op beperking: je kunt vragen om het gebruik van jouw gegevens te beperken|Recht op overdraagbaarheid: je kunt vragen om jouw gegevens aan een andere organisatie over te dragen|Recht van bezwaar: je kunt bezwaar maken tegen de verwerking van jouw persoonsgegevens|Rechten rond geautomatiseerde besluitvorming: je hebt rechten bij geautomatiseerde beslissingen die grote gevolgen voor je hebben|Recht om toestemming in te trekken: wanneer verwerking op toestemming is gebaseerd, kun je die toestemming altijd intrekken']],
      ['6. Privacy van kinderen', ['Onze diensten zijn niet bedoeld voor kinderen jonger dan 13 jaar. Wij verzamelen niet bewust persoonlijke gegevens van kinderen jonger dan 13 jaar. Denk je dat een kind persoonlijke gegevens heeft verstrekt, neem dan contact met ons op via max.eekhof@student.gildeopleidingen.nl.']],
      ['7. Gegevensbeveiliging', ['Wij nemen passende technische en organisatorische maatregelen om jouw persoonsgegevens te beschermen tegen onbevoegde toegang, wijziging, openbaarmaking of vernietiging. Geen enkele manier van internettransmissie of elektronische opslag is echter volledig veilig.']],
      ['8. Wijzigingen in deze privacyverklaring', ['Wij kunnen deze privacyverklaring van tijd tot tijd bijwerken. Wijzigingen publiceren wij op deze pagina en we passen de datum “Laatst bijgewerkt” aan.']],
      ['9. Contact', ['Heb je vragen over deze privacyverklaring of onze privacypraktijken? Neem dan contact met ons op:', 'contact: Smoelenboek|Email: max.eekhof@student.gildeopleidingen.nl|Website: group4-smoelenboel.vercel.app', 'Voor gebruikers in de EU/EER kun je ook contact opnemen met jouw lokale toezichthoudende autoriteit.']],
    ],
  },
  en: {
    back: '← Back to the team',
    label: 'Smoelenboek / Privacy',
    title: 'Privacy Policy',
    updated: 'Last Updated: September 8, 2026',
    note: 'This privacy policy was generated using https://privacystatementgenerator.com/ It is provided for informational purposes.',
    sections: [
      ['1. Introduction', ['Smoelenboek ("we," "us," or "our") operates group4-smoelenboel.vercel.app and provides services through the Website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Website.']],
      ['2. Information We Collect', ['We do not knowingly collect personal information from users.']],
      ['3. How We Use Your Information', ['We use the information we collect to:', 'items: Provide, operate, and maintain our services|Improve, personalize, and expand our services|Understand and analyze how you use our services|Communicate with you for customer service, updates, and marketing|Display relevant advertisements|Process transactions and send related information|Comply with legal obligations']],
      ['4. Data Retention', ['We retain your personal information indefinitely unless you request deletion. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.']],
      ['5. Your Rights Under GDPR (EU/EEA Users)', ['If you are located in the European Union or European Economic Area, you have the following rights under the General Data Protection Regulation (GDPR):', 'items: Right of Access: You can request copies of your personal data|Right to Rectification: You can request correction of inaccurate data|Right to Erasure: You can request deletion of your personal data|Right to Restrict Processing: You can request that we limit how we use your data|Right to Data Portability: You can request transfer of your data to another organization|Right to Object: You can object to our processing of your personal data|Rights Related to Automated Decision-Making: You have rights regarding automated decisions that significantly affect you|Right to Withdraw Consent: Where we rely on consent, you can withdraw it at any time']],
      ['6. Children\'s Privacy', ['Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, please contact us at max.eekhof@student.gildeopleidingen.nl.']],
      ['7. Data Security', ['We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.']],
      ['8. Changes to This Privacy Policy', ['We may update this Privacy Policy from time to time. We will notify you by posting the new Privacy Policy on this page and updating the “Last Updated” date.']],
      ['9. Contact Us', ['If you have questions about this Privacy Policy or our privacy practices, please contact us:', 'contact: Smoelenboek|Email: max.eekhof@student.gildeopleidingen.nl|Website: group4-smoelenboel.vercel.app', 'For EU/EEA users, you can also contact your local data protection authority.']],
    ],
  },
};

export default function PrivacyPage() {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const text = policy[language];

  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <Link className="hub-wordmark" href="/">SMOELENBOEK<span>/</span></Link>
        <nav className="privacy-nav" aria-label="Privacy navigation">
          <Link className="privacy-back" href="/">{text.back}</Link>
          <div className="language-switcher" aria-label="Language">
            <button className={language === 'nl' ? 'active' : ''} onClick={() => setLanguage('nl')}>NL</button>
            <span>/</span>
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
          </div>
        </nav>
      </header>

      <article className="privacy-content">
        <p className="eyebrow">{text.label}</p>
        <h1>{text.title}</h1>
        <p className="privacy-updated">{text.updated}</p>
        <p className="privacy-note">{text.note}</p>

        {text.sections.map(([heading, paragraphs]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            {paragraphs.map((paragraph, index) => {
              if (paragraph.startsWith('items:')) {
                return <ul key={index}>{paragraph.slice(6).split('|').map(item => <li key={item}>{item}</li>)}</ul>;
              }
              if (paragraph.startsWith('contact:')) {
                return <p key={index}>{paragraph.slice(8).split('|').map(line => <span key={line}>{line}<br /></span>)}</p>;
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </section>
        ))}
      </article>
    </main>
  );
}
