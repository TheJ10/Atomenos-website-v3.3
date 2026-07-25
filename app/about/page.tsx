import type { Metadata } from 'next';
import Image from 'next/image';
import { Chrome, SiteFooter, Arrow } from '../../components/chrome';
import { PageHeader } from '../../components/page-header';
import { GrowthDiagramLarge } from '../../components/cap-diagrams';

export const metadata: Metadata = {
  title: 'About — Atomenos',
  description: 'Who we are, why we exist, and where Atomenos is going.'
};

export default function AboutPage() {
  return (
    <>
      <Chrome index="06" />
      <main>
        <PageHeader
          eyebrow="06 — ABOUT ATOMENOS"
          title={<>SYSTEMS BUILT<br /><em>AROUND HOW<br />YOU WORK.</em></>}
          sub="We're not a software vendor. We study how a business runs, then build what it actually needs."
        />

        {/* STORY */}
        <section className="about section reveal">
          <div className="section-tag"><i /> STORY</div>
          <div className="about__copy">
            <h2>STARTED WITH<br />ONE <em>SIMPLE<br />BELIEF.</em></h2>
            <p>Most software gets built first and sold second. We work the other way: understand the business, then decide what to build for it. Atomenos exists to close that gap.</p>
          </div>
          <div className="about__figure">
            <span>FROM AN ATOM, A SYSTEM.</span>
            <Image src="/logo.jpeg" alt="Atomenos mark" width={560} height={560} />
            <small>002 / OUR ORIGIN MARK</small>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="philosophy section reveal">
          <div className="section-tag"><i /> PHILOSOPHY</div>
          <h2>UNDERSTAND FIRST.<br /><em>BUILD SECOND.</em></h2>
          <div className="philosophy__statement">
            <p>We research how a business actually works before deciding what to build. No off-the-shelf software, just systems designed to fit.</p>
            <span>&mdash; How we approach every project</span>
          </div>
          <div className="principles">
            <article><b>01</b><h3>UNDERSTAND<br />THE BUSINESS</h3><p>We study the workflow, the team, and the bottleneck before writing a line of code.</p></article>
            <article><b>02</b><h3>DESIGN THE<br />RIGHT SYSTEM</h3><p>Software, AI, and automation, combined only where they remove real friction.</p></article>
            <article><b>03</b><h3>BUILD FOR<br />THE LONG RUN</h3><p>Systems that keep working as the business grows, not just at launch.</p></article>
          </div>
        </section>

        {/* MISSION / VISION */}
        <section className="mv-band section reveal">
          <div className="section-tag"><i /> MISSION &amp; VISION</div>
          <h2>WHY WE&rsquo;RE<br /><em>HERE.</em></h2>
          <div className="duo">
            <article>
              <b>MISSION</b>
              <h3>SOLVE REAL<br />OPERATIONAL PROBLEMS</h3>
              <p>Help businesses run more efficiently through software, AI, and automation designed around how they actually work.</p>
            </article>
            <article>
              <b>VISION</b>
              <h3>SYSTEMS THAT<br />SCALE WITH YOU</h3>
              <p>To be the team businesses call before they buy another tool that doesn&rsquo;t quite fit.</p>
            </article>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="timeline section reveal">
          <div className="section-tag"><i /> TIMELINE</div>
          <div className="industries__head">
            <h2>HOW WE<br /><em>GOT HERE.</em></h2>
            <p>A short company, a long plan. The chapters so far.</p>
          </div>
          <div className="timeline-list">
            <a href="/journey/founding-atomenos">
              <span>2026</span>
              <h3>Atomenos is founded</h3>
              <p>Built around one principle: understand the business before choosing the technology.</p>
              <Arrow />
            </a>
            <a href="/journey/first-production-systems">
              <span>2026</span>
              <h3>First systems go into production</h3>
              <p>Restaurant ordering, business dashboards, and automation tools built for real teams.</p>
              <Arrow />
            </a>
            <a href="/journey/capabilities-expand">
              <span>2027</span>
              <h3>Capabilities expand</h3>
              <p>Custom AI agents and workflow systems added to how we help businesses operate.</p>
              <Arrow />
            </a>
          </div>
        </section>

        {/* PRINCIPLES / VALUES */}
        <section className="philosophy section reveal">
          <div className="section-tag"><i /> PRINCIPLES</div>
          <h2>WHAT WE<br /><em>WON&rsquo;T TRADE.</em></h2>
          <div className="principles">
            <article><b>01</b><h3>CLARITY<br />OVER COMPLEXITY</h3><p>We build the simplest system that solves the problem, nothing more.</p></article>
            <article><b>02</b><h3>OUTCOMES<br />OVER TECHNOLOGY</h3><p>AI and automation are tools. What matters is the time and friction they remove.</p></article>
            <article><b>03</b><h3>FIT OVER<br />ONE-SIZE-FITS-ALL</h3><p>No template software. Every system is designed around how you actually work.</p></article>
          </div>
        </section>

        {/* TEAM */}
        <section className="team section reveal">
          <div className="section-tag"><i /> TEAM</div>
          <div className="industries__head">
            <h2>SMALL BY<br /><em>DESIGN.</em></h2>
            <p>A compact team of operators, builders, and engineers working across every project.</p>
          </div>
          <div className="team__grid">
            {[
              ['H.S.', 'Harish', 'Co-Founder', 'Design & Experiences'],
              ['R.R.', 'RahulRaj', 'Co-Founder', 'AI & Automation'],
              ['K.N.', 'Kiran', 'Co-Founder', 'Engineering & Growth'],
              ['S.K.', 'Saruk', 'Co-Founder', 'Product Systems & Operations'],
              ['J.G.', 'Jaspal', 'Co-Founder', 'Strategy & Solutions']
            ].map(([initials, name, role, specialty]) => (
              <article key={name}>
                <div className="team__avatar">{initials}</div>
                <div>
                  <h4>{name}</h4>
                  <p>{role}</p>
                  <span>{specialty}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FUTURE */}
        <section className="thinking section reveal">
          <div className="section-tag"><i /> FUTURE</div>
          <div className="thinking__stage">
            <p className="thinking__small">Where we&rsquo;re going</p>
            <h2>MORE<br /><span>SYSTEMS.</span><br />SAME<br />STANDARD.</h2>
            <div className="thinking__diagram thinking__diagram--growth"><GrowthDiagramLarge /></div>
            <p className="thinking__note">As Atomenos grows, the categories will widen, but the process stays the same: understand the business, then build what it actually needs.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="venture section reveal">
          <div className="section-tag"><i /> JOIN US</div>
          <div className="venture__card">
            <div className="venture__image">
              <span>WE&rsquo;RE HIRING</span>
              <div className="venture__object"><i /><i /><i /></div>
            </div>
            <div className="venture__copy">
              <p>OPEN ROLES / ONGOING</p>
              <h2>BUILD THE<br />SYSTEMS<br /><em>WITH US.</em></h2>
              <a href="/contact">Get in touch <Arrow /></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
