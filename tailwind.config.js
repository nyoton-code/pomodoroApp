/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      normal: '1px',
      wide: '2px',
      wider: '.4px',
      widest: '8px',
      widest: '12px'
    },
    // fontSize: {
    //   sm: ['14px', '20px'],
    //   base: ['16px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px'],
    // },
    extend: {
      colors: {
        "mainbg": "rgb(186, 73, 73)",
        "dark-bg": "rgb(39, 39, 42)",
        "txt-c": "rgb(250, 250, 250)",
        "buttonP": "rgb(0 ,0 ,0 , 0.2)",
        "button-bg": "rgba(255, 255, 255, 0.1)",
        "backgroundWhite": "rgba(255, 255, 255, 0.1)",
        "backgroundDark": " rgb(24 , 24,  27 )",

      },
      backgroundImage: {
        'main-bg': "url('/imgs/one.jpg')",
      },
      width: {
        '0.25': "1px",
      },
      margin: {
        'ml-1/4': '25%',
      }
    },
    plugins: [],
  }
}



// background-color: on the dark