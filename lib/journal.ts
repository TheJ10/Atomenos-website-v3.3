export type Article = {
  slug: string;
  date: string;
  category: 'Perspective' | 'Field notes' | 'Strategy';
  read: string;
  title: string;
  dek: string;
  body: { heading?: string; paragraphs: string[] }[];
  pullQuote: string;
};

export const ARTICLES: Article[] = [
  {
    slug: 'why-automation-projects-fail',
    date: '01.06.26',
    category: 'Perspective',
    read: '4 min read',
    title: 'Why most automation projects fail before they start.',
    dek: 'The failure usually happens weeks before a single workflow gets built \u2014 in the meeting where nobody asked what the team was actually doing.',
    body: [
      {
        heading: 'The wrong first question',
        paragraphs: [
          'Most automation projects begin with a tool already chosen. Someone has seen a demo, read a case study, or heard a competitor mention "AI agents," and the project starts from there: how do we fit this tool into what we do?',
          'That question guarantees a mediocre outcome. It optimizes for adoption of the tool, not removal of the friction. Teams end up automating the wrong step, or automating a step that shouldn\u2019t exist at all.'
        ]
      },
      {
        heading: 'What actually predicts success',
        paragraphs: [
          'In every automation project that has held up six months later, the first two weeks looked the same: someone sat with the team doing the work, watched them do it, and asked why each step existed.',
          'Half the time, the honest answer was "because that\u2019s how we\u2019ve always done it." Those steps are the ones worth removing entirely, not automating faithfully.'
        ]
      },
      {
        heading: 'A smaller, better starting point',
        paragraphs: [
          'The projects that succeed start narrow: one workflow, one team, one measurable outcome. Not a platform. Not an "automation strategy." One thing, done well enough that the team asks for the next one.'
        ]
      }
    ],
    pullQuote: 'Automating the wrong step faithfully is worse than automating nothing at all.'
  },
  {
    slug: 'what-makes-a-dashboard-get-used',
    date: '14.05.26',
    category: 'Field notes',
    read: '6 min read',
    title: 'What makes an internal dashboard actually get used.',
    dek: 'Most internal dashboards get built once, demoed once, and opened twice. Here\u2019s the pattern behind the ones that survive.',
    body: [
      {
        heading: 'The demo problem',
        paragraphs: [
          'Dashboards are built to impress in a demo: dense, colorful, comprehensive. Then they ship, and the person who needed one number a day opens a page with forty.',
          'The dashboards that get used daily tend to be almost boring. Two or three numbers that matter, updated reliably, in the place the person already looks.'
        ]
      },
      {
        heading: 'Design around the moment, not the data',
        paragraphs: [
          'Before building anything, we ask when someone would actually open this. Once a morning, before a shift, mid-service on a busy night? The answer changes everything about layout, refresh rate, and what counts as "important."',
          'A kitchen dashboard checked mid-service needs to be readable from four feet away in bad light. A weekly ops review can afford density. Treating both the same way is why most dashboards fail.'
        ]
      }
    ],
    pullQuote: 'The dashboards people actually use are almost boring \u2014 a few numbers, always right, always where they expect them.'
  },
  {
    slug: 'understand-before-you-build',
    date: '22.03.26',
    category: 'Perspective',
    read: '3 min read',
    title: 'The case for understanding a business before building for it.',
    dek: 'Research feels like a delay. It\u2019s usually the fastest path to the right system.',
    body: [
      {
        paragraphs: [
          'Every business we\u2019ve worked with had, at some point, already tried to solve its own problem with an off-the-shelf tool. Most of those tools are still installed, half-used, quietly ignored.',
          'That\u2019s not a failure of the tool. It\u2019s what happens when software gets adopted before the problem is understood. The tool solves a generic version of the problem, and the business has a specific one.',
          'A week spent understanding how work actually happens, before any building starts, routinely saves months of rebuilding later. It just doesn\u2019t look like progress while it\u2019s happening.'
        ]
      }
    ],
    pullQuote: 'A week of research that isn\u2019t visible yet is cheaper than a system that\u2019s visible and wrong.'
  },
  {
    slug: 'where-ai-agents-save-time',
    date: '02.03.26',
    category: 'Strategy',
    read: '5 min read',
    title: "Where AI agents genuinely save time, and where they don't.",
    dek: 'Not every repetitive task is a good candidate for an agent. Here\u2019s how we decide.',
    body: [
      {
        heading: 'Good fits',
        paragraphs: [
          'AI agents earn their keep on tasks that are repetitive, well-defined, and forgiving of the occasional miss: drafting first-pass responses, triaging incoming requests, summarizing long threads before a human decides what matters.'
        ]
      },
      {
        heading: 'Poor fits',
        paragraphs: [
          'They struggle where a mistake is expensive and infrequent \u2014 a once-a-quarter compliance filing, a customer refund decision with no clear pattern. The rarity means the agent never really learns the edge cases, and the cost of the miss is high.',
          'Our rule of thumb: automate the task first with simple rules and see how far that gets you. Bring in an agent only where the task genuinely requires judgment across too many variables for a rulebook to cover.'
        ]
      }
    ],
    pullQuote: 'The best use of an AI agent is often the task right before the one everyone assumes it should do.'
  },
  {
    slug: 'the-cost-of-one-size-fits-all',
    date: '18.02.26',
    category: 'Field notes',
    read: '4 min read',
    title: 'The hidden cost of one-size-fits-all software.',
    dek: 'Generic software is cheap to buy and expensive to live with. The bill just arrives later, spread across a hundred small workarounds.',
    body: [
      {
        paragraphs: [
          'The sticker price of an off-the-shelf platform is almost always lower than a custom system. What doesn\u2019t show up on that invoice is the cost of every workaround a team builds to make the tool fit: the parallel spreadsheet, the manual double-entry, the step someone does "outside the system" because the system doesn\u2019t support how they actually work.',
          'Those workarounds are invisible in a sales demo and very visible eighteen months in, when the team is running the business half inside the tool and half around it.',
          'A system built around the actual workflow costs more upfront and less over time \u2014 not because custom software is inherently better, but because it doesn\u2019t generate a second, informal system alongside it.'
        ]
      }
    ],
    pullQuote: 'The real cost of generic software is the shadow system your team builds to work around it.'
  },
  {
    slug: 'designing-scalable-systems',
    date: '30.01.26',
    category: 'Perspective',
    read: '7 min read',
    title: 'Designing systems that scale with the business, not against it.',
    dek: 'A system that works at ten orders a day and breaks at two hundred wasn\u2019t really finished the first time.',
    body: [
      {
        heading: 'Scale is a design constraint, not a future problem',
        paragraphs: [
          'It\u2019s tempting to build for today\u2019s volume and "deal with scale later." In practice, the parts of a system that break under growth are usually structural \u2014 how data is modeled, how responsibilities are split \u2014 and those are exactly the parts that are hardest to change after the fact.',
          'We don\u2019t over-engineer for hypothetical scale. We just make sure the early decisions don\u2019t quietly assume the business will stay small.'
        ]
      },
      {
        heading: 'What that looks like in practice',
        paragraphs: [
          'For the restaurant ordering system, that meant designing the dashboard to handle multiple locations from day one, even for a client with a single location \u2014 because the data model is far more painful to change later than to design correctly once.',
          'It rarely means building more. It means building the right shape, so that more volume is a configuration change, not a rebuild.'
        ]
      }
    ],
    pullQuote: 'The parts of a system that break under growth are the parts that were hardest to see on day one.'
  }
];

export function articleNav(slug: string) {
  const idx = ARTICLES.findIndex((a) => a.slug === slug);
  return { article: ARTICLES[idx], idx };
}

export function relatedArticles(slug: string, count = 3) {
  return ARTICLES.filter((a) => a.slug !== slug).slice(0, count);
}
