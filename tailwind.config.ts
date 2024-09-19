/* eslint-disable global-require */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "pastel-red-400": "#e57373",
        "pastel-blue-400": "#64b5f6",
        "pastel-green-400": "#81c784",
        "pastel-yellow-400": "#fff176",
        "pastel-red-500": "#ef5350",
        lightbg: "#F7FCFC",
        malibu: {
          "50": "#f1f8fe",
          "100": "#e2f0fc",
          "200": "#bee0f9",
          "300": "#78c1f3",
          "400": "#44aaec",
          "500": "#1c90db",
          "600": "#0e72bb",
          "700": "#0d5a97",
          "800": "#0f4e7d",
          "900": "#124168",
          "950": "#0c2945",
        },
        froly: {
          "50": "#fef2f2",
          "100": "#fde6e6",
          "200": "#fbd0d3",
          "300": "#f8a9af",
          "400": "#f37783",
          "500": "#ea495d",
          "600": "#d62846",
          "700": "#b41c3a",
          "800": "#971a37",
          "900": "#811a35",
          "950": "#480918",
        },
        "shuttle-gray": {
          "50": "#f4f6f7",
          "100": "#e3e7ea",
          "200": "#cad2d7",
          "300": "#a5b1bb",
          "400": "#798997",
          "500": "#5e6e7c",
          "600": "#4f5b68",
          "700": "#454e59",
          "800": "#3e444c",
          "900": "#373b42",
          "950": "#22252a",
        },
        purple: "#B59CBB",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
