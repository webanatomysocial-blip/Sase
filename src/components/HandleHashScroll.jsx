// src/components/HandleHashScroll.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HandleHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      setTimeout(() => {
        window.lenis.scrollTo(element, {
          duration: 1.8,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: 0.07,
        });
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}