const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: `var(--color-primary-50, ${colors.red[50]})`,
          100: `var(--color-primary-100, ${colors.red[100]})`,
          200: `var(--color-primary-200, ${colors.red[200]})`,
          300: `var(--color-primary-300, ${colors.red[300]})`,
          400: `var(--color-primary-400, ${colors.red[400]})`,
          500: `var(--color-primary-500, ${colors.red[500]})`,
          600: `var(--color-primary-600, ${colors.red[600]})`,
          700: `var(--color-primary-700, ${colors.red[700]})`,
          800: `var(--color-primary-800, ${colors.red[800]})`,
          900: `var(--color-primary-900, ${colors.red[900]})`,
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      padding: {
        '1/2-screen': '50vh',
      },
      height: {
        '1/2-screen': '50vh'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  variants: {
    // borderRadius: ['before'],
    backgroundColor: ['focus', 'hover', 'active', 'before', 'even'],
    backgroundPosition: ['before'],
    backgroundSize: ['before'],
    // display: ['responsive', 'before'],
    empty: ['before', 'after'],
    inset: ['before', 'after'],
    opacity: ['hover', 'before'],
    position: ['before', 'after'],
    // rotate: ['before'],
    // scale: ['hover', 'focus', 'before'],
    width: ['before', 'after', 'responsive'],
    height: ['before', 'after'],
    // transformOrigin: ['before'],
    zIndex: ['before', 'after'],
  },
  plugins: [
    require('tailwindcss-pseudo')(),
  ],
};
