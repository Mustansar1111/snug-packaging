import { lowerName } from "@/lib/site";
import Link from "next/link";
import type { Category } from "@/data/types";
import { PackIcon } from "./PackIcon";
import { packPhoto } from "@/lib/images";

/** `plain` drops the heading tag, for cards inside tabs where a list of headings would repeat on the page. */
export function CategoryCard({ cat, plain = false }: { cat: Category; plain?: boolean }) {
  const photo = packPhoto(cat.slug);
  return (
    <Link className="cat" href={`/packaging/${cat.slug}`}>
      <div className={photo ? "art photo" : "art"}>
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo.srcSm}
            srcSet={photo.srcSet}
            sizes="(max-width: 860px) 45vw, 280px"
            alt={`Custom ${lowerName(cat.name)}`}
            loading="lazy"
            decoding="async"
            width={480}
            height={480}
          />
        ) : (
          <PackIcon icon={cat.icon} />
        )}
      </div>
      {plain ? <p className="cat-name">{cat.name}</p> : <h3>{cat.name}</h3>}
      <p className="spec">{cat.material}</p>
      <span className="go">Get a quote →</span>
    </Link>
  );
}

export function CategoryGrid({ cats, plain = false }: { cats: Category[]; plain?: boolean }) {
  return (
    <div className="cats" data-reveal-group>
      {cats.map((c) => (
        <CategoryCard key={c.slug} cat={c} plain={plain} />
      ))}
    </div>
  );
}
