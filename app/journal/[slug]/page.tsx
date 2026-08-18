import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Chrome, SiteFooter, Arrow } from '../../../components/chrome';
import { PageHeader } from '../../../components/page-header';
import { ARTICLES, articleNav, relatedArticles } from '../../../lib/journal';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const { article } = articleNav(params.slug);
  if (!article) return {};

  return {
    title: `${article.title} — Atomenos Journal`,
    description: article.dek,
    alternates: {
      canonical: `/journal/${article.slug}`,
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

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { article } = articleNav(params.slug);
  if (!article) notFound();
  const related = relatedArticles(article.slug);

  return (
    <>
      <Chrome index="04" />
      <main>
        <PageHeader eyebrow={`04 — JOURNAL / ${article.category.toUpperCase()}`} title={<>{article.title.toUpperCase()}</>} />

        <section className="section reveal" style={{ paddingBottom: 0 }}>
          <p className="article-meta">
            <span>{article.date}</span>
            <span>&middot;</span>
            <span>{article.category}</span>
            <span>&middot;</span>
            <span>{article.read}</span>
          </p>
          <p className="article-dek">{article.dek}</p>
          <div className="article-actions">
            <a className="pdf-btn" href={`/downloads/journal-${article.slug}.pdf`} download>
              <PdfIcon /> Download PDF
            </a>
          </div>
        </section>

        <section className="article-body section">
          {article.body.map((block, i) => (
            <div key={i}>
              {block.heading && <h2>{block.heading}</h2>}
              {block.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ))}
          <blockquote className="pull-quote">{article.pullQuote}</blockquote>
        </section>

        <section className="journal section reveal">
          <div className="section-tag"><i /> RELATED ENTRIES</div>
          <div className="related-grid">
            {related.map((r) => (
              <a key={r.slug} href={`/journal/${r.slug}`} className="lift" style={{ display: 'block', border: '1px solid #00000014', borderRadius: 16, padding: 24, background: '#fff' }}>
                <span style={{ font: '10px "DM Mono"', color: '#8a8a84' }}>{r.date}</span>
                <h3 style={{ fontSize: 20, letterSpacing: '-.03em', margin: '18px 0 10px', lineHeight: 1.15 }}>{r.title}</h3>
                <p style={{ font: '10px "DM Mono"', color: 'var(--orange)' }}>{r.category}</p>
              </a>
            ))}
          </div>
          <a href="/journal" className="text-link">Back to all entries <Arrow /></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
