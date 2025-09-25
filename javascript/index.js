const topgameimgs = [
  "images/simon-game-img.jpg",
  "images/snake-game-img.jpg",

  "images/game-2048-img.avif",
];

const topgamelinks = [
  "./pages/simon-says.html",
  "./pages/snake-game.html",
  "./pages/2048-game.html",
];

const loadtopgames = () => {
  const gamesList = document.getElementById("topgames");

  for (let i = 0; i < topgameimgs.length; i++) {
    topgames.innerHTML += `
      <div class="game">
        <a href="${topgamelinks[i]}"><img src="${topgameimgs[i]}" class="game-img"></a>
      </div>`;
  }
};

loadtopgames();

const risegameimgs = [
  "images/traffic-game-img.jpg",
  "images/math-game.jpg",
  "images/trex.jpg",
  "images/dice-roller.jpg",
  "images/tic-tac-toe.jpg",
  "images/football-img.png"
];

const risegamelinks = [
  "./pages/traffic-game.html",
  "./pages/mathpuzzle.html",
  "https://chrome-trex-game1.netlify.app/",
  "./pages/roll-dice-game.html",
  "./pages/tic-tac-toe-game.html",
  "https://2-player-football.netlify.app/"
];

const loadrisegames = () => {
  const gamesList = document.getElementById("risegames");

  for (let i = 0; i < risegameimgs.length; i++) {
    risegames.innerHTML += `
      <div class="game">
        <a href="${risegamelinks[i]}"><img src="${risegameimgs[i]}" class="game-img"></a>
      </div>`;
  }
};

loadrisegames();

const epicgameimgs = [
  "images/emoji-catch.png",
  "images/typings-game.webp",
  "images/stone-paper.jpg",
  "images/guess-the-number.jpg",
  "images/hard-2d.jpg",
  "images/fruit-ninja.jpg",
  "images/word-game.jpg"
];

const epicgamelinks = [
  "./pages/emoji-Catcher-game.html",
  "./pages/typinggame.html",
  "./pages/stone-paper-scissor.html",
  "./pages/guess-the-number-game.html",
  "https://hardest-2d-game.netlify.app/",
  "https://fruit-ninja-game1.netlify.app/",
  "pages/wordgame.html"
]; 

const loadepicgames = () => {
  const gamesList = document.getElementById("epicgames");

  for (let i = 0; i < epicgameimgs.length; i++) {
    gamesList.innerHTML += `
      <div class="game">
        <a href="${epicgamelinks[i]}"><img src="${epicgameimgs[i]}" class="game-img"></a>
      </div>`;
  }
};

loadepicgames();

document.getElementById("top-btn").addEventListener("click", function () {
  document.getElementById("top-games-container").scrollIntoView(
    {
      behavior: "smooth"
    }
  );
});

document.getElementById("rise-btn").addEventListener("click", function () {
  document.getElementById("rise-games-container").scrollIntoView(
    {
      behavior: "smooth"
    }
  );
});

document.getElementById("epic-btn").addEventListener("click", function () {
  document.getElementById("epic-games-container").scrollIntoView(
    {
      behavior: "smooth"
    }
  );
});

document.getElementById('site-year').textContent = new Date().getFullYear();

const pages = document.getElementById("pages");
let isOpen = false;

function showPages() {
  pages.style.display = "flex";
  isOpen = true;
}

function hidepages() {
  pages.style.display = "none";
  isOpen = false;
}

function toggleHamburger() {
  if (isOpen) {
    hidepages();
  } else {
    showPages();
  }
}