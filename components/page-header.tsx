export function PageHeader({
  eyebrow,
  title,
  sub
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <section className="page-hero">
      <div className="hero__grid" />
      <div className="page-hero__orb" aria-hidden="true">
        <div />
        <div />
        <div />
      </div>
      <p className="section-tag" style={{ color: '#c8c8c5' }}>
        <i /> {eyebrow}
      </p>
      <h1 className="page-hero__title">{title}</h1>
      {sub && <p className="page-hero__sub">{sub}</p>}
    </section>
  );
}
