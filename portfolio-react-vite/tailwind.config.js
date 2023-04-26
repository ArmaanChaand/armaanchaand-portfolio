/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark": "#202124",
      },
      fontFamily:{
        Arizonia:['Arizonia', 'cursive'],
      },
      keyframes:{
        load_width:{
          '0%': {width:'0%'},
          '100%': {width:'100%'},
        },
        fade_in_right:{
          '0%': {transform:'translateX(-20%)'},
          '100%': {transform:'translateX(0%)'},
        },
        fade_in_left:{
          '0%': {transform:'translateX(20%)'},
          '100%': {transform:'translateX(0%)'},
        },
        fade_in_up:{
          '0%': {transform:'translateY(20%)'},
          '100%': {transform:'translateY(0%)'},
        },
        fade_in_down:{
          '0%': {transform:'translateY(-20%)'},
          '100%': {transform:'translateY(0%)'},
        },
        slide_in_right:{
          '0%': {transform:'translateX(-100%)'},
          '100%': {transform:'translateX(0%)'},
        },
        slide_in_left:{
          '0%': {transform:'translateX(100%)'},
          '100%': {transform:'translateX(0%)'},
        },
        rotate_360:{
          '0%': {rotate:'initial'},
          '100%': {rotate:'360deg'},
        },
      },
      animation:{
        load_width: 'load_width 300ms ease-in-out 1 forwards',
        fade_in_right: 'fade_in_right 300ms ease-in-out 1 both',
        fade_in_left: 'fade_in_left 300ms ease-in-out 1 forwards',
        fade_in_up: 'fade_in_up 300ms ease-in-out 1 forwards',
        fade_in_down: 'fade_in_down 300ms ease-in-out 1 forwards',
        slide_in_right: 'slide_in_right 300ms ease-in-out 1 forwards',
        slide_in_left: 'slide_in_left 300ms ease-in-out 1 forwards',
        rotate_360: 'rotate_360 180s linear infinite forwards',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

