module.exports = {
  purge: ["index.html", "src/**/*.html", "src/**/*.css", "src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        test: "#1A1A1A",
        shirt: "#BA8480",
      },
      screens: {
        portrait: { raw: "(orientation: portrait)" },
        landscape: { raw: "(orientation: landscape)" },
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
      borderColor: ["dark"],
      borderWidth: ["hover"],
    },
  },
  plugins: [],
};
