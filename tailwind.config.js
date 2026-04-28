/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'joyzen-orange': '#ef8f60',
        'joyzen-cream': '#FAF8F1',
      },
      fontFamily: {
        satoshi: ["'Satoshi'", '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
        epilogue: ["'Epilogue'", 'sans-serif'],
      },
      spacing: {
        'nav-height': '50px',
        'logo-height': '40px',
      },
      aspectRatio: {
        'products': '53 / 20',
      },
      borderRadius: {
        'nav': '30px',
        'btn': '42px',
        'card': '24px',
        'circle': '224px',
      },
      boxShadow: {
        'soft': '0px 2px 10px rgba(0, 0, 0, 0.1)',
        'nav': '0 2px 20px rgba(0, 0, 0, 0.10)',
      },
      letterSpacing: {
        'tight-sm': '-0.216px',
        'tight': '-0.56px',
      },
    },
  },
  plugins: [],
}
