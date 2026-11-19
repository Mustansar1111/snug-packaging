"use client";

import { useState } from "react";

/** Accessible tabs. Every panel is rendered in the HTML (good for SEO); only the chosen one is visible. */
export function Tabs({ label, tabs }: { label: string; tabs: { key: string; label: string; panel: React.ReactNode }[] }) {
  const [active, setActive] = useState(tabs[0].key);
  return (
    <div className="tabset">
      <div className="tabs" role="tablist" aria-label={label}>
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            className="chip"
            id={`tab-${t.key}`}
            aria-controls={`panel-${t.key}`}
            aria-selected={active === t.key}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div key={t.key} role="tabpanel" id={`panel-${t.key}`} aria-labelledby={`tab-${t.key}`} hidden={active !== t.key}>
          {t.panel}
        </div>
      ))}
    </div>
  );
}
