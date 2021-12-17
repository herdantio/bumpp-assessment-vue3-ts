module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "bumpp-grey-main": "#CFCED8",
      "bumpp-white-side-bar": '#F5F5F7',
      "bumpp-blue-txt": "#2C305D",
      "bumpp-your-team-btn": "#DEDEE4",
      "bumpp-search-placeholder": "#565656"
    }
  },
  plugins: [],
}
