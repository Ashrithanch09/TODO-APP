/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light': {
        vlgb: "hsl(236, 33%, 92%)",
        lgb: "hsl(233, 11%, 84%)",
        dgb: "hsl(236, 9%, 61%)",
        vdgb: "hsl(235, 19%, 35%)",
        vlg: "hsl(0, 0%, 98%)",
      },
      'dark': {
        vdb: "hsl(235, 21%, 11%)",
        vdsb: "hsl(235, 24%, 19%)",
        lgb: "hsl(234, 39%, 85%)",
        dgb: "hsl(234, 11%, 52%)",
        vdgb: "hsl(233, 14%, 35%)",
        vdgb: "hsl(237, 14%, 26%)",
      },
      hover: {
        lgb: "hsl(236, 33%, 92%)"
      },
      'gradient': {
        from: 'hsl(192, 100%, 67%) ',
        to: 'hsl(280, 87%, 65%)'
      },
      "brightBlue": "hsl(220, 98%, 61%)",

    },
    fontWeight: {
      normal: '400',
      bold: '700'
    }
  },
  plugins: [],
}
