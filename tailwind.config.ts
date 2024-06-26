import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#498F7E",
      },
      textColor: {
        primary: "#498F7E"
      },
      backgroundColor : {
        primary: "#498F7E",
        primaryDark: "#2F6F5F",
        secondary: "#C8C8C8",
        secondaryDark: "#949494"
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '224': '56rem',
        '256': '64rem',
      },
      boxShadow: {
        'about': '15 15px 15px -15px rgba(0, 0, 0, 0.3)',
      },
      borderColor : {
        'primary' : "#498F7E",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
