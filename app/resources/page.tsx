import type { Metadata } from 'next';
import { Chrome, SiteFooter } from '../../components/chrome';
import { PageHeader } from '../../components/page-header';
import { RESOURCES } from '../../lib/resources';

export const metadata: Metadata = {
  title: 'Resources — Atomenos',
  description: 'Guides and templates.'
};

export default function ResourcesPage() {
  return (
    <>
      <Chrome index="05" />
      <main>
        <PageHeader
          eyebrow="05 — RESOURCES"
          title={<>GUIDES FOR<br /><em>RUNNING SYSTEMS<br />WELL.</em></>}
          sub="Practical guides and templates from the way we actually scope and build projects."
        />

        <section className="journal section reveal">
          <div className="section-tag"><i /> DOWNLOADS &amp; GUIDES</div>
          <div className="journal__grid">
            {RESOURCES.map((r) => (
              <a key={r.slug} href={`/resources/${r.slug}`} className="res-card lift">
                <span className="chip">{r.type}</span>
                <h3>{r.title}</h3>
                <p>{r.note} &middot; {r.time}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
