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
        userLime: "hsl(61, 70%, 52%)",
        userRed: "hsl(4, 69%, 50%)",
        userSlate100: "hsl(202, 86%, 94%)",
        userSlate300: "hsl(203, 41%, 72%)",
        userSlate500: "hsl(200, 26%, 54%)",
        userSlate700: "hsl(200, 24%, 40%)",
        userSlate900: "hsl(202, 55%, 16%)",
      },
    },
  },
  plugins: [],
};
export default config;
