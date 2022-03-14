module.exports = {
  content: ['src/*.{js,php}'],

  theme: {
    extend: {
      fontFamily: {
        'Montserrat' : ["'Montserrat'", 'sans-serif']
      },
      height: {
        '32': '450px',
      },
      width: {
        '450': '450px',
        '880': '880px'
      },
      maxWidth: {
        '880': '880px;'
      },
      colors: {
        'mth-yellow': '#ffff97',
      },
    },
  },
  plugins: [ 
    require('@tailwindcss/forms'),
  ],
}
