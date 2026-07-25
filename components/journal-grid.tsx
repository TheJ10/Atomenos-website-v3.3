'use client';

import { useMemo, useState } from 'react';
import type { Article } from '../lib/journal';

const CATS = ['All', 'Perspective', 'Field notes', 'Strategy'] as const;

export function JournalGrid({ articles }: { articles: Article[] }) {
  const [cat, setCat] = useState<(typeof CATS)[number]>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCat = cat === 'All' || a.category === cat;
      const matchesQuery = query.trim() === '' || a.title.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [articles, cat, query]);

  return (
    <>
      <div className="cap-tabs">
        {CATS.map((c) => (
          <button key={c} className="cap-tab" data-active={cat === c} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="search-field">
        <input
          type="text"
          placeholder="Search the journal…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="journal__grid">
        {filtered.map((p) => (
          <a key={p.slug} href={`/journal/${p.slug}`} className="lift">
            <span>{p.date}</span>
            <h3>{p.title}</h3>
            <p>{p.category} &middot; {p.read}</p>
          </a>
        ))}
        {filtered.length === 0 && <p style={{ color: '#8a8a84', fontSize: 14 }}>No entries match that search.</p>}
      </div>
    </>
  );
}
