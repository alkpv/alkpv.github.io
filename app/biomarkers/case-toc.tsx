"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "top", label: "One place for every biomarker" },
  { id: "does", label: "What it does" },
  { id: "does-not", label: "What it does not do" },
  { id: "decisions", label: "Product decisions" },
  { id: "upload", label: "Upload is where the user’s documents are", sub: true },
  { id: "systems", label: "Body systems come before a full list", sub: true },
  { id: "history", label: "Each biomarker has one history", sub: true },
  { id: "out-of-range", label: "Out of range is soft orange, not red", sub: true },
  { id: "conditional", label: "A conditional range shows its conditions", sub: true },
  { id: "visits", label: "Doctor’s visits stay neutral", sub: true },
  { id: "status", label: "Status" },
];

export function CaseToc() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const targets = items.map((item) => document.getElementById(item.id));

    function update() {
      let current = 0;
      targets.forEach((target, index) => {
        if (target && target.getBoundingClientRect().top < 160) current = index;
      });
      const atEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      setActive(atEnd ? targets.length - 1 : current);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav className="toc" aria-label="Contents">
      {items.map((item, index) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          data-sub={item.sub ? "" : undefined}
          aria-current={index === active ? "true" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
