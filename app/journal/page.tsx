import type { Metadata } from 'next';
import { Chrome, SiteFooter, Arrow } from '../../components/chrome';
import { PageHeader } from '../../components/page-header';
import { ARTICLES } from '../../lib/journal';
import { JournalGrid } from '../../components/journal-grid';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Journal — Business Systems, Automation & AI | Atomenos',
  description:
    'Field notes from Atomenos on business automation, software systems, AI, and the operational problems worth solving.',
  alternates: {
    canonical: '/journal',
  },
};

export default function JournalPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <Chrome index="04" />
      <main>
        <PageHeader
          eyebrow="04 — JOURNAL"
          title={<>NOTES ON HOW<br />BUSINESSES <em>OPERATE.</em></>}
          sub="Field notes on automation, systems, and the operational problems worth solving."
        />

        <section className="venture section reveal">
          <div className="section-tag"><i /> FEATURED</div>
          <a href={`/journal/${featured.slug}`} className="venture__card lift" style={{ display: 'grid' }}>
            <div className="venture__image">
              <span>FEATURED ENTRY</span>
              <Image
                src="/journal-automation.png"
                alt="Automation workflow planning"
                fill
                className="venture__art"
                priority
              />
            </div>
            <div className="venture__copy">
              <p>{featured.date} &middot; {featured.category.toUpperCase()} &middot; {featured.read}</p>
              <h2>{featured.title.toUpperCase()}</h2>
              <span className="read-link">Read the entry <Arrow /></span>
            </div>
          </a>
        </section>

        <section className="journal section reveal">
          <div className="section-tag"><i /> ALL ENTRIES</div>
          <JournalGrid articles={rest} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
