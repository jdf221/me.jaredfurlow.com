import "tailwindcss/tailwind.css";
import "./style.css";

import "typeface-roboto";

const $moonIcon = document.querySelector(".moon-icon");
const $sunIcon = document.querySelector(".sun-icon");
const $darkModeSwitch = document.querySelector(".dark-mode-switch");

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

(async () => {
  const $track = document.querySelector(".spotify-recent-track").children[0]
    .children[0];
  const $artist = document.querySelector(".spotify-recent-track").children[1];

  const currentTrack = await fetch(
    "https://api.jdf2.org/getMostRecentSpotifyTrack"
  ).then((res) => res.json());

  if (currentTrack.track && currentTrack.artist) {
    $track.innerText = currentTrack.track;
    $track.setAttribute("title", currentTrack.track);
    $artist.innerText = currentTrack.artist;
  }

  if ($track.offsetWidth > $artist.offsetWidth) {
    // Base the animation duration off of the width of the track title
    // Keeps the animation from being too fast on long titles
    $track.style["animationDuration"] = parseInt($track.offsetWidth) / 40 + "s";
    $track.classList.add("marquee");
  }

  const $discordStatus = document.querySelector(".discord-status");

  const discordMember = await fetch(
    "https://discord.com/api/guilds/744420915315605564/widget.json"
  ).then((res) => res.json()?.members?.[0]);

  if (discordMember?.id === "0" && discordMember?.username === "Jared") {
    if (discordMember?.status === "online") {
      $discordStatus.innerText = "Online";
    } else {
      $discordStatus.innerText = "Offline";
    }
  } else {
    $discordStatus.innerText = "Offline";
  }
})();
