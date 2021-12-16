module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bumpp-grey-main': '#CFCED8',
      "bumpp-white-side-bar": '#F5F5F7',
    }
  },
  plugins: [],
}
