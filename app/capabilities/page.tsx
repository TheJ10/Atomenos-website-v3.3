import type { Metadata } from 'next';
import { Chrome, SiteFooter, Arrow } from '../../components/chrome';
import { PageHeader } from '../../components/page-header';
import { Capabilities } from '../../components/capabilities';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Capabilities — Atomenos',
  description: 'Systems built to solve overlooked problems.'
};

export default function CapabilitiesPage() {
  return (
    <>
      <Chrome index="02" />
      <main>
        <PageHeader
          eyebrow="02 — CAPABILITIES"
          title={<>SYSTEMS BUILT<br />TO SOLVE <em>OVERLOOKED<br />PROBLEMS.</em></>}
          sub="We don't sell fixed packages. Select a category to see how we approach it."
        />

        <section className="cap2 section reveal">
          <div className="section-tag"><i /> SELECT A CATEGORY</div>
          <h2>WHERE WE&rsquo;RE<br /><em>PUT TO WORK.</em></h2>
          <p className="cap2__intro">Every business runs differently. These are examples of what we build for clients, not a fixed menu.</p>
          <Capabilities />
        </section>

        <section className="venture section">
          <div className="section-tag reveal"><i /> READY WHEN YOU ARE</div>
          <div className="venture__card reveal">
            <div className="venture__image">
              <span>START A PROJECT</span>
              <Image
                src="/capabilities-contact.png"
                alt="From complexity to clarity"
                fill
                priority={false}
                className="venture__art"
              />
              <div className="venture__object"><i /><i /><i /></div>
            </div>
            <div className="venture__copy">
              <p>NEXT STEP</p>
              <h2>TELL US WHAT&rsquo;S<br />SLOWING<br /><em>YOU DOWN.</em></h2>
              <a href="/contact">Start a conversation <Arrow /></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
