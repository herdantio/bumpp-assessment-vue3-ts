module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        "bumpp-grey-main": "#CFCED8",
        "bumpp-white-side-bar": '#F5F5F7',
        "bumpp-blue-txt": "#2C305D",
        "bumpp-your-team-btn": "#DEDEE4",
        "bumpp-search-placeholder": "#565656",
        "bumpp-table-white": "#FFFFFF",
        "bumpp-modal-start": "#E0F4FF",
        "bumpp-modal-end": "#BABFCE",
        "bumpp-modal-placeholder": "#A6A6A6",
        "bumpp-modal-btn": "#FF5359",
      }
    },
    
  },
  plugins: [],
}
