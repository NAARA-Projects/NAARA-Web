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
        customBlack: '#0F0F0F',
        customBlue: '#306FDB',
      },
      fontFamily: {
        lexend: ['Lexend Deca', 'sans-serif'],
        segoe: ['Segoe UI Variable','sans-serif'],
      },
      padding:{
        'custom-padding-173': '173px',
        'custom-padding-77': '77px,'
      },
      fontSize:{
        'custom-size-24': '24px',
        'custom-size-40': '40px',
      },
      spacing:{
        'custom-space-12': '12px',
      },
      borderRadius:{
        'custom-border-rad-51': '51px',
      },
      width:{
        'custom-width-180': '180px',
        'custom-width-575': '575px',
      },
      height:{
        'custom-height-47': '47px',
        'custom-height-64': '64px',
      },
      margin:{
        'custom-margin-77': '77px',
        'custom-margin-173': '173px',
        'custom-margin-82': '82px',
      }
    },
  },
  plugins: [],
};
export default config;
