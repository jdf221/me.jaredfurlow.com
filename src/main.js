import "virtual:windi.css";
import "./style.css";

const $darkModeSwitch = document.querySelector(".dark-mode-switch");

$darkModeSwitch.addEventListener(
  "click",
  () => {
    if (
      localStorage.theme === "dark" ||
      document.querySelector("html").classList.contains("dark")
    ) {
      localStorage.theme = "light";
      document.querySelector("html").classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.querySelector("html").classList.add("dark");
    }
  },
  false
);

const profileImageDateMapping = [
  {
    fromDate: new Date("12/27/1999"),
    toDate: new Date("12/27/1999"),
    imagePath: "/images/jared/jaredBirthday.jpg",
  },
  {
    fromDate: new Date("12/25/1999"),
    toDate: new Date("12/31/1999"),
    imagePath: "/images/jared/jaredSanta.jpg",
  },
];

const todayDate = new Date();
for (const { fromDate, toDate, imagePath } of profileImageDateMapping) {
  fromDate.setFullYear(todayDate.getFullYear());
  toDate.setFullYear(todayDate.getFullYear());
  toDate.setHours(23, 59, 59, 999);

  if (
    fromDate.getTime() <= todayDate.getTime() &&
    todayDate.getTime() <= toDate.getTime()
  ) {
    document.querySelector(".profile-image").src = imagePath;
    break;
  }
}

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

  if ($track.offsetWidth > $track.parentElement.offsetWidth + 1) {
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
  "😷",
  "🐶",
  "🐱",
  "❤️",
  "️🐝",
];
const $secretEmojiContainer = document.querySelector(".secret-emoji-container");
const $secretEmojiFace = document.querySelector(".secret-emoji-face");
function triggerEmojiFun() {
  const selectedEmoji =
    emojiSelection[Math.floor(Math.random() * emojiSelection.length)];
  $secretEmojiContainer.textContent =
    selectedEmoji + $secretEmojiContainer.textContent;
  $secretEmojiFace.textContent = selectedEmoji;

  // Removes the oldest emoji every 2.5 seconds
  setTimeout(() => {
    $secretEmojiContainer.textContent = $secretEmojiContainer.textContent.slice(
      0,
      -selectedEmoji.length
    );

    if ($secretEmojiContainer.textContent.length === 0) {
      $secretEmojiFace.textContent = "";
    }
  }, 2500);
}
document
  .querySelector(".secret-emoji-trigger")
  .addEventListener("click", triggerEmojiFun);

window.fun = triggerEmojiFun;

console.log("%c👋 Hello!", "font-size: 40px;");
console.log(
  "%cWhy're you looking in here? The code is on Github! https://github.com/jdf221/me.jaredfurlow.com",
  "font-size: 15px"
);
console.log(
  "%cSince you're here might as well try running %cfun()",
  "font-size: 12px;",
  "border-radius: 5px; border: 1px solid #BCBEC0; padding: 1.5px;"
);
