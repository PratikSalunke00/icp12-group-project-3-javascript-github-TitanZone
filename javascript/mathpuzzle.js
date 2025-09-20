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
