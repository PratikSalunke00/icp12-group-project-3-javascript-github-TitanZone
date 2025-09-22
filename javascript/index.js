const topgameimgs = [
  "images/tic-tac-toe.jpg",
  "images/tic-tac-toe.jpg",
  "images/tic-tac-toe.jpg",
  "images/tic-tac-toe.jpg",
  "images/tic-tac-toe.jpg",
  "images/tic-tac-toe.jpg"
];

const topgamelinks = [
  "./pages/tic-tac-toe-game.html",
  "./pages/tic-tac-toe-game.html",
  "./pages/tic-tac-toe-game.html",
  "./pages/tic-tac-toe-game.html",
  "./pages/tic-tac-toe-game.html",
  "./pages/tic-tac-toe-game.html"
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
  "images/tic-tac-toe.jpg",
  "images/tic-tac-toe.jpg",
  "images/tic-tac-toe.jpg",
  "images/tic-tac-toe.jpg",
  "images/tic-tac-toe.jpg",
  "images/tic-tac-toe.jpg"
];

const risegamelinks = [
  "./pages/tic-tac-toe-game.html",
  "./pages/tic-tac-toe-game.html",
  "./pages/tic-tac-toe-game.html",
  "./pages/tic-tac-toe-game.html",
  "./pages/tic-tac-toe-game.html",
  "./pages/tic-tac-toe-game.html"
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



document.getElementById("top-btn").addEventListener("click", function() {
    document.getElementById("top-games-container").scrollIntoView(
        {
            behavior:"smooth"
        }
    );
});

document.getElementById("rise-btn").addEventListener("click", function() {
    document.getElementById("rise-games-container").scrollIntoView(
        {
            behavior:"smooth"
        }
    );
});




document.getElementById('site-year').textContent = new Date().getFullYear();



const pages= document.getElementById("pages");
let isOpen = false;

function showPages() {
    pages.style.display="flex";
    isOpen = true;
}

function hidepages() {
        pages.style.display="none";
    isOpen = false;
} 

function toggleHamburger() {
    if(isOpen) {
        hidepages();
    } else {
        showPages();
    }
}