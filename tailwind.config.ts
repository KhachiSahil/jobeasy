import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f8f8",
        foreground: "var(--foreground)",
        MainText: "#0e0d0d"
      },
    },
  },
  plugins: [],
} satisfies Config;
