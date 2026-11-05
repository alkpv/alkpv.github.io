"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "top", label: "Medication tracking" },
  { id: "does", label: "What it does" },
  { id: "decisions", label: "Product decisions" },
  { id: "speed", label: "Suggestions make adding a medication quick", sub: true },
  { id: "database", label: "Longetic has its own medication and supplement database", sub: true },
  { id: "consistency", label: "The consistency rate makes tracking efficient", sub: true },
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
