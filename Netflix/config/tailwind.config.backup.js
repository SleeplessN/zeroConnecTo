const theme = require('./theme');

module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-mobile': "url('/assets/hero-bg-mobile.png')",
        'hero-desktop': "url('/assets/hero-bg-desktop.png')",
      }),
      colors: {
        White: '#ffffff',
        Black: '#010101',
        'Red/100': '#faced0',
        'Red/200': '#f59da1',
        'Red/300': '#ef6b72',
        'Red/400': '#ea3a43',
        'Red/500': '#e50914',
        'Red/600': '#b70710',
        'Red/700': '#89050c',
        'Red/800': '#5c0408',
        'Red/900': '#2e0204',
        'Blue/100': '#cce3fb',
        'Blue/200': '#99c6f7',
        'Blue/300': '#66aaf3',
        'Blue/400': '#338def',
        'Blue/500': '#0071eb',
        'Blue/600': '#005abc',
        'Blue/700': '#00448d',
        'Blue/800': '#002d5e',
        'Blue/900': '#00172f',
        'Green/100': '#d5f8e3',
        'Green/200': '#acf2c8',
        'Green/300': '#82ebac',
        'Green/400': '#58e590',
        'Green/500': '#2ede75',
        'Green/600': '#25b25d',
        'Green/700': '#1c8546',
        'Green/800': '#13592f',
        'Green/900': '#092c17',
        'Gray/100': '#e3e3e3',
        'Gray/200': '#c8c8c8',
        'Gray/300': '#acacac',
        'Gray/400': '#919191',
        'Gray/500': '#757575',
        'Gray/600': '#5e5e5e',
        'Gray/700': '#464646',
        'Gray/800': '#2f2f2f',
        'Gray/900': '#171717',
      },
      fontSize: {
        '3xs': '0.75rem', // 12px
        '2xs': '0.8125rem', // 13px
        xs: '0.875rem', // 14px
        sm: '0.9375rem', // 15px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.375rem', // 22px
        '3xl': '1.5rem', // 24px
        '4xl': '1.75rem', // 28px;
        '5xl': '1.875rem', // 30px
        '6xl': '2.125rem', // 34px
        '7xl': '3rem', // 48px
        '8xl': '3.75rem', // 60px
      },
      fontFamily: {
        spoqahansans: 'Spoqa Han Sans Neo',
      },
      boxShadow: {
        'Text Shadow (Paragraph)': '0px 2px 6px 0px rgba(0,0,0,0.55)',
        outline: 'box-shadow: 0 0 0 4px #1c8546;',
      },
      borderRadius: {
        none: '0',
        xs: '0.125rem', // 2px
        sm: '0.1875rem', // 3px
        default: '0.25rem', // 4px
        lg: '0.3125rem', // 5px
        xl: '0.4375rem', // 6px
        '2xl': '0.6833604574203491rem', // 11px
        '3xl': '0.75rem', // 12px
        '4xl': '1.875rem', // 30px
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
