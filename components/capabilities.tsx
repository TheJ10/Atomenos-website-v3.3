'use client';

import { useEffect, useState } from 'react';
import { AiDiagram, BizDiagram, DigitalDiagram, GrowthDiagram, CustomDiagram } from './cap-diagrams';

const CAPS = [
  {
    slug: 'ai-automation',
    label: 'AI Automation',
    desc: 'Design and build intelligent automation that removes repetitive work and helps teams make better decisions.',
    features: ['Custom AI Agents', 'Workflow Automation', 'AI Assistants', 'Internal AI Tools', 'Real Estate AI Automation'],
    Diagram: AiDiagram
  },
  {
    slug: 'business-systems',
    label: 'Business Systems',
    desc: 'Operational systems built around how businesses actually work.',
    features: ['Restaurant QR Ordering Platform', 'Restaurant Dashboard', 'CRM Systems', 'Internal Dashboards', 'Hospital Management System (Coming Soon)'],
    Diagram: BizDiagram
  },
  {
    slug: 'digital-experiences',
    label: 'Digital Experiences',
    desc: 'Websites, applications and customer experiences designed to be simple, memorable and fast.',
    features: ['Business Websites', 'Web Applications', 'Customer Portals', 'Landing Pages', 'Interactive Experiences'],
    Diagram: DigitalDiagram
  },
  {
    slug: 'growth-systems',
    label: 'Growth Systems',
    desc: 'Helping businesses become easier to discover, understand and choose.',
    features: ['SEO', 'Local SEO', 'Google Business Profile', 'Analytics', 'Conversion Optimization'],
    Diagram: GrowthDiagram
  },
  {
    slug: 'custom-solutions',
    label: 'Custom Solutions',
    desc: "When the right answer doesn't exist, we design and build it.",
    features: ['Internal Platforms', 'Business Automation', 'Operational Tools', 'Industry-specific Software', 'End-to-End Digital Systems'],
    Diagram: CustomDiagram
  }
];

export function Capabilities() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const applyHash = () => {
      const slug = window.location.hash.replace('#', '');
      const idx = CAPS.findIndex((c) => c.slug === slug);
      if (idx >= 0) {
        setActive(idx);
        const frame = document.getElementById('cap-frame');
        if (frame) {
          const y = frame.getBoundingClientRect().top + window.scrollY - 96;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const cap = CAPS[active];
  const Diagram = cap.Diagram;

  function select(i: number) {
    setActive(i);
    history.replaceState(null, '', `#${CAPS[i].slug}`);
  }

  return (
    <div className="cap2__frame" id="cap-frame">
      <div className="cap2__list">
        {CAPS.map((c, i) => (
          <button key={c.slug} id={c.slug} className="cap2__row" data-active={active === i} onClick={() => select(i)}>
            <b>{String(i + 1).padStart(2, '0')}</b>
            <span>{c.label}</span>
          </button>
        ))}
      </div>

      <div className="cap2__panel">
        <div className="cap2__panel-inner" key={active}>
          <p className="cap2__idx">
            <i /> {String(active + 1).padStart(2, '0')} / 05
          </p>
          <h3 className="cap2__title">{cap.label}</h3>
          <p className="cap2__desc">{cap.desc}</p>
          <div className="cap2__grid">
            {cap.features.map((f) => (
              <div className="cap2__feature" key={f}>
                <i />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <div className="cap2__diagram">
            <Diagram />
          </div>
        </div>
      </div>
    </div>
  );
}
