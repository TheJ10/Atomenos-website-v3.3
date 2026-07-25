export type Resource = {
  slug: string;
  type: 'GUIDE' | 'TEMPLATE' | 'CHANGELOG';
  title: string;
  note: string;
  time: string;
  description: string;
  preview: string[];
};

export const RESOURCES: Resource[] = [
  {
    slug: 'how-we-scope-a-first-project',
    type: 'GUIDE',
    title: 'How we scope a first project.',
    note: 'PDF · 6 pages',
    time: '10 min read',
    description: 'The exact structure of the first conversation and the discovery week that follows \u2014 what we ask, what we look at, and how a scope actually gets written.',
    preview: [
      'The three questions we ask before anything else',
      'What a discovery week covers, day by day',
      'How we turn observations into a one-page scope'
    ]
  },
  {
    slug: 'one-page-project-brief',
    type: 'TEMPLATE',
    title: 'The one-page project brief.',
    note: 'DOCX · Editable',
    time: '5 min to fill in',
    description: 'The same brief format we use internally to open a new project \u2014 problem, constraints, success measure, nothing else.',
    preview: ['Problem statement', 'Constraints and non-goals', 'Single measurable outcome']
  },
  {
    slug: 'automation-vs-full-system',
    type: 'GUIDE',
    title: 'Choosing between automation and a full system.',
    note: 'PDF · 5 pages',
    time: '8 min read',
    description: 'Not every operational problem needs a new system. A short framework for knowing when a lightweight automation is enough, and when it isn\u2019t.',
    preview: ['A five-question decision framework', 'Two real examples of each path', 'Warning signs you\u2019ve under-scoped the fix']
  },
  {
    slug: 'atomenos-changelog',
    type: 'CHANGELOG',
    title: "What's changed on the Atomenos site.",
    note: 'Updated monthly',
    time: '2 min read',
    description: 'A running log of what changed on this website and why \u2014 kept in the same spirit as everything else we build: plain, dated, and honest about what\u2019s still in progress.',
    preview: ['July 2026 \u2014 Capabilities page and journey pages added', 'June 2026 \u2014 Site repositioned around systems, not ventures', 'May 2026 \u2014 Initial site launched']
  },
  {
    slug: 'rollout-checklist',
    type: 'TEMPLATE',
    title: 'A simple rollout checklist for new systems.',
    note: 'Sheet · Editable',
    time: '5 min to fill in',
    description: 'The checklist we run through before any new system goes live for a client \u2014 access, training, fallback plan, and the first-week check-in.',
    preview: ['Pre-launch access and permissions', 'Team training checklist', 'First-week check-in plan']
  },
  {
    slug: 'questions-before-buying-software',
    type: 'GUIDE',
    title: 'Questions to ask before buying more software.',
    note: 'PDF · 4 pages',
    time: '6 min read',
    description: 'A short list of questions worth asking before adding another tool to the stack \u2014 most of them uncomfortable, all of them worth asking early.',
    preview: ['What workaround does this replace?', 'Who actually owns this once it\u2019s live?', 'What happens if we don\u2019t buy anything?']
  }
];

export function resourceNav(slug: string) {
  const idx = RESOURCES.findIndex((r) => r.slug === slug);
  return { resource: RESOURCES[idx] };
}

export function relatedResources(slug: string, count = 3) {
  return RESOURCES.filter((r) => r.slug !== slug).slice(0, count);
}
