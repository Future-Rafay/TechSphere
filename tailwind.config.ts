import type { Config } from "tailwindcss";
import themeColors from "./src/theme/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Use our theme colors
        primary: themeColors.primary,
        secondary: themeColors.secondary,
        accent: themeColors.accent,
        success: themeColors.success,
        error: themeColors.error,
        warning: themeColors.warning,
        info: themeColors.info,
        // Background colors
        bg: {
          light: themeColors.background.light,
          dark: themeColors.background.dark,
          card: {
            light: themeColors.background.card.light,
            dark: themeColors.background.card.dark,
          },
          input: {
            light: themeColors.background.input.light,
            dark: themeColors.background.input.dark,
          },
          hover: {
            light: themeColors.background.hover.light,
            dark: themeColors.background.hover.dark,
          },
        },
        // Text colors
        text: {
          primary: {
            light: themeColors.text.primary.light,
            dark: themeColors.text.primary.dark,
          },
          secondary: {
            light: themeColors.text.secondary.light,
            dark: themeColors.text.secondary.dark,
          },
          muted: {
            light: themeColors.text.muted.light,
            dark: themeColors.text.muted.dark,
          },
        },
        // Border colors
        border: {
          light: themeColors.border.light,
          dark: themeColors.border.dark,
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
