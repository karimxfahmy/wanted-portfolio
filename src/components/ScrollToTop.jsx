import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the top whenever the route changes — important for SPA navigation
// since React Router doesn't reset scroll position by default.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
