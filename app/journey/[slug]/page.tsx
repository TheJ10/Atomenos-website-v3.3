import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Chrome, SiteFooter } from '../../../components/chrome';
import { PageHeader } from '../../../components/page-header';
import { CHAPTERS, chapterNav } from '../../../lib/journey';

export function generateStaticParams() {
  return CHAPTERS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const { chapter } = chapterNav(params.slug);
  if (!chapter) return {};
  return { title: `${chapter.title} — Atomenos Journey`, description: chapter.philosophy };
}

export default function JourneyPage({ params }: { params: { slug: string } }) {
  const { chapter, prev, next } = chapterNav(params.slug);
  if (!chapter) notFound();

  return (
    <>
      <Chrome index="06" />
      <main>
        <PageHeader
          eyebrow={`${chapter.kicker} · ${chapter.year}`}
          title={<>{chapter.title.toUpperCase()}</>}
          sub={chapter.philosophy}
        />

        <section className="chapter-body section reveal">
          <div className="section-tag"><i /> STORY</div>
          <div style={{ marginTop: 30 }}>
            {chapter.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="philosophy section reveal">
          <div className="section-tag"><i /> CONTEXT</div>
          <h2 style={{ fontSize: 'clamp(32px,4.6vw,60px)' }}>WHAT WAS<br /><em>HAPPENING.</em></h2>
          <div className="philosophy__statement">
            <p>{chapter.context}</p>
            <span>&mdash; From the chapter notes</span>
          </div>
        </section>

        <section className="chapter-body section reveal">
          <div className="section-tag"><i /> MILESTONES &amp; LESSONS</div>
          <div className="chapter-list">
            <div>
              <h4>MILESTONES</h4>
              <ul>
                {chapter.milestones.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>LESSONS LEARNED</h4>
              <ul>
                {chapter.lessons.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <nav className="chapter-nav" aria-label="Chapter navigation">
          {prev ? (
            <a href={`/journey/${prev.slug}`}>
              <span className="dir">&larr; PREVIOUS CHAPTER</span>
              <h4>{prev.title}</h4>
            </a>
          ) : (
            <span className="stub">START OF THE STORY</span>
          )}
          {next ? (
            <a href={`/journey/${next.slug}`}>
              <span className="dir">NEXT CHAPTER &rarr;</span>
              <h4>{next.title}</h4>
            </a>
          ) : (
            <a href="/about">
              <span className="dir">BACK TO &rarr;</span>
              <h4>About Atomenos</h4>
            </a>
          )}
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
