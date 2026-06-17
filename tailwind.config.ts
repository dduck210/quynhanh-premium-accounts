import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury palette — use as bg-lux-void, text-lux-gold, etc.
        lux: {
          void:     "#FDF5F9",
          obsidian: "#FBEEF3",
          carbon:   "#F3C4D6",
          graphite: "#E69AB8",
          charcoal: "#D9A8C0",
          gold:     "#8E5070",
          "gold-light": "#E69AB8",
          "gold-dim":   "#B07C97",
          cream:    "#8E5070",
          ivory:    "#7A5068",
          silver:   "#7A5068",
          smoke:    "#E69AB8",
        },
      },
      fontFamily: {
        display: ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
        label:   ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
        sans:    ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
      },
      animation: {
        "fade-in":        "fadeIn 0.7s ease-out both",
        "slide-up":       "slideUp 0.7s cubic-bezier(.25,.46,.45,.94) both",
        "slide-up-slow":  "slideUp 1s cubic-bezier(.25,.46,.45,.94) both",
        "scale-in":       "scaleIn 0.5s cubic-bezier(.25,.46,.45,.94) both",
        "scale-reveal":   "scaleReveal 0.6s cubic-bezier(.25,.46,.45,.94) both",
        "gold-shimmer":   "goldShimmer 4s linear infinite",
        "glow-pulse":     "glowPulse 3s ease-in-out infinite",
        "float-luxury":   "floatLuxury 5s ease-in-out infinite",
        "line-expand":    "lineExpand 0.8s cubic-bezier(.25,.46,.45,.94) both",
        "count-up":       "countUp 0.5s ease-out both",
        "reveal-up":      "revealUp 0.8s cubic-bezier(.25,.46,.45,.94) both",
        "ticker":         "ticker 28s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.94)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        scaleReveal: {
          from: { opacity: "0", transform: "scale(0.96) translateY(12px)" },
          to:   { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        goldShimmer: {
          "0%":   { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "300% center" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(142,80,112,0.2)" },
          "50%":      { boxShadow: "0 0 40px rgba(142,80,112,0.45)" },
        },
        floatLuxury: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-9px)" },
        },
        lineExpand: {
          from: { transform: "scaleX(0)", opacity: "0" },
          to:   { transform: "scaleX(1)", opacity: "1" },
        },
        countUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        revealUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
};

export default config;
