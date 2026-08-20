import React from "react";
import { CYBER_RED, CYBER_CYAN, CYBER_BG } from "@/lib/theme";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-8 px-4"
      style={{
        backgroundColor: CYBER_BG,
        borderTop: `1px solid ${CYBER_CYAN}33`,
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: CYBER_RED }}
          />
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-white/70">
            M.Cervantes<span style={{ color: CYBER_CYAN }}>_dev</span>
          </span>
        </div>

        <p className="font-mono text-[10px] sm:text-xs tracking-[0.15em] uppercase text-gray-500 text-center">
          © {year} Miguel Cervantes — Personal Portfolio Website
        </p>
      </div>
    </footer>
  );
}

export default Footer;
