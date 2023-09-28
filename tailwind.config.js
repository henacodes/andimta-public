/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "orange-accent": "#ff5f00",
        "blue-black": "#040c2c",
        "blue-grey": "#222945",
      },
    },
  },
  plugins: [require("daisyui")],
};
