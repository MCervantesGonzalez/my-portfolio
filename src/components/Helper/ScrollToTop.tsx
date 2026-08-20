"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { CYBER_CYAN, CYBER_PANEL_CLASS } from "@/lib/theme";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  /* SHOW AND HIDE SCROLL */
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  /* SCROLL TO TOP FUNCTION */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className={`cursor-pointer rounded-sm w-12 h-12 flex items-center justify-center focus:outline-none ${CYBER_PANEL_CLASS}`}
      >
        <ArrowUp
          className="w-5 h-5"
          strokeWidth={1.5}
          style={{ color: CYBER_CYAN }}
        />
      </button>
    </div>
  );
}

export default ScrollToTop;
