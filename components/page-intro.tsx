"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

import { introAttribute, seenKeyPrefix } from "@/lib/page-intro";

function isSeen(key: string) {
  try {
    return localStorage.getItem(key) !== null;
  } catch {
    return false;
  }
}

function isReload() {
  const [entry] = performance.getEntriesByType("navigation");
  return (entry as PerformanceNavigationTiming | undefined)?.type === "reload";
}

// The inline script covers full page loads. This covers moves between pages
// through links, and restores the attribute after React's dev remount.
export function PageIntro() {
  const pathname = usePathname();
  const key = seenKeyPrefix + (pathname.replace(/\/$/, "") || "/");

  // The page the browser loaded. Cleared after the first move through a link,
  // because a reload only replays the page it reloaded.
  const loadedKey = useRef<string | null>(key);

  useLayoutEffect(() => {
    if (key !== loadedKey.current) loadedKey.current = null;
    const reloaded = loadedKey.current !== null && isReload();
    document.documentElement.toggleAttribute(introAttribute, reloaded || !isSeen(key));
  }, [key]);

  // Deferred so the dev remount, which re-runs the effect above, still sees the
  // page as unseen.
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(key, "1");
      } catch {}
    });
    return () => clearTimeout(timer);
  }, [key]);

  return null;
}
