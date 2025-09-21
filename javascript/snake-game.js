
       
        // Game variables
        const canvas = document.getElementById('game-canvas');
        const ctx = canvas.getContext('2d');
        const gridSize = 20;
        const gridWidth = canvas.width / gridSize;
        const gridHeight = canvas.height / gridSize;
        
        let snake = [];
        let food = {};
        let direction = 'right';
        let nextDirection = 'right';
        let score = 0;
        let highScore = localStorage.getItem('snakeHighScore') || 0;
        let gameSpeed = 130;
        let gameRunning = false;
        let gameLoop;
        
        // DOM elements
        const scoreElement = document.getElementById('score');
        const highScoreElement = document.getElementById('high-score');
        const finalScoreElement = document.getElementById('final-score');
        const gameOverElement = document.getElementById('game-over');
        const startBtn = document.getElementById('start-btn');
        const pauseBtn = document.getElementById('pause-btn');
        const resetBtn = document.getElementById('reset-btn');
        const restartBtn = document.getElementById('restart-btn');
        const upBtn = document.getElementById('up-btn');
        const leftBtn = document.getElementById('left-btn');
        const rightBtn = document.getElementById('right-btn');
        const downBtn = document.getElementById('down-btn');
        
        // Initialize high score display
        highScoreElement.textContent = highScore;
        
        // Initialize game
        function initGame() {
            // Initialize snake
            snake = [
                {x: 5, y: 10},
                {x: 4, y: 10},
                {x: 3, y: 10}
            ];
            
            // Generate first food
            generateFood();
            
            // Reset score and direction
            score = 0;
            scoreElement.textContent = score;
            direction = 'right';
            nextDirection = 'right';
            
            // Hide game over screen
            gameOverElement.style.display = 'none';
        }
        
        // Generate food at random position
        function generateFood() {
            food = {
                x: Math.floor(Math.random() * gridWidth),
                y: Math.floor(Math.random() * gridHeight)
            };
            
            // Ensure food doesn't spawn on snake
            for (let part of snake) {
                if (part.x === food.x && part.y === food.y) {
                    return generateFood();
                }
            }
        }
        
        // Draw game elements
        function draw() {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw snake
            ctx.fillStyle = '#4ecca3';
            for (let i = 0; i < snake.length; i++) {
                // Draw snake head with different color
                if (i === 0) {
                    ctx.fillStyle = '#3db593';
                } else {
                    ctx.fillStyle = '#4ecca3';
                }
                
                ctx.fillRect(
                    snake[i].x * gridSize, 
                    snake[i].y * gridSize, 
                    gridSize, 
                    gridSize
                );
                
                // Draw border around each snake segment
                ctx.strokeStyle = '#232931';
                ctx.strokeRect(
                    snake[i].x * gridSize, 
                    snake[i].y * gridSize, 
                    gridSize, 
                    gridSize
                );
            }
            
            // Draw food
            ctx.fillStyle = '#e94560';
            ctx.beginPath();
            ctx.arc(
                food.x * gridSize + gridSize/2, 
                food.y * gridSize + gridSize/2, 
                gridSize/2, 
                0, 
                Math.PI * 2
            );
            ctx.fill();
        }
        
        // Move snake
        function moveSnake() {
            // Update direction
            direction = nextDirection;
            
            // Create new head based on current direction
            const head = {x: snake[0].x, y: snake[0].y};
            
            switch(direction) {
                case 'up':
                    head.y--;
                    break;
                case 'down':
                    head.y++;
                    break;
                case 'left':
                    head.x--;
                    break;
                case 'right':
                    head.x++;
                    break;
            }
            
            // Check for collision with walls
            if (head.x < 0 || head.x >= gridWidth || head.y < 0 || head.y >= gridHeight) {
                gameOver();
                return;
            }
            
            // Check for collision with self
            for (let i = 0; i < snake.length; i++) {
                if (snake[i].x === head.x && snake[i].y === head.y) {
                    gameOver();
                    return;
                }
            }
            
            // Add new head to snake
            snake.unshift(head);
            
            // Check if snake ate food
            if (head.x === food.x && head.y === food.y) {
                // Increase score
                score += 10;
                scoreElement.textContent = score;
                
                // Generate new food
                generateFood();
                
                // Increase speed slightly with each food eaten
                if (gameSpeed > 70) {
                    gameSpeed -= 2;
                }
            } else {
                // Remove tail if no food was eaten
                snake.pop();
            }
        }
        
        // Main game loop
        function gameStep() {
            moveSnake();
            draw();
        }
        
        // Start game
        function startGame() {
            if (!gameRunning) {
                gameRunning = true;
                gameLoop = setInterval(gameStep, gameSpeed);
                startBtn.textContent = 'Restart';
            }
        }
        
        // Pause game
        function pauseGame() {
            if (gameRunning) {
                clearInterval(gameLoop);
                gameRunning = false;
                pauseBtn.textContent = 'Resume';
            } else {
                gameLoop = setInterval(gameStep, gameSpeed);
                gameRunning = true;
                pauseBtn.textContent = 'Pause';
            }
        }
        
        // Reset game
        function resetGame() {
            clearInterval(gameLoop);
            gameRunning = false;
            initGame();
            draw();
            startBtn.textContent = 'Start';
            pauseBtn.textContent = 'Pause';
            gameSpeed = 130;
        }
        
        // Game over
        function gameOver() {
            clearInterval(gameLoop);
            gameRunning = false;
            
            // Update high score if needed
            if (score > highScore) {
                highScore = score;
                highScoreElement.textContent = highScore;
                localStorage.setItem('snakeHighScore', highScore);
            }
            
            // Show game over screen
            finalScoreElement.textContent = score;
            gameOverElement.style.display = 'block';
        }
        
        // Handle keyboard input
        function handleKeydown(e) {
            switch(e.key) {
                case 'ArrowUp':
                    if (direction !== 'down') nextDirection = 'up';
                    e.preventDefault();
                    break;
                case 'ArrowDown':
                    if (direction !== 'up') nextDirection = 'down';
                    e.preventDefault();
                    break;
                case 'ArrowLeft':
                    if (direction !== 'right') nextDirection = 'left';
                    e.preventDefault();
                    break;
                case 'ArrowRight':
                    if (direction !== 'left') nextDirection = 'right';
                    e.preventDefault();
                    break;
                case ' ':
                    if (gameRunning) {
                        pauseGame();
                    } else {
                        startGame();
                    }
                    e.preventDefault();
                    break;
            }
        }
        
        // Add event listeners
        document.addEventListener('keydown', handleKeydown);
        
        startBtn.addEventListener('click', () => {
            if (gameRunning) {
                resetGame();
            }
            startGame();
        });
        
        pauseBtn.addEventListener('click', pauseGame);
        resetBtn.addEventListener('click', resetGame);
        restartBtn.addEventListener('click', () => {
            resetGame();
            startGame();
        });
        
        upBtn.addEventListener('click', () => {
            if (direction !== 'down') nextDirection = 'up';
        });
        
        leftBtn.addEventListener('click', () => {
            if (direction !== 'right') nextDirection = 'left';
        });
        
        rightBtn.addEventListener('click', () => {
            if (direction !== 'left') nextDirection = 'right';
        });
        
        downBtn.addEventListener('click', () => {
            if (direction !== 'up') nextDirection = 'down';
        });
        
        // Initialize and draw the game
        initGame();
        draw();

        
        