import Link from "next/link";
import type { Category } from "@/data/types";
import { PackIcon } from "./PackIcon";

export function CategoryCard({ cat }: { cat: Category }) {
  return (
    <Link className="cat" href={`/packaging/${cat.slug}`}>
      <div className="art">
        <PackIcon icon={cat.icon} />
      </div>
      <h3>{cat.name}</h3>
      <p className="spec">{cat.material}</p>
      <span className="go">Get a quote →</span>
    </Link>
  );
}

export function CategoryGrid({ cats }: { cats: Category[] }) {
  return (
    <div className="cats" data-reveal-group>
      {cats.map((c) => (
        <CategoryCard key={c.slug} cat={c} />
      ))}
    </div>
  );
}
