import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 1.2, // Match Lenis duration for smooth transition
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      });
    } else {
      window.scrollTo(0, 0); // Fallback for non-Lenis scenarios
    }
  }, [pathname]); // Re-run when pathname changes

  return null;
}

export default ScrollToTop; // Export the component