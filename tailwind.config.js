module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      colors: {
        "bluelight-500": "#E3EAF8",
        "pinklight-500": "#FCE7F6",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
