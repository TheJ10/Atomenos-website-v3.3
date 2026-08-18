import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Chrome, SiteFooter, Arrow } from '../../../components/chrome';
import { PageHeader } from '../../../components/page-header';
import { RESOURCES, resourceNav, relatedResources } from '../../../lib/resources';

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const { resource } = resourceNav(params.slug);
  if (!resource) return {};

  return {
    title: `${resource.title} — Atomenos Resources`,
    description: resource.description,
    alternates: {
      canonical: `/resources/${resource.slug}`,
    },
  };
}

function PdfIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M4 2h8l4 4v12H4V2z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 2v4h4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 14l3 3 3-3M10 9v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const { resource } = resourceNav(params.slug);
  if (!resource) notFound();
  const related = relatedResources(resource.slug);

  return (
    <>
      <Chrome index="05" />
      <main>
        <PageHeader eyebrow={`05 — RESOURCES / ${resource.type}`} title={<>{resource.title.toUpperCase()}</>} sub={resource.description} />

        <section className="section reveal" style={{ paddingBottom: 0 }}>
          <p className="article-meta">
            <span>{resource.note}</span>
            <span>&middot;</span>
            <span>{resource.time}</span>
          </p>
          <div className="article-actions">
            <a className="pdf-btn" href={`/downloads/resource-${resource.slug}.pdf`} download>
              <PdfIcon /> Download {resource.type === 'CHANGELOG' ? 'PDF' : resource.type === 'TEMPLATE' ? 'Template' : 'Guide'}
            </a>
          </div>
        </section>

        <section className="res-preview section">
          <div className="section-tag"><i /> WHAT&rsquo;S INSIDE</div>
          <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>A QUICK<br /><em>PREVIEW.</em></h2>
          <ul>
            {resource.preview.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>

        <section className="journal section reveal">
          <div className="section-tag"><i /> RELATED RESOURCES</div>
          <div className="related-grid">
            {related.map((r) => (
              <a key={r.slug} href={`/resources/${r.slug}`} className="lift" style={{ display: 'block', border: '1px solid #00000014', borderRadius: 16, padding: 24, background: '#fff' }}>
                <span className="chip">{r.type}</span>
                <h3 style={{ fontSize: 20, letterSpacing: '-.03em', margin: '18px 0 10px', lineHeight: 1.15 }}>{r.title}</h3>
                <p style={{ font: '10px "DM Mono"', color: '#8a8a84' }}>{r.note}</p>
              </a>
            ))}
          </div>
          <a href="/resources" className="text-link">Back to all resources <Arrow /></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
