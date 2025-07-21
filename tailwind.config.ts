import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Courier New"', "monospace"],
        sans: ["Inter", "sans-serif"],
        sora: ['"Sora"', "sans-serif"],
      },
      colors: {
        primary: "#F4B63F",
        dark: "#0A0A0A",
      },
      boxShadow: {
        card: "0px 2px 0px 0px #AC832D",
      },
      backgroundImage: {
        grid: "url('/grid.svg')",
        spotlight:
          "radial-gradient(circle at 30% 20%, rgba(0,255,195,0.15), transparent 60%), radial-gradient(circle at 70% 80%, rgba(190,100,255,0.2), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
