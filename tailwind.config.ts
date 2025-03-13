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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleFade: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.4s ease-out',
        'scale-fade': 'scaleFade 0.5s ease-out forwards',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
