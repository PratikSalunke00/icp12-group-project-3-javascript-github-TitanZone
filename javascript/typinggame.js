const quotes = [
  "The quick brown fox jumps over the lazy dog Typing games are fun and useful"

]
const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const startBtn = document.getElementById("startBtn");
const saveBtn = document.getElementById("saveBtn");
const scoresEl = document.getElementById("scores");

let startTime, timer, wordTimer, currentQuote, words, currentIndex;
let leaderboard = JSON.parse(localStorage.getItem("typingScores")) || [];
let timePerWord = 5;

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function startGame() {
  currentQuote = randomQuote();
  words = currentQuote.split(" ");
  currentIndex = 0;

  quoteEl.textContent = words[currentIndex];
  inputEl.value = "";
  inputEl.disabled = false;
  inputEl.focus();

  startTime = new Date();
  timeEl.textContent = 0;
  wpmEl.textContent = 0;

  clearInterval(timer);
  clearInterval(wordTimer);


  timer = setInterval(() => {
    timeEl.textContent = Math.floor((new Date() - startTime) / 1000);
  }, 1000);

  startWordTimer();
}

function startWordTimer() {
  let timeLeft = timePerWord;
  updateQuoteDisplay(timeLeft);

  clearInterval(wordTimer);
  wordTimer = setInterval(() => {
    timeLeft--;
    updateQuoteDisplay(timeLeft);
    if (timeLeft <= 0) {
      gameOver(false);
    }
  }, 1000);
}

function updateQuoteDisplay(timeLeft) {
  quoteEl.textContent = `${words[currentIndex]}  ⏳(${timeLeft}s)`;
}

function checkWord(e) {
  if (e.key === "Enter") {
    let typed = inputEl.value.trim();
    if (typed === words[currentIndex]) {
      currentIndex++;
      inputEl.value = "";

      if (currentIndex < words.length) {
        quoteEl.textContent = words[currentIndex];
        startWordTimer();
      } else {
        gameOver(true);
      }
    } else {
      gameOver(false);
    }
  }
}

function gameOver(success) {
  clearInterval(timer);
  clearInterval(wordTimer);
  inputEl.disabled = true;

  if (success) {
    let elapsed = Math.floor((new Date() - startTime) / 1000);
    let wordCount = words.length;
    let wpm = Math.round((wordCount / elapsed) * 60);
    wpmEl.textContent = wpm;
    quoteEl.textContent = `✅ Well done! You typed the whole sentence with a speed of ${wpm} WPM.`;
  } else {
    let elapsed = Math.floor((new Date() - startTime) / 1000);
    let wordCount = currentIndex;
    let wpm = wordCount > 0 ? Math.round((wordCount / elapsed) * 60) : 0;
    wpmEl.textContent = wpm;
    quoteEl.textContent = `❌ Game Over! Your score is ${wpm} WPM.`;
  }
}

function saveScore() {
  let wpm = parseInt(wpmEl.textContent);
  if (wpm === 0) return alert("Finish typing first!");
  let name = prompt("Enter your name:");
  if (!name) return;
  leaderboard.push({ name, wpm });
  leaderboard.sort((a, b) => b.wpm - a.wpm);
  leaderboard = leaderboard.slice(0, 5);
  localStorage.setItem("typingScores", JSON.stringify(leaderboard));
  showScores();
}