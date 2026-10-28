import Link from "next/link";

export function PageHero({ crumb, title, lede, children }: { crumb: string; title: string; lede?: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero band on-dark">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span>/</span> <span>{crumb}</span>
        </nav>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
