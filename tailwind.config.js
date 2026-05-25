/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bpn-dark': '#0f172a',
        'bpn-blue': '#1e293b',
        'bpn-orange': '#f97316',
        'bpn-yellow': '#eab308',
        'bpn-light': '#f8fafc',
        'bpn-gray': '#64748b'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px rgba(249, 115, 22, 0.4)',
        'glow-blue': '0 0 30px rgba(15, 23, 42, 0.25)',
        'premium': '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    }
  },
  plugins: [],
}