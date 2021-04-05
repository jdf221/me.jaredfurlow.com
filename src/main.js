import "virtual:windi.css";
import "./style.css";

const $darkModeSwitch = document.querySelector(".dark-mode-switch");

$darkModeSwitch.addEventListener(
  "click",
  () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.querySelector("html").classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.querySelector("html").classList.add("dark");
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
  ).then((response) => response.json());

  if (currentTrack.track && currentTrack.artist) {
    $track.textContent = currentTrack.track;
    $track.setAttribute("title", currentTrack.track);
    $artist.textContent = currentTrack.artist;
  }

  if ($track.offsetWidth > $artist.offsetWidth) {
    // Base the animation duration off of the width of the track title
    // Keeps the animation from being too fast on long titles
    $track.style.animationDuration = `${
      Number.parseInt($track.offsetWidth) / 40
    }s`;
    $track.classList.add("marquee");
  }

  const $discordStatus = document.querySelector(".discord-status");

  const discordMember = await fetch(
    "https://discord.com/api/guilds/744420915315605564/widget.json"
  )
    .then((response) => response.json())
    .then((json) => {
      return json?.members?.[0];
    });

  if (discordMember?.id === "0" && discordMember?.username === "Jared") {
    if (["online", "idle"].includes(discordMember?.status)) {
      $discordStatus.textContent = "Online";
    } else {
      $discordStatus.textContent = "Offline";
    }
  } else {
    $discordStatus.textContent = "Offline";
  }
})();

const emojiSelection = [
  "🥰",
  "😍",
  "😊",
  "🥳",
  "🙃",
  "🤠",
  "🐶",
  "🐱",
  "❤️",
  "️🐝",
];
const $secretEmojiContainer = document.querySelector(".secret-emoji-container");
document.querySelector(".secret-emoji-trigger").addEventListener(
  "click",
  () => {
    const selectedEmoji =
      emojiSelection[Math.floor(Math.random() * emojiSelection.length)];
    $secretEmojiContainer.textContent =
      selectedEmoji + $secretEmojiContainer.textContent;

    // Removes oldest emoji every 2.5 seconds
    setTimeout(() => {
      $secretEmojiContainer.textContent = $secretEmojiContainer.textContent.slice(
        0,
        -selectedEmoji.length
      );
    }, 2500);
  },
  false
);
