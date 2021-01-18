import "tailwindcss/tailwind.css";
import "./style.css";

import "typeface-roboto";

const $moonIcon = document.querySelector(".moonIcon");
const $sunIcon = document.querySelector(".sunIcon");
const $darkModeSwitch = document.querySelector(".darkModeSwitch");

$darkModeSwitch.addEventListener(
  "click",
  () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.querySelector("html").classList.remove("dark");
      $moonIcon.style.display = "inline";
      $sunIcon.style.display = "none";
    } else {
      localStorage.theme = "dark";
      document.querySelector("html").classList.add("dark");
      $moonIcon.style.display = "none";
      $sunIcon.style.display = "inline";
    }
  },
  false
);
