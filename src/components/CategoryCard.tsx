import { lowerName } from "@/lib/site";
import Link from "next/link";
import type { Category } from "@/data/types";
import { PackIcon } from "./PackIcon";
import { packPhoto } from "@/lib/images";

export function CategoryCard({ cat }: { cat: Category }) {
  const photo = packPhoto(cat.slug);
  return (
    <Link className="cat" href={`/packaging/${cat.slug}`}>
      <div className={photo ? "art photo" : "art"}>
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo.srcSm} alt={`Custom ${lowerName(cat.name)}`} loading="lazy" decoding="async" width={480} height={480} />
        ) : (
          <PackIcon icon={cat.icon} />
        )}
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
