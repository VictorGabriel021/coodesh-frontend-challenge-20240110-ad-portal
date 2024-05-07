import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-gray-555555": "#555555",
        "custom-gray-393B3D": "#393B3D",
        "custom-gray-808587": "#808587",
        "custom-gray-848484": "#848484",
        "custom-gray-4E5254": "#4E5254",
        "custom-gray-A1A7AA": "#A1A7AA",
        "custom-purple-652D91": "#652D91",
        "custom-orange-F36C21": "#F36C21",
        "custom-orange-E95808": "#E95808",
        "custom-orange-063D7E": "#063D7E",
      },
    },
  },
  plugins: [],
};
export default config;
