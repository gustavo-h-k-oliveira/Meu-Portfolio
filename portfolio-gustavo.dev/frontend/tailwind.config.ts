import { colors as customColors } from "./src/styles/colors";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...customColors,
      },
    },
  },
  plugins: [],
};

export default config;
