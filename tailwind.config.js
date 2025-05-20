/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        iPad: '991px', // 👈 Your custom breakpoint
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'themeBlue': '#00477B',
        'themeSky': '#4294E2',
        'themeSeaGreen': '#51D6FF',
      },
      fontFamily: {
        'opensans': ['"Open Sans"', 'sans-serif'],
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
