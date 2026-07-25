import type { Metadata } from 'next';
import { Chrome, SiteFooter, Arrow } from '../../../components/chrome';
import { PageHeader } from '../../../components/page-header';
import { MobileOrderMockup, KitchenDashboardMockup, AdminDashboardMockup, ArchitectureDiagram, UserJourneyDiagram } from '../../../components/mockups';

export const metadata: Metadata = {
  title: 'DineFlow — Atomenos Case Studies',
  description: 'A full QR ordering and restaurant management system, from paper tickets to one live system.'
};

export default function DineFlowCaseStudy() {
  return (
    <>
      <Chrome index="03" />
      <main>
        <PageHeader
          eyebrow="03 — CASE STUDY / DINEFLOW"
          title={<>REPLACING PAPER<br />ORDERS WITH <em>ONE<br />LIVE SYSTEM.</em></>}
          sub="QR ordering, a kitchen display, and a management dashboard, built as one system instead of three disconnected tools."
        />

        <section className="section reveal" style={{ paddingBottom: 0 }}>
          <div className="cs-meta">
            <div><b>CLIENT</b><span>Independent restaurant, single location</span></div>
            <div><b>INDUSTRY</b><span>Hospitality / Food Service</span></div>
            <div><b>TIMELINE</b><span>4 weeks, first version live</span></div>
            <div><b>CAPABILITY</b><span>Business Systems</span></div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="cs-block section reveal">
          <div className="section-tag"><i /> THE PROBLEM</div>
          <h2>ORDERS, LOST<br /><em>IN TRANSLATION.</em></h2>
          <p>Every order passed through three separate steps: written on paper at the table, re-entered at the till, then read aloud to the kitchen. Each handoff was a chance for something to go missing, a modifier dropped, a table number misheard.</p>
          <p>On a busy night, the till and the kitchen worked from two different pictures of what was actually owed and owing. Reconciling the two took thirty to forty minutes after close, every night, by hand.</p>
        </section>

        {/* DISCOVERY & RESEARCH */}
        <section className="cs-block section reveal">
          <div className="section-tag"><i /> DISCOVERY &amp; RESEARCH</div>
          <div className="cs-two">
            <div>
              <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>What we watched</h2>
              <p>We spent two full services on the floor before writing anything: one lunch, one dinner. We timed every handoff, watched where staff improvised around the paper system, and asked the kitchen what they wished they knew earlier.</p>
            </div>
            <div>
              <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>What we found</h2>
              <p>The paper wasn&rsquo;t really the problem, the three separate records of the same order were. Any fix that didn&rsquo;t unify order, kitchen, and till into a single source of truth would just move the friction somewhere else.</p>
            </div>
          </div>
        </section>

        {/* BUSINESS CHALLENGES */}
        <section className="cs-block section reveal">
          <div className="section-tag"><i /> BUSINESS CHALLENGES</div>
          <h2>THREE PROBLEMS,<br /><em>ONE ROOT CAUSE.</em></h2>
          <div className="cs-feature-grid">
            <article><b>01</b><h4>Order accuracy</h4><p>Paper handoffs meant modifiers and table numbers were regularly lost between front and back of house.</p></article>
            <article><b>02</b><h4>Nightly reconciliation</h4><p>Thirty to forty minutes of manual matching between till and kitchen tickets, every single night.</p></article>
            <article><b>03</b><h4>No real reporting</h4><p>No reliable way to see which dishes sold, when the kitchen was overloaded, or where orders were slipping.</p></article>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="cs-block section reveal">
          <div className="section-tag"><i /> THE SOLUTION</div>
          <h2>ONE SYSTEM,<br /><em>THREE SCREENS.</em></h2>
          <p>Customers scan a QR code at the table and order directly from their phone. The order goes straight to a kitchen display, no re-entry, no paper, and appears on the manager&rsquo;s dashboard in real time, with the till and kitchen always showing the same numbers.</p>
          <div className="cs-two" style={{ marginTop: 30 }}>
            <div className="cs-visual"><MobileOrderMockup /></div>
            <div className="cs-visual dark"><KitchenDashboardMockup /></div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="cs-block section reveal">
          <div className="section-tag"><i /> ARCHITECTURE</div>
          <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)' }}>HOW THE PIECES<br /><em>FIT TOGETHER.</em></h2>
          <p>A single core API keeps the customer app, kitchen display, and admin dashboard in sync, backed by one database, so there is exactly one record of every order, from placement to payment.</p>
          <div className="cs-visual" style={{ marginTop: 24 }}><ArchitectureDiagram /></div>
        </section>

        {/* FEATURES */}
        <section className="cs-block section reveal">
          <div className="section-tag"><i /> FEATURES</div>
          <h2>WHAT&rsquo;S<br /><em>IN THE SYSTEM.</em></h2>
          <div className="cs-feature-grid">
            <article><b>ORDERING</b><h4>QR menu &amp; ordering</h4><p>No app download. Scan, browse, order, and send straight to the kitchen.</p></article>
            <article><b>KITCHEN</b><h4>Live kitchen display</h4><p>Orders arrive as tickets sorted by status: new, preparing, ready.</p></article>
            <article><b>ADMIN</b><h4>Manager dashboard</h4><p>Daily orders, average ticket size, and error rate, updated in real time.</p></article>
            <article><b>MENU</b><h4>Menu management</h4><p>Items, prices, and availability update instantly across every screen.</p></article>
            <article><b>REPORTING</b><h4>End-of-night reports</h4><p>Automatic reconciliation replaces the thirty-minute manual close-out.</p></article>
            <article><b>ROADMAP</b><h4>Multi-location ready</h4><p>Built so a second location is a configuration change, not a rebuild.</p></article>
          </div>
        </section>

        {/* USER JOURNEY */}
        <section className="cs-block section reveal">
          <div className="section-tag"><i /> USER JOURNEY</div>
          <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)' }}>FROM TABLE<br /><em>TO KITCHEN, INSTANTLY.</em></h2>
          <div className="cs-visual" style={{ marginTop: 24, minHeight: 140 }}><UserJourneyDiagram /></div>
        </section>

        {/* TECHNICAL STACK */}
        <section className="cs-block section reveal">
          <div className="section-tag"><i /> TECHNICAL STACK</div>
          <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)' }}>BUILT TO BE<br /><em>MAINTAINED, NOT JUST SHIPPED.</em></h2>
          <div className="cs-stack">
            {['Next.js', 'React', 'PostgreSQL', 'WebSockets for live sync', 'Stripe for payments', 'Hosted on Vercel'].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </section>

        {/* BUSINESS IMPACT */}
        <section className="philosophy section reveal">
          <div className="section-tag"><i /> BUSINESS IMPACT</div>
          <h2>THE NUMBERS,<br /><em>AFTER GOING LIVE.</em></h2>
          <div className="principles">
            <article className="case-stat"><b>70%</b><p>Fewer order errors reaching the kitchen in the first month.</p></article>
            <article className="case-stat"><b>35 min</b><p>Manual reconciliation time removed from every closing shift.</p></article>
            <article className="case-stat"><b>4 wks</b><p>From first conversation to a live system in production.</p></article>
          </div>
        </section>

        {/* SCREENSHOTS / GALLERY */}
        <section className="thinking section reveal" style={{ background: 'var(--paper)' }}>
          <div className="section-tag"><i /> SCREENSHOTS</div>
          <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)' }}>SELECTED<br /><em>VIEWS.</em></h2>
          <div className="cs-gallery-grid">
            <figure>
              <div className="cs-visual"><MobileOrderMockup /></div>
              <figcaption>CUSTOMER ORDERING — MOBILE</figcaption>
            </figure>
            <figure>
              <div className="cs-visual dark"><KitchenDashboardMockup /></div>
              <figcaption>KITCHEN DISPLAY — LIVE QUEUE</figcaption>
            </figure>
            <figure style={{ gridColumn: '1 / -1' }}>
              <div className="cs-visual"><AdminDashboardMockup /></div>
              <figcaption>MANAGER DASHBOARD — DAILY REPORTING</figcaption>
            </figure>
          </div>
        </section>

        {/* FUTURE ROADMAP */}
        <section className="cs-block section reveal">
          <div className="section-tag"><i /> FUTURE ROADMAP</div>
          <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)' }}>WHAT&rsquo;S<br /><em>NEXT.</em></h2>
          <p>A second location is next, testing the multi-location groundwork built into the data model from day one. After that: predictive prep-time estimates on the kitchen display, based on historical order volume.</p>
        </section>

        {/* LESSONS LEARNED */}
        <section className="philosophy section reveal">
          <div className="section-tag"><i /> LESSONS LEARNED</div>
          <h2>WHAT WE&rsquo;D<br /><em>DO AGAIN.</em></h2>
          <div className="principles">
            <article><b>01</b><h3>SHIP THE<br />NARROW THING</h3><p>A working four-week system earned more trust than a longer proposal would have.</p></article>
            <article><b>02</b><h3>WATCH BEFORE<br />YOU BUILD</h3><p>Two services on the floor told us more than any stakeholder interview could.</p></article>
            <article><b>03</b><h3>ONE SOURCE<br />OF TRUTH</h3><p>Every problem traced back to three records of one order. Fixing that fixed the rest.</p></article>
          </div>
        </section>

        <section className="venture section reveal">
          <div className="section-tag"><i /> START YOUR OWN</div>
          <div className="venture__card">
            <div className="venture__image">
              <span>NEXT PROJECT</span>
              <div className="venture__object"><i /><i /><i /></div>
            </div>
            <div className="venture__copy">
              <p>OPEN CONVERSATION</p>
              <h2>GOT AN OPERATIONAL<br />PROBLEM<br /><em>WORTH SOLVING?</em></h2>
              <a href="/contact">Talk to us <Arrow /></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
