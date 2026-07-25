export type Chapter = {
  slug: string;
  year: string;
  title: string;
  kicker: string;
  story: string[];
  context: string;
  philosophy: string;
  milestones: string[];
  lessons: string[];
};

export const CHAPTERS: Chapter[] = [
  {
    slug: 'founding-atomenos',
    year: '2026',
    title: 'Founding Atomenos',
    kicker: 'CHAPTER 01',
    story: [
      'Atomenos didn\u2019t start with a product idea. It started with a pattern we kept running into: businesses buying software that almost fit, then rebuilding their process around the tool instead of the other way round.',
      'We set out to build a company that would do the opposite \u2014 understand a business first, then build or automate exactly what it needed. No template, no fixed package.'
    ],
    context: 'Most of the early conversations weren\u2019t about technology at all. They were about a restaurant\u2019s order flow, a clinic\u2019s scheduling headaches, a sales team\u2019s spreadsheet sprawl. The technology came second, always.',
    philosophy: 'Depth before distance. We\u2019d rather understand one business well than pitch a hundred businesses the same deck.',
    milestones: [
      'Atomenos incorporated, single standard applied across unrelated industries',
      'First discovery engagements begin with early restaurant and services clients',
      'Internal principles documented: understand, design, build, stay'
    ],
    lessons: [
      'Saying no to a good-sounding project that didn\u2019t fit the standard was harder than saying yes.',
      'Clients trust a company that asks better questions before it writes a single proposal.'
    ]
  },
  {
    slug: 'first-production-systems',
    year: '2026',
    title: 'First Production Systems',
    kicker: 'CHAPTER 02',
    story: [
      'The first system to reach real production was, fittingly, unglamorous: a QR ordering flow for a restaurant that was losing money to mis-entered paper orders.',
      'It shipped in four weeks. It wasn\u2019t the most sophisticated thing we could have built \u2014 it was the smallest thing that solved the actual problem, which was the point.'
    ],
    context: 'Alongside it came the restaurant\u2019s management dashboard, an internal tool for reconciling orders, tracking kitchen throughput, and reporting the night\u2019s numbers without a spreadsheet in sight.',
    philosophy: 'Ship the narrow thing that works before proposing the broad thing that might.',
    milestones: [
      'QR ordering platform and restaurant dashboard go live',
      'First internal AI assistant built for a client support workflow',
      'Early CRM and internal dashboard work begins for a second client'
    ],
    lessons: [
      'A working four-week system earned more trust than a beautiful six-month proposal would have.',
      'Operational software succeeds or fails on the floor, not in the design review.'
    ]
  },
  {
    slug: 'capabilities-expand',
    year: '2027',
    title: 'Capabilities Expand',
    kicker: 'CHAPTER 03',
    story: [
      'With a handful of systems in production, the categories we kept getting asked about started to take shape on their own: AI automation, business systems, digital experiences, growth systems, and the custom work that doesn\u2019t fit a label.',
      'We formalized them, not as a menu, but as a map of where the same standard had already proven itself.'
    ],
    context: 'Custom AI agents and workflow automation moved from one-off builds to a repeatable practice. Growth systems \u2014 SEO, analytics, conversion work \u2014 joined the roster as businesses asked not just to run better, but to be found and chosen more often.',
    philosophy: 'The categories will keep widening. The process underneath them won\u2019t change.',
    milestones: [
      'Five capability categories formalized: AI Automation, Business Systems, Digital Experiences, Growth Systems, Custom Solutions',
      'Dedicated Capabilities experience launched on the website',
      'Hospital management system moves into active development'
    ],
    lessons: [
      'Naming the categories after the fact, once the work already existed, kept the offering honest.',
      'Growth work only mattered once the underlying system was solid \u2014 sequencing it mattered as much as doing it.'
    ]
  }
];

export function chapterNav(slug: string) {
  const idx = CHAPTERS.findIndex((c) => c.slug === slug);
  return {
    prev: idx > 0 ? CHAPTERS[idx - 1] : null,
    next: idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null,
    chapter: CHAPTERS[idx]
  };
}
