/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
    colors: {
        primary: {
            100: '#0c375b',
            200: '#FFFFFF'
        },
        secondary: {
            100: '#e9edf0',
            200: '#d0d7de',
            300: '#b9c3cd',
            400: '#a2afbc'
        }

    },
    fontFamily: {
        sans: ['Assistant', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
    },
    backgroundImage: {
        'csc_ast': "url('public/img/csc_ast.png')",
    },
    borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '16': '3rem',
        'top': '3rem',
        'left': '13rem',
    }
},
  plugins: [],
}
