import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mpg_blue: "var(--mpg-blue)",
        gray_bg: "var(--gray-bg)",
        link_color: "var(--link-color)",
        opw_blue: "var(--opw-blue)",
        opw_hover_gray: "var(--opw-hover-gray)",
        opw_bg_gray: "var(--opw-bg-gray)",
      },
    },
  },
  plugins: [],
} satisfies Config;
