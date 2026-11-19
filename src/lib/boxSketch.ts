/** Isometric outline of a box with the given proportions, for the live drawing in the quote form. */
export function boxSketch(l: number, w: number, h: number, size = { w: 260, h: 170, pad: 14 }) {
  const c = Math.cos(Math.PI / 6), s = Math.sin(Math.PI / 6);
  const p = (x: number, y: number, z: number) => [(x - y) * c, (x + y) * s - z];
  const faces = {
    top: [p(0, 0, h), p(l, 0, h), p(l, w, h), p(0, w, h)],
    right: [p(l, 0, 0), p(l, w, 0), p(l, w, h), p(l, 0, h)],
    front: [p(0, w, 0), p(l, w, 0), p(l, w, h), p(0, w, h)],
  };
  const all = Object.values(faces).flat();
  const xs = all.map((q) => q[0]), ys = all.map((q) => q[1]);
  const minX = Math.min(...xs), minY = Math.min(...ys);
  const k = Math.min((size.w - 2 * size.pad) / (Math.max(...xs) - minX), (size.h - 2 * size.pad) / (Math.max(...ys) - minY));
  const ox = (size.w - (Math.max(...xs) - minX) * k) / 2, oy = (size.h - (Math.max(...ys) - minY) * k) / 2;
  const pt = (q: number[]) => [ox + (q[0] - minX) * k, oy + (q[1] - minY) * k];
  const str = (f: number[][]) => f.map((q) => pt(q).map((v) => v.toFixed(1)).join(",")).join(" ");
  const mid = (a: number[], b: number[]) => { const A = pt(a), B = pt(b); return [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2]; };
  return {
    viewBox: `0 0 ${size.w} ${size.h}`,
    top: str(faces.top),
    right: str(faces.right),
    front: str(faces.front),
    // label positions: length under the front edge, width under the right edge, height beside the front-left edge
    lPos: mid(p(0, w, 0), p(l, w, 0)),
    wPos: mid(p(l, w, 0), p(l, 0, 0)),
    hPos: mid(p(0, w, 0), p(0, w, h)),
  };
}
