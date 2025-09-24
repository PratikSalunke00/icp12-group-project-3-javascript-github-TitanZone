const words = ["javascript", "responsive", "simple", "coding", "computer", "program", "button", "color", "design", "mobile"];
let currentWord = "";
let scrambled = "";
let score = 0;

const scrambledWordEl = document.getElementById("scrambledWord");
const guessInput = document.getElementById("guess");
const messageEl = document.getElementById("message");
const scoreEl = document.getElementById("score");
const popupEl = document.getElementById("popup");

function scrambleWord(word) {
    let arr = word.split("");
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
}

function newWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambled = scrambleWord(currentWord);
    scrambledWordEl.textContent = scrambled;
    guessInput.value = "";
    messageEl.textContent = "";
}

function showPopup() {
    popupEl.classList.add("show");
    setTimeout(() => { popupEl.classList.remove("show"); }, 1500);
}

function checkWord() {
    const guess = guessInput.value.trim().toLowerCase();
    if (!guess) return;
    if (guess === currentWord) {
        messageEl.style.color = "green";
        messageEl.textContent = "Correct! 🎉";
        score++;
        scoreEl.textContent = score;
        showPopup();
        setTimeout(newWord, 1500);
    } else {
        messageEl.style.color = "red";
        messageEl.textContent = `Wrong! The correct word was: ${currentWord}`;
    }
}

document.getElementById("check").addEventListener("click", checkWord);
document.getElementById("newWord").addEventListener("click", newWord);
guessInput.addEventListener("keydown", (e) => { if (e.key === "Enter") checkWord(); });


newWord();
