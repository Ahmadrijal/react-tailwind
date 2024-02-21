/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',
],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDgrey': '#4D4D4D',
        'brandPrimary': '#4CAF4F',
        'brandPrimaryshade': '#388E3B',
        'brandPrimaryshade5': '#103E13',
        'neutralGrey': '#717171',
        'heroBackground': '#C8E6C9',
        'backicon': '#E8F5E9',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

