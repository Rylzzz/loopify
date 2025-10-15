import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // setiap kali route berubah, scroll ke atas
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // tidak render apa-apa
}