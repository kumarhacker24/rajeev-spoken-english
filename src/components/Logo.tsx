"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type LogoTheme = "light" | "dark" | "monochrome";
type LogoVariant = "horizontal" | "compact" | "symbol" | "animated";

export interface LogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  className?: string;
  onComplete?: () => void;
}

const COLORS = {
  navy: "#0F172A",   // Dark Slate
  teal: "#0D9488",   // Primary Teal
  white: "#FFFFFF",
  coral: "#F97316",  // Accent Coral
};

/**
 * Clean, scalable SVG paths representing the "Speech Bubble + Book" concept.
 */
const LogoSymbolSVG = ({
  theme,
  animated = false,
  className = "",
}: {
  theme: LogoTheme;
  animated?: boolean;
  className?: string;
}) => {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animated && !prefersReducedMotion;

  const isDark = theme === "dark";
  const isMono = theme === "monochrome";

  // Colors based on theme
  const primaryColor = isMono ? "currentColor" : isDark ? COLORS.white : COLORS.navy;
  const accentColor = isMono ? "currentColor" : COLORS.teal;

  // Path drawing animation variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.2, ease: [0.4, 0, 0.2, 1] as const, delay: custom * 0.3 },
        opacity: { duration: 0.2, delay: custom * 0.3 },
      },
    }),
  };

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Speech Bubble + Right Book Page */}
      <motion.path
        d="M 22 8 C 18 8 18 13 18 13 V 27 C 18 27 22 22 28 22 V 10 C 28 10 25 8 22 8 Z M 18 13 C 18 13 11 13 7 17 C 3 21 6 27 6 27 L 4 33 L 11 31 C 11 31 16 33 22 29 L 28 22"
        stroke={primaryColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        custom={0}
        initial={shouldAnimate ? "hidden" : "visible"}
        animate="visible"
        variants={pathVariants}
      />
      {/* Inner Book Page (Left Side) */}
      <motion.path
        d="M 18 13 C 18 13 14 8 10 8 V 20 C 14 20 18 24 18 24"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        custom={1}
        initial={shouldAnimate ? "hidden" : "visible"}
        animate="visible"
        variants={pathVariants}
      />
    </svg>
  );
};

const LogoText = ({ theme, compact = false }: { theme: LogoTheme; compact?: boolean }) => {
  const isDark = theme === "dark";
  const isMono = theme === "monochrome";

  const primaryColor = isMono ? "currentColor" : isDark ? COLORS.white : COLORS.navy;
  const secondaryColor = isMono ? "currentColor" : isDark ? "#94A3B8" : "#475569";

  return (
    <div className="flex flex-col justify-center">
      <span
        className="font-display font-black leading-none tracking-tight"
        style={{ color: primaryColor, fontSize: compact ? "1.25rem" : "1.75rem" }}
      >
        RAJEEV SIR'S
      </span>
      <span
        className={`font-body font-bold uppercase tracking-[0.15em] ${compact ? "mt-0.5" : "mt-1"}`}
        style={{ color: secondaryColor, fontSize: compact ? "0.45rem" : "0.6rem" }}
      >
        Spoken English Classes
      </span>
    </div>
  );
};

const LogoSymbol = ({ theme = "light", className = "" }: { theme?: LogoTheme; className?: string }) => (
  <LogoSymbolSVG theme={theme} className={`w-8 h-8 ${className}`} />
);

const LogoHorizontal = ({ theme = "light", className = "" }: { theme?: LogoTheme; className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <LogoSymbolSVG theme={theme} className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
    <LogoText theme={theme} />
  </div>
);

const LogoCompact = ({ theme = "light", className = "" }: { theme?: LogoTheme; className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <LogoSymbolSVG theme={theme} className="w-8 h-8 flex-shrink-0" />
    <LogoText theme={theme} compact />
  </div>
);

const AnimatedLogo = ({ theme = "light", className = "", onComplete }: { theme?: LogoTheme; className?: string, onComplete?: () => void }) => {
  const prefersReducedMotion = useReducedMotion();
  const isDark = theme === "dark";
  const isMono = theme === "monochrome";
  const primaryColor = isMono ? "currentColor" : isDark ? COLORS.white : COLORS.navy;
  const secondaryColor = isMono ? "currentColor" : isDark ? "#94A3B8" : "#475569";

  if (prefersReducedMotion) {
    return <LogoHorizontal theme={theme} className={className} />;
  }

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      onAnimationComplete={onComplete}
    >
      {/* Symbol Animation */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <LogoSymbolSVG theme={theme} animated className="w-12 h-12 flex-shrink-0" />
      </motion.div>

      <div className="flex flex-col justify-center">
        {/* RAJEEV reveal */}
        <motion.span
          className="font-display font-black leading-none tracking-tight text-[1.75rem]"
          style={{ color: primaryColor }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
        >
          RAJEEV SIR'S
        </motion.span>
        {/* Descriptor reveal */}
        <motion.span
          className="font-body font-bold uppercase tracking-[0.15em] mt-1 text-[0.6rem]"
          style={{ color: secondaryColor }}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.5, ease: "easeOut" }}
        >
          Spoken English Classes
        </motion.span>
      </div>
    </motion.div>
  );
};

export const Logo = ({ variant = "horizontal", theme = "light", className = "", onComplete }: LogoProps) => {
  switch (variant) {
    case "symbol":
      return <LogoSymbol theme={theme} className={className} />;
    case "compact":
      return <LogoCompact theme={theme} className={className} />;
    case "animated":
      return <AnimatedLogo theme={theme} className={className} onComplete={onComplete} />;
    case "horizontal":
    default:
      return <LogoHorizontal theme={theme} className={className} />;
  }
};
