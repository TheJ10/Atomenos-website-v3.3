import type { Metadata } from 'next';
import { Chrome, SiteFooter, Arrow } from '../../components/chrome';
import { PageHeader } from '../../components/page-header';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Case Studies — Business Systems Built by Atomenos',
  description:
    'See how Atomenos turns real operational problems into working systems, including DineFlow, a QR ordering and restaurant management platform.',
  alternates: {
    canonical: '/case-studies',
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Chrome index="03" />
      <main>
        <PageHeader
          eyebrow="03 — CASE STUDIES"
          title={<>REAL WORK.<br /><em>MEASURABLE<br />OUTCOMES.</em></>}
          sub="Closer looks at how we approach a project, from the operational problem to the system running in production."
        />

        <section className="venture section reveal">
          <div className="section-tag"><i /> FEATURED PROJECT / RESTAURANT SYSTEMS</div>
          <a href="/case-studies/dineflow" className="venture__card lift" style={{ display: 'grid' }}>
            <div className="venture__image">
              <span>IN PRODUCTION</span>
                <Image
                  src="/dineflow website image.png"
                  alt="DineFlow Restaurant Management System"
                  fill
                  className="venture__art"
                />
            </div>
            <div className="venture__copy">
              <p>DINEFLOW &middot; QR ORDERING + MANAGEMENT DASHBOARD</p>
              <h2>REPLACING PAPER<br />ORDERS WITH<br /><em>ONE SYSTEM.</em></h2>
              <span className="read-link">Read the full case study <Arrow /></span>
            </div>
          </a>
        </section>

        <section className="journal section reveal">
          <div className="section-tag"><i /> MORE ON THE WAY</div>
          <div className="industries__head" style={{ margin: '0 0 40px' }}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)' }}>NEW PROJECTS<br /><em>ADD UP HERE.</em></h2>
            <p>Each system we ship gets a full write-up. DineFlow is the first, with more in progress.</p>
          </div>
        </section>

        <section className="venture section reveal">
          <div className="section-tag"><i /> START YOUR OWN</div>
          <div className="venture__card">
            <div className="venture__image">
              <span>NEXT PROJECT</span>
              <Image
                src="/about-contact.png"
                alt="Operations workspace"
                fill
                className="venture__art"
              />
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
