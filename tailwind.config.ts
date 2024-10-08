import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "40rem", // 640px
        md: "48rem", // 768px
        lg: "64rem", // 1024px
        xl: "80rem", // 1280px
        "2xl": "96rem", // 1536px
        "3xl": "112rem", // 1792px
      },
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
      spacing: {
        xs: "0.128em",
        s: "0.272em",
        m: "0.618em",
        l: "1em",
        xl: "1.618em",
        xxl: "2.618em",
      },
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
