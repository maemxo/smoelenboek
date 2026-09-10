'use client'

import { useState } from 'react';
import LightRays from '../components/LightRays';
import MaskedHeading from '../components/MaskedHeading';

const teamMembers = [
  { number: '01', name: 'Ryan', href: '#' },
  { number: '02', name: 'Alvin', href: '#' },
  { number: '03', name: 'Daan', href: '#' },
  { number: '04', name: 'Klavs', href: '#' },
  { number: '05', name: 'Max', href: '#' },
];

const copy = {
  nl: {
    team: 'Team', privacy: 'Privacy', intro: 'Ontmoet de homos achter dit kut project.',
    people: 'De homos', peopleIntro: 'Elke pagina heeft een eigen kut homo.',
    view: 'Bekijk pagina', role: 'Persoonlijke pagina volgt', footer: 'Een schoolproject van groep 4. Gemaakt met 300 miljoen fucking shadcn objecten via Nextjs van vercel en zo idk en ja.'
  },
  en: {
    team: 'Team', privacy: 'Privacy', intro: 'Meet the students behind this project.',
    people: 'The students', peopleIntro: 'Every page has its own style cuz it had to have it and shit.',
    view: 'View page', role: 'Personal page coming soon', footer: 'A school project by group 4. Made with 300 million fucking shadcn components via Nextjs by Vercel and stuff. Idk yeah.'
  },
};

export default function Home() {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const text = copy[language];

  return (
    <main className="hub-page">
      <div className="hub-rays" aria-hidden="true">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.1}
          lightSpread={20}
          rayLength={2}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          pulsating
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <header className="hub-header">
        <a className="hub-wordmark" href="/">SMOELENBOEK<span>/</span></a>
        <nav aria-label="Main navigation">
          <a href="#team">{text.team}</a>
          <a href="/privacy">{text.privacy}</a>
          <div className="language-switcher" aria-label="Language">
            <button className={language === 'nl' ? 'active' : ''} onClick={() => setLanguage('nl')}>NL</button>
            <span>/</span>
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
          </div>
        </nav>
      </header>

      <section className="hub-hero" aria-labelledby="hub-title">
        <div className="hub-hero-copy">
          <p className="eyebrow">GILDE / LJ2 / P1</p>
          <MaskedHeading
            id="hub-title"
            text="Smoelenboek"
            mediaType="video"
            src="../public/video.mp4"
            style={{ width: '100%', height: '9rem' }}
            fillScale={1.25}
            parallax={26}
            reveal="rise"
            trigger="mount"
            drift={18}
            brightness={1}
            saturation={0.55}
            align="left"
            weight={700}
            tracking={-0.03}
            lineHeight={0.9}
            textScale={0.115}
          />
          <p>{text.intro}</p>
          <a className="scroll-cue" href="#team">↓ <span>{text.team}</span></a>
        </div>
      </section>

      <section className="team-section" id="team" aria-labelledby="team-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / {language === 'nl' ? 'PROFIELEN' : 'PROFILES'}</p>
            <h2 id="team-title">{text.people}</h2>
          </div>
          <p>{text.peopleIntro}</p>
        </div>
        <div className="team-grid">
          {teamMembers.map(member => (
            <article className="member-card" key={member.number}>
              <div className="member-number">{member.number}</div>
              <div className="member-avatar" aria-hidden="true">{member.number}</div>
              <div>
                <h3>{member.name}</h3>
                <p>{text.role}</p>
              </div>
              <a href={member.href}>{text.view} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <footer className="hub-footer">
        <span>{text.footer}</span>
        <a href="/privacy">{text.privacy} ↗</a>
      </footer>
    </main>
  );
}
