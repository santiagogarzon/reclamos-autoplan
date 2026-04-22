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
        navy: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
        },
        primary: {
          DEFAULT: "#1D4ED8",
          hover: "#1E40AF",
          light: "#EFF6FF",
          border: "#BFDBFE",
        },
        wa: {
          DEFAULT: "#25D366",
          hover: "#1DAE56",
        },
        surface: {
          DEFAULT: "#F8FAFC",
          alt: "#F1F5F9",
        },
        text: {
          DEFAULT: "#0F172A",
          muted: "#64748B",
        },
        border: {
          DEFAULT: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
