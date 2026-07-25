'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Magnetic } from './magnetic';

const LINKS = [
  { href: '/', label: 'Home', desc: 'Start here.', n: '01' },
  { href: '/capabilities', label: 'Capabilities', desc: 'Systems built to solve overlooked problems.', n: '02' },
  { href: '/case-studies', label: 'Case Studies', desc: 'Real work and measurable outcomes.', n: '03' },
  { href: '/journal', label: 'Journal', desc: 'Thoughts from building.', n: '04' },
  { href: '/resources', label: 'Resources', desc: 'Guides and templates.', n: '05' },
  { href: '/about', label: 'About', desc: 'Who we are and why we exist.', n: '06' },
  { href: '/contact', label: 'Contact', desc: 'Start a conversation.', n: '07' }
];

export function Chrome({ index = '01', showLoader = false }: { index?: string; showLoader?: boolean }) {
  const [ready, setReady] = useState(!showLoader);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!showLoader) return;
    const timer = window.setTimeout(() => setReady(true), 1050);
    return () => clearTimeout(timer);
  }, [showLoader]);

  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden';
  }, [ready]);

  return (
    <>
      {showLoader && (
        <div className={`loader ${ready ? 'loader--done' : ''}`} aria-hidden="true">
          <div className="loader__mark2">
            <Image src="/logo.jpeg" alt="" width={64} height={64} />
          </div>
          <span className="brand">ATOMENOS</span>
          <i />
        </div>
      )}
      <div className="progress" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="/">
          <Image src="/logo.jpeg" alt="" width={22} height={22} />
          ATOMENOS
        </a>
        <span>EST. 2026 · INDIA / GLOBAL</span>
        <span>{index} / 07</span>
      </header>
      <nav className={`nav ${menu ? 'nav--open' : ''}`} aria-label="Primary navigation">
        <Magnetic strength={10}>
          <button className="nav__pill" onClick={() => setMenu(!menu)} aria-expanded={menu}>
            <Image src="/logo.jpeg" alt="" width={28} height={28} />
            <span>MENU</span>
            <b>{menu ? '×' : '+'}</b>
          </button>
        </Magnetic>
        <div className="nav__sheet">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenu(false)} data-current={pathname === l.href}>
              <b>{l.label}</b>
              <small>{l.desc}</small>
              <em>{l.n}</em>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="wordmark">
        <span className="signal" /> ATOMENOS
      </div>
      <p>© 2026 ATOMENOS. BUILT FOR THE LONG VIEW.</p>
      <a href="#top">BACK TO TOP ↑</a>
    </footer>
  );
}

export function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M11 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
