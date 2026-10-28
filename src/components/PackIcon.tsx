import type { IconKey } from "@/data/types";

const paths: Record<IconKey, React.ReactNode> = {
  mailer: (
    <>
      <path d="M14 30l46-16 46 16-46 16z" />
      <path d="M14 30v28l46 16 46-16V30" />
      <path d="M60 46v28" />
    </>
  ),
  carton: (
    <>
      <path d="M18 26l42-14 42 14v38l-42 12-42-12z" />
      <path d="M18 26l42 14 42-14M60 40v36" />
      <path d="M39 19l42 14" />
    </>
  ),
  rigid: (
    <>
      <rect x="18" y="24" width="84" height="44" rx="3" />
      <path d="M14 24h92v-10H14z" />
    </>
  ),
  kraft: (
    <>
      <path d="M20 30l40-14 40 14v34l-40 12-40-12z" />
      <path d="M20 30l40 12 40-12M60 42v34" />
      <path d="M40 23l40 14" strokeDasharray="4 4" />
    </>
  ),
  tall: (
    <>
      <rect x="44" y="12" width="32" height="60" rx="3" />
      <path d="M44 22h32M52 12V6h16v6" />
    </>
  ),
  pillow: (
    <>
      <path d="M22 26c12 8 12 20 0 28h76c-12-8-12-20 0-28z" />
      <path d="M22 26c8 4 68 4 76 0M22 54c8-4 68-4 76 0" />
    </>
  ),
  gable: (
    <>
      <path d="M26 40h68v32H26z" />
      <path d="M26 40l14-18h40l14 18" />
      <path d="M50 22v-8h20v8" />
    </>
  ),
  display: (
    <>
      <path d="M16 40h88v30H16z" />
      <path d="M16 40l12-28h64l12 28" />
      <path d="M36 40v-10M60 40v-14M84 40v-10" />
    </>
  ),
  window: (
    <>
      <rect x="22" y="18" width="76" height="52" rx="3" />
      <rect x="40" y="30" width="40" height="26" rx="6" />
    </>
  ),
  tube: (
    <>
      <ellipse cx="60" cy="18" rx="22" ry="7" />
      <path d="M38 18v46c0 4 10 8 22 8s22-4 22-8V18" />
      <path d="M38 28c0 4 10 8 22 8s22-4 22-8" />
    </>
  ),
  sleeve: (
    <>
      <rect x="18" y="30" width="84" height="32" rx="3" />
      <path d="M40 24h46v44H40z" />
    </>
  ),
  jar: (
    <>
      <rect x="38" y="14" width="44" height="12" rx="3" />
      <path d="M36 26h48v40a6 6 0 0 1-6 6H42a6 6 0 0 1-6-6z" />
    </>
  ),
  pouch: (
    <>
      <path d="M38 8h44l4 64H34z" />
      <path d="M38 18h44" />
      <circle cx="60" cy="44" r="10" />
    </>
  ),
  tote: (
    <>
      <path d="M28 30h64l-6 44H34z" />
      <path d="M46 30c0-18 28-18 28 0" />
    </>
  ),
  label: (
    <>
      <circle cx="46" cy="40" r="24" />
      <rect x="66" y="22" width="36" height="36" rx="6" />
    </>
  ),
  tag: (
    <>
      <path d="M40 14h40v58H40z" />
      <circle cx="60" cy="26" r="5" />
      <path d="M60 21c0-10 14-14 22-6" />
    </>
  ),
};

export function PackIcon({ icon }: { icon: IconKey }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" aria-hidden="true">
      {paths[icon]}
    </svg>
  );
}
