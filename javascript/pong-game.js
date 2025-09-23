const playerPaddle = document.getElementById('player-paddle');
const computerPaddle = document.getElementById('computer-paddle');
const ball = document.getElementById('ball');
const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');

const upBtn = document.getElementById('up-btn');
const downBtn = document.getElementById('down-btn');

let playerScore = 0;
let computerScore = 0;

let ballX = 292.5;
let ballY = 192.5;
let ballSpeedX = 3;
let ballSpeedY = 3;

let playerPaddleY = 160;
let computerPaddleY = 160;

const paddleSpeed = 5;

function updateGame() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY <= 0 || ballY >= gameBoard.offsetHeight - ball.offsetHeight) {
        ballSpeedY *= -1;
    }

    if (
        (ballX <= playerPaddle.offsetWidth && ballY > playerPaddleY && ballY < playerPaddleY + playerPaddle.offsetHeight) ||
        (ballX >= gameBoard.offsetWidth - ball.offsetWidth - computerPaddle.offsetWidth && ballY > computerPaddleY && ballY < computerPaddleY + computerPaddle.offsetHeight)
    ) {
        ballSpeedX *= -1;
    }

    if (ballX < 0) {
        computerScore++;
        resetBall();
    } else if (ballX > gameBoard.offsetWidth - ball.offsetWidth) {
        playerScore++;
        resetBall();
    }

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
    playerPaddle.style.top = playerPaddleY + 'px';
    computerPaddle.style.top = computerPaddleY + 'px';
    scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    if (ballY < computerPaddleY + computerPaddle.offsetHeight / 2 - 10) {
        computerPaddleY -= paddleSpeed * 0.7; 
    } else if (ballY > computerPaddleY + computerPaddle.offsetHeight / 2 + 10) {
        computerPaddleY += paddleSpeed * 0.7; 
    }

    computerPaddleY = Math.max(0, Math.min(gameBoard.offsetHeight - computerPaddle.offsetHeight, computerPaddleY));

    requestAnimationFrame(updateGame);
}

function resetBall() {
    ballX = 292.5;
    ballY = 192.5;
    ballSpeedX *= -1;
}

upBtn.addEventListener('mousedown', () => movePaddle(-paddleSpeed));
downBtn.addEventListener('mousedown', () => movePaddle(paddleSpeed));

upBtn.addEventListener('mousedown', startMoveUp);
upBtn.addEventListener('mouseup', stopMove);
downBtn.addEventListener('mousedown', startMoveDown);
downBtn.addEventListener('mouseup', stopMove);

let moveInterval;

function startMoveUp() { moveInterval = setInterval(() => movePaddle(-paddleSpeed), 20); }
function startMoveDown() { moveInterval = setInterval(() => movePaddle(paddleSpeed), 20); }
function stopMove() { clearInterval(moveInterval); }

function movePaddle(amount) {
    playerPaddleY += amount;
    playerPaddleY = Math.max(0, Math.min(gameBoard.offsetHeight - playerPaddle.offsetHeight, playerPaddleY));
}

updateGame();