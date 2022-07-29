const theme = require('./theme');


module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      ...theme,
      backgroundImage: (theme) => ({
        'hero-mobile': "url('/assets/hero-bg-mobile.png')",
        'hero-desktop': "url('/assets/hero-bg-desktop.png')",
      }),
      ringWidth: {
        3: '3px'
      },
      spacing: {
        1.5: '0.375rem', // 6px
        2.5: '0.625rem', // 10px
        4.5: '1.125rem', // 18px
        5.5: '1.375rem', // 22px
        7.5: '1.875rem', // 30px
        7.8: '2.0625rem', // 33px
        15: '3.75rem', // 60px
      },
      screens: {
        lg: '950px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
