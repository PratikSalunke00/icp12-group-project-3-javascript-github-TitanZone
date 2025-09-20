const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const skipBtn = document.getElementById("skipBtn");
const hintBtn = document.getElementById("hintBtn");
const puzzleDisplay = document.getElementById("puzzleDisplay");
const answerInput = document.getElementById("answerInput");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const timeEl = document.getElementById("timeLeft");
const historyEl = document.getElementById("history");
const leaderboardEl = document.getElementById("leaderboard");
const nameInput = document.getElementById("nameInput");
const saveScoreBtn = document.getElementById("saveScore");

let score = 0;
let streak = 0;
let timeLeft = 30;
let currentAnswer = null;
let timerInterval = null;
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

function generatePuzzle() {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const ops = ["+", "-", "*"];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let question, answer;

  switch (op) {
    case "+":
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case "-":
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case "*":
      question = `${num1} × ${num2}`;
      answer = num1 * num2;
      break;
  }

  puzzleDisplay.textContent = question;
  currentAnswer = answer;
}
function startTimer() {
  timeLeft = 30;
  timeEl.textContent = timeLeft;
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}
function startGame() {
  score = 0;
  streak = 0;
  updateStats();
  historyEl.innerHTML = "";
  generatePuzzle();
  startTimer();
}
function resetGame() {
  clearInterval(timerInterval);
  puzzleDisplay.textContent = "Press Start";
  answerInput.value = "";
  timeEl.textContent = "--";
  score = 0;
  streak = 0;
  updateStats();
  historyEl.innerHTML = "";
}

function endGame() {
  puzzleDisplay.textContent = "Game Over!";
  answerInput.value = "";
  answerInput.disabled = true;
  setTimeout(() => (answerInput.disabled = false), 2000);
}

function checkAnswer() {
  const userAnswer = parseInt(answerInput.value.trim());
  if (isNaN(userAnswer)) return;

  if (userAnswer === currentAnswer) {
    score += 10;
    streak++;
    addHistory(`✅ Correct: ${puzzleDisplay.textContent} = ${userAnswer}`);
    generatePuzzle();
  } else {
    score -= 5;
    streak = 0;
    addHistory(`❌ Wrong: ${puzzleDisplay.textContent} ≠ ${userAnswer}`);
  }
  updateStats();
  answerInput.value = "";
}

