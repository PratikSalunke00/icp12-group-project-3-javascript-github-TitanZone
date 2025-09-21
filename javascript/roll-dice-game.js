  
        // Game variables
        let diceCount = 1;
        let rollHistory = [];
        
        // DOM elements
        const diceContainer = document.getElementById('dice-container');
        const diceCountElement = document.getElementById('dice-count');
        const rollBtn = document.getElementById('roll-btn');
        const clearBtn = document.getElementById('clear-btn');
        const increaseBtn = document.getElementById('increase-btn');
        const decreaseBtn = document.getElementById('decrease-btn');
        const historyList = document.getElementById('history-list');
        
        // Initialize the game
        function initGame() {
            updateDiceCount();
            updateHistoryDisplay();
        }
        
        // Update the number of dice displayed
        function updateDiceCount() {
            diceCountElement.textContent = diceCount;
            
            // Clear current dice
            diceContainer.innerHTML = '';
            
            // Add new dice
            for (let i = 0; i < diceCount; i++) {
                const dice = document.createElement('div');
                dice.className = 'dice';
                dice.setAttribute('data-value', '1');
                
                const diceValue = document.createElement('div');
                diceValue.className = 'dice-value';
                
                dice.appendChild(diceValue);
                diceContainer.appendChild(dice);
            }
        }
        
        // Roll all dice
        function rollDice() {
            const diceElements = diceContainer.querySelectorAll('.dice');
            const results = [];
            
            // Add rolling animation
            diceElements.forEach(dice => {
                dice.classList.add('rolling');
                
                // Remove animation after it completes
                setTimeout(() => {
                    dice.classList.remove('rolling');
                }, 500);
            });
            
            // Generate random values after animation
            setTimeout(() => {
                diceElements.forEach(dice => {
                    const value = Math.floor(Math.random() * 6) + 1;
                    dice.setAttribute('data-value', value);
                    results.push(value);
                });
                
                // Add to history
                addToHistory(results);
            }, 500);
        }
        
        // Add roll to history
        function addToHistory(results) {
            const total = results.reduce((sum, value) => sum + value, 0);
            const timestamp = new Date().toLocaleTimeString();
            
            rollHistory.unshift({
                dice: results,
                total: total,
                time: timestamp
            });
            
            // Keep only last 10 rolls
            if (rollHistory.length > 10) {
                rollHistory.pop();
            }
            
            updateHistoryDisplay();
        }
        
        // Update history display
        function updateHistoryDisplay() {
            historyList.innerHTML = '';
            
            if (rollHistory.length === 0) {
                historyList.innerHTML = '<p class="history-item">No rolls yet</p>';
                return;
            }
            
            rollHistory.forEach(roll => {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                
                const diceValues = roll.dice.map(value => 
                    `<span style="display:inline-block; width:20px; text-align:center;">${value}</span>`
                ).join(' + ');
                
                historyItem.innerHTML = `
                    <span>${diceValues}</span>
                    <span>= ${roll.total} (${roll.time})</span>
                `;
                
                historyList.appendChild(historyItem);
            });
        }
        
        // Event listeners
        rollBtn.addEventListener('click', rollDice);
        
        clearBtn.addEventListener('click', () => {
            rollHistory = [];
            updateHistoryDisplay();
        });
        
        increaseBtn.addEventListener('click', () => {
            if (diceCount < 6) {
                diceCount++;
                updateDiceCount();
            }
        });
        
        decreaseBtn.addEventListener('click', () => {
            if (diceCount > 1) {
                diceCount--;
                updateDiceCount();
            }
        });
        
        // Allow rolling with spacebar
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                rollDice();
                e.preventDefault();
            }
        });
        
        // Initialize the game
        initGame();
    