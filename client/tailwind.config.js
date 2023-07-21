const spacer = 0.0625;
const spacers = {
  0: '0'
};
for (let i = 1; i <= 200; i++) {
  spacers[i] = `${i * spacer}rem`;
}
spacers[251] = '15.6875rem';
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media'
  content: [
    // "./node_modules/flowbite-react/**/*.js",
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      xs: { min: '475px' }, // => @media (min-width: 475px) { ... }
      sm: { min: '640px' }, // => @media (min-width: 640px) { ... }
      md: { min: '768px' }, // => @media (min-width: 768px) { ... }
      lg: { min: '1024px' }, // => @media (min-width: 1024px) { ... }
      xl: { min: '1280px' }, // => @media (min-width: 1280px) { ... }
      '2xl': { min: '1536px' } // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem'
      }
    },
    colors: {
      primary: '#0a192f',
      primaryLight: '#112240',
      navyLight: '#233554',
      secondary: '#64ffda',
      textPrimary: '#8892b0',
      textSecondary: '#ccd6f6',
      'white-transparent': 'rgba(255, 255, 255, 0.08)',
      'neutral-gray': '#64627A'
    },
    backgroundImage: {
      none: 'none',
      'gradient-tertiary': 'linear-gradient(258.27deg, #DD4BE0 0%, #5B3199 100%)'
    },
    fontFamily: {
      sans: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      serif: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace']
    },
    spacing: spacers,
    space: ({ theme }) => ({
      ...theme('spacing')
    }),
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500
      // classes: ['bounce', 'heartBeat']
    },
    extend: {
      transitions: {
        default: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)'
      }
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px'
          },
          '@screen md': {
            maxWidth: '768px'
          },
          '@screen lg': {
            maxWidth: '1024px'
          },
          '@screen xl': {
            maxWidth: '1344px'
          },
          '@screen 2xl': {
            maxWidth: '1344px'
          }
        }
      });
    }
  ]
};
