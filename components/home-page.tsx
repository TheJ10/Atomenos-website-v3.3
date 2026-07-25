'use client';

import { Chrome, SiteFooter, Arrow } from './chrome';

export function HomePage() {
  return (
    <>
      <Chrome index="01" showLoader />
      <main id="top">
        <section className="hero">
          <div className="hero__grid" />
          <p className="hero__intro">Software, AI, and automation, designed around how your business actually works.</p>
          <div className="hero__orb" aria-hidden="true"><div /><div /><div /></div>
          <h1>WE BUILD<br /><span>WHAT&rsquo;S</span><br />NEXT TO LAST.</h1>
          <div className="hero__bottom">
            <a href="#philosophy" className="round-link"><Arrow /></a>
            <p>Understanding the business first.<br />Building the system second.</p>
            <span className="scroll-note">SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="philosophy section" id="philosophy">
          <div className="section-tag reveal"><i /> 01 &mdash; OUR PHILOSOPHY</div>
          <h2 className="reveal">WE DON&rsquo;T SELL<br />TECHNOLOGY. WE <em>SOLVE<br />PROBLEMS.</em></h2>
          <div className="philosophy__statement reveal">
            <p>We study how a business works before deciding what to build. No one-size-fits-all software, just systems designed to fit.</p>
            <span>&mdash; How we approach every project</span>
          </div>
          <div className="principles reveal-stagger">
            <article className="reveal"><b>01</b><h3>UNDERSTAND<br />THE BUSINESS</h3><p>We study the workflow, the team, and the bottleneck before writing a line of code.</p></article>
            <article className="reveal"><b>02</b><h3>DESIGN THE<br />RIGHT SYSTEM</h3><p>Software, AI, and automation, combined only where they remove real friction.</p></article>
            <article className="reveal"><b>03</b><h3>BUILD FOR<br />THE LONG RUN</h3><p>Systems that keep working as the business grows, not just at launch.</p></article>
          </div>
        </section>

        <section className="industries section" id="capabilities">
          <div className="section-tag reveal"><i /> 02 &mdash; WHAT WE BUILD</div>
          <div className="industries__head reveal">
            <h2>SYSTEMS BUILT<br /><em>AROUND YOU.</em></h2>
            <p>Every business runs differently. These are examples of what we build, not a fixed menu.</p>
          </div>
          <div className="industry-list reveal">
            <a href="/capabilities#ai-automation" className="lift"><span>01</span><h3>AI Automation</h3><p>Agents and automation that remove repetitive work.</p><Arrow /></a>
            <a href="/capabilities#business-systems" className="lift"><span>02</span><h3>Business Systems</h3><p>CRMs, dashboards, and tools your team will actually use.</p><Arrow /></a>
            <a href="/capabilities#digital-experiences" className="lift"><span>03</span><h3>Digital Experiences</h3><p>Websites, portals, and ordering systems built to convert.</p><Arrow /></a>
            <a href="/capabilities#growth-systems" className="lift"><span>04</span><h3>Growth Systems</h3><p>Get found, understood, and chosen more often.</p><Arrow /></a>
            <a href="/capabilities#custom-solutions" className="lift"><span>05</span><h3>Custom Solutions</h3><p>When the right answer doesn&rsquo;t exist, we build it.</p><Arrow /></a>
          </div>
          <a href="/capabilities" className="text-link" style={{ color: '#fff' }}>See every capability <Arrow /></a>
        </section>

        <section className="venture section" id="work">
          <div className="section-tag reveal"><i /> 03 &mdash; FEATURED WORK</div>
          <div className="venture__card reveal">
            <div className="venture__image">
              <span>RESTAURANT SYSTEMS</span>
              <div className="venture__object"><i /><i /><i /></div>
            </div>
            <div className="venture__copy">
              <p>QR ORDERING + MANAGEMENT DASHBOARD</p>
              <h2>A FULL SYSTEM<br />FOR RUNNING<br /><em>A RESTAURANT.</em></h2>
              <a href="/case-studies/dineflow">See how we approach it <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact__glow" />
          <p className="section-tag reveal"><i /> 04 &mdash; START A CONVERSATION</p>
          <h2 className="reveal">LET&rsquo;S LOOK AT<br />HOW YOU<br /><em>OPERATE.</em></h2>
          <a className="contact__mail reveal" href="/contact">START A CONVERSATION <Arrow /></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
