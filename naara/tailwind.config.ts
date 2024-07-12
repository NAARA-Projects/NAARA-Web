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
        'custom-padding-77': '77px,',
        'custom-padding-89': '89px',
        'custom-padding-88': '88px',
        'custom-padding-44': '44px',
        'custom-padding-45': '45px',
        'custom-padding-36': '36px,'
      },
      fontSize:{
        'custom-size-24': '24px',
        'custom-size-40': '40px',
        'custom-size-20': "20px"
      },
      spacing:{
        'custom-space-12': '12px',
      },
      borderRadius:{
        'custom-border-rad-51': '51px',
        'custom-border-rad-35': '35px',
        'custom-border-rad-69': '69px',
      },
      width:{
        'custom-width-180': '180px',
        'custom-width-575': '575px',
        'custom-width-100': '100px',
        'custom-width-400': '500px',
        'custom-width-350': '350px',
      },
      height:{
        'custom-height-47': '47px',
        'custom-height-64': '64px',
        'custom-height-27': '27px',
        'custom-height-300': '300px',
      },
      margin:{
        'custom-margin-77': '77px',
        'custom-margin-173': '173px',
        'custom-margin-82': '82px',
        'custom-margin-89': '89px',
        'custom-margin-40': '40px',
      },
      gap:{
        'custom-gap-16': '16px',
        'custom-gap-20': '20px',
        'custom-gap-15': '15px',
        'custom-gap-12': '12px',
        'custom-gap-51': '51px',
        'custom-gap-100': '100px',
      }
    },
  },
  plugins: [],
};
export default config;
