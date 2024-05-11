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
        "custom-gray-3A3A3A": "#3A3A3A",
        "custom-gray-393B3D": "#393B3D",
        "custom-gray-808587": "#808587",
        "custom-gray-848484": "#848484",
        "custom-gray-4E5254": "#4E5254",
        "custom-gray-A1A7AA": "#A1A7AA",
        "custom-gray-C0C7CA": "#C0C7CA",
        "custom-gray-D0D5D8": "#D0D5D8",
        "custom-white-F1F4F6": "#F1F4F6",
        "custom-white-F7F9FA": "#F7F9FA",
        "custom-purple-652D91": "#652D91",
        "custom-purple-8224CB": "#8224CB",
        "custom-orange-ED672B": "#ED672B",
        "custom-orange-F36C21": "#F36C21",
        "custom-orange-E95808": "#E95808",
        "custom-blue-E3E7EC": "#E3E7EC",
        "custom-blue-063D7E": "#063D7E",
        "custom-blue-2362AF": "#2362AF",
        "custom-blue-1C2A39": "#1C2A39",
        "custom-blue-48617E": "#48617E",
      },
    },
  },
  plugins: [],
};
export default config;
