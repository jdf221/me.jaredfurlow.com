module.exports = {
  purge: ["index.html", "src/**/*.html", "src/**/*.css", "src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "kinda-black": "#1A1A1A",
        "kinda-white": "#EAEFF4",
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
