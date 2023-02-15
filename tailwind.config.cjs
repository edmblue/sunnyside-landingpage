/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      variants: {
        fill: ['hover', 'focus'], // this line does the trick
      },
      colors: {
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkDesaturatedCyan: 'hsl(167, 40%, 24%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        darkModerateCyan: 'hsl(168, 34%, 41%)',
        veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
        veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      backgroundImage: {
        'hero-pattern-mobile': "url('./assets/images/mobile/image-header.jpg')",
        'hero-pattern-desktop':
          "url('./assets/images/desktop/image-header.jpg')",
        'transform-pattern-mobile':
          "url('./assets/images/mobile/image-transform.jpg')",
        'transform-pattern-desktop':
          "url('./assets/images/desktop/image-transform.jpg')",
        'stand-out-pattern-mobile':
          "url('./assets/images/mobile/image-stand-out.jpg')",
        'stand-out-pattern-desktop':
          "url('./assets/images/desktop/image-stand-out.jpg')",
        'graphic-design-pattern-mobile':
          "url('./assets/images/mobile/image-graphic-design.jpg')",
        'graphic-design-pattern-desktop':
          "url('./assets/images/desktop/image-graphic-design.jpg')",
        'photography-pattern-mobile':
          "url('./assets/images/mobile/image-photography.jpg')",
        'photography-pattern-desktop':
          "url('./assets/images/desktop/image-photography.jpg')",
      },
    },
  },
  plugins: [],
};
