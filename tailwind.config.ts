import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideInDown: {
          from: {
            transform: 'translate3d(0, -100%, 0)',
            visibility: 'visible',
          },
          to: {
            transform: 'translateZ(0)',
          },
        },
        slideIn: {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(-20%)',
          },
        },
        slideOut: {
          from: {
            transform: 'translateX(-20%)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
        bouncey: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-30px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        bouncex: {
          '0%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(30px)',
          },
          '100%': {
            transform: 'translatex(0)',
          },
        },
      },
      animation: {
        animateSlideInDown: 'slideInDown 1s ease',
        animateslideIn: 'slideIn 1s ease',
        animateslideOut: 'slideOut 1s ease',
        animatebouncey: 'bouncey 1s ease',
        animatebouncex: 'bouncex 1s ease',
      },
    },
  },
  plugins: [],
};
export default config;
