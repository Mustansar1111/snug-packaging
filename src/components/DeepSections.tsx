import type { DeepContent } from "@/data/content/deepContent";
import { withLinks } from "@/lib/withLinks";

const cm = (inches: number) => {
  const v = Math.round(inches * 2.54 * 10) / 10;
  return Number.isInteger(v) ? String(v) : v.toFixed(1);
};
const join = (nums: string[]) => nums.join(" × ");

/** Typical sizes plus the material, finish and insert questions for one product page. */
export function DeepSections({ deep, name }: { deep: DeepContent; name: string }) {
  return (
    <section className="block band" id="specs">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Sizes, materials and finishes</p>
            <h2>Choosing your {name}</h2>
          </div>
          <p>Straight answers to the questions buyers ask most, so you can send a quote request with the right details.</p>
        </div>
        <div className="deep-grid">
          <div className="deep-sizes">
            <h3>What sizes do {name} come in?</h3>
            <table className="specs sizes-table">
              <caption>Typical inside sizes ({deep.sizes.cols})</caption>
              <thead>
                <tr>
                  <th scope="col">Used for</th>
                  <th scope="col">Inches</th>
                  <th scope="col">Centimeters</th>
                </tr>
              </thead>
              <tbody>
                {deep.sizes.rows.map((r) => {
                  const dims = r.size.filter((n) => n > 0);
                  return (
                    <tr key={r.use}>
                      <th scope="row">{r.use}</th>
                      <td>{join(dims.map(String))}</td>
                      <td>{join(dims.map(cm))}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="note">{deep.sizes.note}</p>
          </div>
          <div className="guide-body">
            {deep.sections.map((s) => (
              <article key={s.q}>
                <h3>{s.q}</h3>
                {s.a.map((t) => (
                  <p key={t.slice(0, 24)}>{withLinks(t)}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
