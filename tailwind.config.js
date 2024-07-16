module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['proxima-nova-wide', 'sans-serif'],
        display: ['adventures-unlimited', 'sans-serif'],
        headings: ['richmond-display', 'sans-serif'],
      },
      colors: {
        'main-dark': '#14081B',
        'main-medium': '#9C91A2',
        'main-light': '#F2ECF6',
        pulsar: {
          100: '#F57E88',
          200: '#E84855',
        },
        sintonizar: {
          100: '#F87A4C',
          200: '#F44708',
        },
        resonar: {
          100: '#FFBA77',
          200: '#FAA613',
        },
        armonizar: {
          100: '#5BD69D',
          200: '#26A96C',
        },
        expresar: {
          100: '#5EC5E6',
          200: '#0CAADC',
        },
        sincronizar: {
          100: '#5858DA',
          200: '#2F2FB9',
        },
        amplificar: {
          100: '#14081B',
          200: '#7848BF',
        },
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate3d(0, 15px, 0)' },
          '100%': { transform: 'translate3d(0, -15px, 0)' },
        },
        hoverEffect: {
          '0%': { transform: 'rotate3d(1, 2.0, 3.0, -20deg) scale(1)' },
          '100%': { transform: 'rotate3d(1, 2.0, 3.0, 20deg) scale(1.1)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out alternate infinite',
        hoverEffect: 'hoverEffect 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};