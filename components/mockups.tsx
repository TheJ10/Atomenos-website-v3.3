const INK = '#151515';
const ORANGE = '#f36b21';
const LINE = '#d8d6cf';
const MUTE = '#c9c9c4';

export function MobileOrderMockup() {
  return (
    <svg viewBox="0 0 240 340" fill="none" width="100%" height="100%">
      <rect x="4" y="4" width="232" height="332" rx="26" fill="#fff" stroke={INK} strokeWidth="2" />
      <rect x="18" y="24" width="204" height="60" rx="8" fill="#171717" />
      <text x="30" y="48" fill="#fff" fontSize="11" fontFamily="Arial" fontWeight="bold">TABLE 04</text>
      <text x="30" y="66" fill={ORANGE} fontSize="9" fontFamily="Arial">SCAN &amp; ORDER</text>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(18 ${100 + i * 64})`}>
          <rect width="204" height="52" rx="10" fill="#f7f6f2" />
          <rect x="12" y="12" width="40" height="28" rx="6" fill={MUTE} />
          <rect x="62" y="14" width="100" height="8" rx="2" fill="#3a3a3a" />
          <rect x="62" y="28" width="60" height="6" rx="2" fill="#9c9c96" />
          <circle cx="178" cy="26" r="12" fill={ORANGE} />
          <text x="178" y="30" fill="#fff" fontSize="12" fontFamily="Arial" textAnchor="middle">+</text>
        </g>
      ))}
      <rect x="18" y="300" width="204" height="24" rx="12" fill={ORANGE} />
      <text x="120" y="316" fill="#fff" fontSize="10" fontFamily="Arial" fontWeight="bold" textAnchor="middle">SEND TO KITCHEN</text>
    </svg>
  );
}

export function KitchenDashboardMockup() {
  const cols = [
    { label: 'NEW', items: 3, tone: ORANGE },
    { label: 'PREPARING', items: 2, tone: '#e0e0da' },
    { label: 'READY', items: 1, tone: '#e0e0da' }
  ];
  return (
    <svg viewBox="0 0 480 300" fill="none" width="100%" height="100%">
      <rect width="480" height="300" rx="14" fill="#111" />
      <rect x="0" y="0" width="480" height="36" fill="#000" />
      <text x="18" y="23" fill="#fff" fontSize="11" fontFamily="Arial" fontWeight="bold">KITCHEN DISPLAY</text>
      <text x="462" y="23" fill={ORANGE} fontSize="10" fontFamily="Arial" textAnchor="end">LIVE</text>
      {cols.map((col, i) => (
        <g key={col.label} transform={`translate(${18 + i * 152} 50)`}>
          <text x="0" y="0" fill="#a0a0a0" fontSize="9" fontFamily="Arial" letterSpacing="1">{col.label}</text>
          {Array.from({ length: col.items }).map((_, j) => (
            <g key={j} transform={`translate(0 ${16 + j * 66})`}>
              <rect width="136" height="56" rx="8" fill="#1c1c1c" stroke="#2c2c2c" />
              <rect x="10" y="10" width="60" height="6" rx="2" fill={i === 0 ? ORANGE : '#666'} />
              <rect x="10" y="24" width="90" height="5" rx="2" fill="#3d3d3d" />
              <rect x="10" y="34" width="70" height="5" rx="2" fill="#3d3d3d" />
              <text x="10" y="49" fill="#777" fontSize="7" fontFamily="Arial">TABLE {(i + 1) * 2 + j}</text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

export function AdminDashboardMockup() {
  const bars = [40, 65, 50, 80, 60, 90, 70];
  return (
    <svg viewBox="0 0 480 300" fill="none" width="100%" height="100%">
      <rect width="480" height="300" rx="14" fill="#fff" stroke={LINE} />
      <rect x="0" y="0" width="480" height="40" fill="#f7f6f2" />
      <text x="18" y="25" fill={INK} fontSize="11" fontFamily="Arial" fontWeight="bold">RESTAURANT DASHBOARD</text>
      {[
        ['ORDERS TODAY', '182'],
        ['AVG TICKET', '$24'],
        ['ERROR RATE', '0.4%']
      ].map(([label, val], i) => (
        <g key={label} transform={`translate(${18 + i * 150} 56)`}>
          <rect width="134" height="52" rx="8" fill="#f7f6f2" />
          <text x="12" y="20" fill="#8a8a84" fontSize="7" fontFamily="Arial">{label}</text>
          <text x="12" y="40" fill={INK} fontSize="17" fontFamily="Arial" fontWeight="bold">{val}</text>
        </g>
      ))}
      <g transform="translate(18 130)">
        <text x="0" y="0" fill="#8a8a84" fontSize="8" fontFamily="Arial">ORDERS THIS WEEK</text>
        {bars.map((h, i) => (
          <rect key={i} x={i * 60} y={140 - h} width="36" height={h} rx="4" fill={i === 5 ? ORANGE : '#e4e2db'} />
        ))}
        <line x1="0" y1="140" x2="440" y2="140" stroke={LINE} />
      </g>
    </svg>
  );
}

export function ArchitectureDiagram() {
  const nodes = [
    { x: 30, y: 30, w: 110, h: 46, label: 'Customer App', sub: 'QR ordering' },
    { x: 30, y: 130, w: 110, h: 46, label: 'Kitchen Display', sub: 'Real-time queue' },
    { x: 210, y: 80, w: 120, h: 46, label: 'Core API', sub: 'Orders & sync' },
    { x: 400, y: 30, w: 110, h: 46, label: 'Admin Dashboard', sub: 'Reporting' },
    { x: 400, y: 130, w: 110, h: 46, label: 'Database', sub: 'Orders & menu' }
  ];
  return (
    <svg viewBox="0 0 560 210" fill="none" width="100%" height="100%">
      <line x1="140" y1="53" x2="210" y2="95" stroke={ORANGE} strokeWidth="1.5" />
      <line x1="140" y1="153" x2="210" y2="111" stroke={ORANGE} strokeWidth="1.5" />
      <line x1="330" y1="95" x2="400" y2="53" stroke={ORANGE} strokeWidth="1.5" />
      <line x1="330" y1="111" x2="400" y2="153" stroke={ORANGE} strokeWidth="1.5" />
      {nodes.map((n) => (
        <g key={n.label}>
          <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="8" fill="#fff" stroke={INK} strokeWidth="1.3" />
          <text x={n.x + 12} y={n.y + 19} fill={INK} fontSize="10" fontFamily="Arial" fontWeight="bold">{n.label}</text>
          <text x={n.x + 12} y={n.y + 33} fill="#8a8a84" fontSize="8" fontFamily="Arial">{n.sub}</text>
        </g>
      ))}
    </svg>
  );
}

export function UserJourneyDiagram() {
  const steps = ['Scan QR', 'Browse menu', 'Place order', 'Kitchen prep', 'Serve', 'Pay & leave'];
  return (
    <svg viewBox="0 0 600 100" fill="none" width="100%" height="100%">
      <line x1="30" y1="30" x2="570" y2="30" stroke={LINE} strokeWidth="2" />
      {steps.map((s, i) => {
        const x = 30 + (i * (540 / (steps.length - 1)));
        return (
          <g key={s}>
            <circle cx={x} cy="30" r="7" fill={i === 3 ? ORANGE : '#fff'} stroke={i === 3 ? ORANGE : INK} strokeWidth="2" />
            <text x={x} y="58" fill={INK} fontSize="9.5" fontFamily="Arial" textAnchor="middle" fontWeight={i === 3 ? 'bold' : 'normal'}>{s}</text>
          </g>
        );
      })}
    </svg>
  );
}
