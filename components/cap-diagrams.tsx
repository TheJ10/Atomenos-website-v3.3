export function AiDiagram() {
  return (
    <svg viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="27" stroke="#151515" strokeWidth="1" />
      <path d="M50 38 L60 55 L50 62 L40 55 Z" fill="#151515" />
      <line x1="50" y1="4" x2="50" y2="21" stroke="#151515" strokeWidth="1" />
      <line x1="50" y1="79" x2="50" y2="96" stroke="#151515" strokeWidth="1" />
      <line x1="4" y1="50" x2="21" y2="50" stroke="#151515" strokeWidth="1" />
      <line x1="79" y1="50" x2="96" y2="50" stroke="#151515" strokeWidth="1" />
      <circle cx="50" cy="4" r="2.5" fill="#f36b21" />
      <circle cx="50" cy="96" r="2.5" fill="#f36b21" />
      <circle cx="4" cy="50" r="2.5" fill="#f36b21" />
      <circle cx="96" cy="50" r="2.5" fill="#f36b21" />
    </svg>
  );
}

export function BizDiagram() {
  return (
    <svg viewBox="0 0 100 100" fill="none">
      <rect x="8" y="10" width="34" height="30" stroke="#151515" strokeWidth="1" />
      <rect x="58" y="10" width="34" height="30" stroke="#151515" strokeWidth="1" />
      <rect x="8" y="60" width="34" height="30" stroke="#151515" strokeWidth="1" />
      <rect x="58" y="60" width="34" height="30" stroke="#151515" strokeWidth="1" />
      <line x1="42" y1="25" x2="58" y2="25" stroke="#f36b21" strokeWidth="1.5" />
      <line x1="25" y1="40" x2="25" y2="60" stroke="#f36b21" strokeWidth="1.5" />
      <line x1="75" y1="40" x2="75" y2="60" stroke="#f36b21" strokeWidth="1.5" />
    </svg>
  );
}

export function DigitalDiagram() {
  return (
    <svg viewBox="0 0 100 100" fill="none">
      <rect x="6" y="18" width="88" height="64" rx="3" stroke="#151515" strokeWidth="1" />
      <line x1="6" y1="32" x2="94" y2="32" stroke="#151515" strokeWidth="1" />
      <circle cx="15" cy="25" r="1.6" fill="#151515" />
      <circle cx="21" cy="25" r="1.6" fill="#151515" />
      <rect x="16" y="44" width="60" height="4" fill="#c9c9c4" />
      <rect x="16" y="54" width="44" height="4" fill="#c9c9c4" />
      <rect x="16" y="66" width="26" height="8" fill="#f36b21" />
    </svg>
  );
}

export function GrowthDiagram() {
  return (
    <svg viewBox="0 0 100 100" fill="none">
      <line x1="10" y1="10" x2="10" y2="90" stroke="#151515" strokeWidth="1" />
      <line x1="10" y1="90" x2="94" y2="90" stroke="#151515" strokeWidth="1" />
      <polyline points="14,68 34,50 52,60 74,26 90,38" fill="none" stroke="#151515" strokeWidth="1.4" />
      <circle cx="74" cy="26" r="3" fill="#f36b21" />
    </svg>
  );
}

export function CustomDiagram() {
  return (
    <svg viewBox="0 0 100 100" fill="none">
      <polygon points="50,8 87,29 87,71 50,92 13,71 13,29" stroke="#151515" strokeWidth="1" />
      <polygon points="50,32 68,43 68,64 50,75 32,64 32,43" stroke="#151515" strokeWidth="1" />
      <circle cx="50" cy="53.5" r="3" fill="#f36b21" />
    </svg>
  );
}

export function GrowthDiagramLarge() {
  return (
    <svg viewBox="0 0 100 100" fill="none">
      <circle cx="30" cy="70" r="14" stroke="#ffffff3b" strokeWidth="1" />
      <circle cx="30" cy="70" r="28" stroke="#ffffff26" strokeWidth="1" />
      <circle cx="30" cy="70" r="42" stroke="#ffffff17" strokeWidth="1" />
      <line x1="30" y1="70" x2="78" y2="22" stroke="#f36b21" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 22 H78 V40" stroke="#f36b21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="30" cy="70" r="4" fill="#fff" />
    </svg>
  );
}
