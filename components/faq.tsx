'use client';

import { useState } from 'react';

const ITEMS = [
  { q: 'What kinds of projects do you take on?', a: 'Anything where software, AI, or automation can remove a real operational bottleneck \u2014 from restaurant ordering to internal dashboards to custom AI agents.' },
  { q: 'Do we need to know exactly what we want to build?', a: 'No. Most projects start with a problem, not a solution. We help figure out what to build.' },
  { q: 'How long does a first conversation take?', a: 'Usually thirty minutes. We\u2019d rather talk plainly early than send a long proposal cold.' },
  { q: 'Where are you based?', a: 'India, working globally. Most early work happens over a call, wherever you are.' }
];

export function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const company = String(data.get('company') || '');
    const message = String(data.get('message') || '');

    const subject = encodeURIComponent(`New inquiry from ${name || 'the Atomenos site'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    );
    window.location.href = `mailto:hello@atomenos.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" placeholder="Jane Doe" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="jane@company.com" required />
      </div>
      <div className="field">
        <label htmlFor="company">Company (optional)</label>
        <input id="company" name="company" type="text" placeholder="Company name" />
      </div>
      <div className="field">
        <label htmlFor="message">What&apos;s the problem?</label>
        <textarea id="message" name="message" rows={4} placeholder="Tell us briefly what's slowing your team down…" required />
      </div>
      <button type="submit" className="submit-btn">Send message <Arrow /></button>
      <p style={{ font: '10px "DM Mono"', color: '#8a8a84', marginTop: 12 }}>Opens your email client with this filled in, addressed to hello@atomenos.com.</p>
    </form>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M11 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {ITEMS.map((item, i) => (
        <div key={item.q} className="faq-item" data-open={open === i}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {item.q}
            <span>+</span>
          </button>
          <p>{item.a}</p>
        </div>
      ))}
    </div>
  );
}
