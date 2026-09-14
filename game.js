// CROSSOVER FIGHT GAME - 59 Characters

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// CHARACTER DATABASE
const characters = {
    // MARVEL HEROES
    'Spider-Man': { faction: 'Marvel', health: 100, speed: 8, power: 85, image: '🕷️' },
    'Iron Man': { faction: 'Marvel', health: 110, speed: 7, power: 90, image: '🤖' },
    'Captain America': { faction: 'Marvel', health: 120, speed: 6, power: 85, image: '⭐' },
    'Thor': { faction: 'Marvel', health: 130, speed: 5, power: 100, image: '⚡' },
    'Hulk': { faction: 'Marvel', health: 150, speed: 4, power: 110, image: '💚' },
    'Black Panther': { faction: 'Marvel', health: 105, speed: 8, power: 88, image: '🐆' },
    'Doctor Strange': { faction: 'Marvel', health: 95, speed: 7, power: 92, image: '🧿' },
    'Blade': { faction: 'Marvel', health: 100, speed: 9, power: 87, image: '🧛' },
    'Moon Knight': { faction: 'Marvel', health: 102, speed: 8, power: 86, image: '🌙' },
    'Ghost Rider': { faction: 'Marvel', health: 115, speed: 6, power: 95, image: '🔥' },
    'Daredevil': { faction: 'Marvel', health: 98, speed: 9, power: 84, image: '😈' },
    'Groot': { faction: 'Marvel', health: 125, speed: 5, power: 89, image: '🌳' },
    'Thanos': { faction: 'Marvel', health: 140, speed: 6, power: 115, image: '👹' },
    'Loki': { faction: 'Marvel', health: 105, speed: 8, power: 88, image: '🟢' },
    'Green Goblin': { faction: 'Marvel', health: 108, speed: 7, power: 86, image: '🎃' },
    'Doctor Doom': { faction: 'Marvel', health: 118, speed: 6, power: 100, image: '👑' },
    'Magneto': { faction: 'Marvel', health: 112, speed: 7, power: 98, image: '🧲' },
    'Venom': { faction: 'Marvel', health: 128, speed: 7, power: 102, image: '⚫' },
    'Ultron': { faction: 'Marvel', health: 135, speed: 6, power: 105, image: '🤖' },
    'Red Skull': { faction: 'Marvel', health: 110, speed: 6, power: 90, image: '💀' },

    // DC HEROES
    'Batman': { faction: 'DC', health: 105, speed: 9, power: 88, image: '🦇' },
    'Superman': { faction: 'DC', health: 140, speed: 8, power: 115, image: '📖' },
    'Wonder Woman': { faction: 'DC', health: 125, speed: 7, power: 105, image: '⭐️' },
    'Flash': { faction: 'DC', health: 95, speed: 12, power: 82, image: '⚡' },
    'Green Lantern': { faction: 'DC', health: 115, speed: 7, power: 95, image: '💚' },
    'Aquaman': { faction: 'DC', health: 120, speed: 6, power: 100, image: '🌊' },
    'Cyborg': { faction: 'DC', health: 118, speed: 7, power: 96, image: '🤖' },
    'Green Arrow': { faction: 'DC', health: 100, speed: 8, power: 85, image: '🏹' },
    'Shazam': { faction: 'DC', health: 130, speed: 7, power: 105, image: '⚡' },
    'Martian Manhunter': { faction: 'DC', health: 125, speed: 7, power: 100, image: '👽' },
    'Nightwing': { faction: 'DC', health: 98, speed: 10, power: 86, image: '🌙' },
    'Constantine': { faction: 'DC', health: 92, speed: 7, power: 90, image: '🔴' },
    'Joker': { faction: 'DC', health: 95, speed: 8, power: 85, image: '🤡' },
    'Lex Luthor': { faction: 'DC', health: 110, speed: 6, power: 95, image: '🧪' },
    'Darkseid': { faction: 'DC', health: 145, speed: 6, power: 120, image: '👿' },
    'Deathstroke': { faction: 'DC', health: 112, speed: 8, power: 94, image: '⚔️' },
    'Harley Quinn': { faction: 'DC', health: 95, speed: 9, power: 84, image: '💥' },
    'Poison Ivy': { faction: 'DC', health: 100, speed: 7, power: 88, image: '🍃' },
    'Black Manta': { faction: 'DC', health: 115, speed: 7, power: 92, image: '🌊' },
    'Two-Face': { faction: 'DC', health: 105, speed: 7, power: 87, image: '🤖' },

    // X-MEN
    'Wolverine': { faction: 'X-Men', health: 115, speed: 8, power: 95, image: '🐺' },
    'Deadpool': { faction: 'X-Men', health: 110, speed: 9, power: 87, image: '🔴' },
    'Cyclops': { faction: 'X-Men', health: 105, speed: 7, power: 90, image: '👁️' },
    'Storm': { faction: 'X-Men', health: 110, speed: 8, power: 92, image: '⛈️' },
    'Jean Grey': { faction: 'X-Men', health: 108, speed: 7, power: 100, image: '🔥' },
    'Beast': { faction: 'X-Men', health: 112, speed: 8, power: 89, image: '🐙' },
    'Gambit': { faction: 'X-Men', health: 105, speed: 9, power: 88, image: '💎' },
    'Rogue': { faction: 'X-Men', health: 118, speed: 7, power: 95, image: '✨' },
    'Magneto': { faction: 'X-Men', health: 115, speed: 7, power: 98, image: '🧲' },
    'Mystique': { faction: 'X-Men', health: 103, speed: 9, power: 86, image: '💙' },
    'Sabretooth': { faction: 'X-Men', health: 122, speed: 8, power: 96, image: '🐱' },
    'Apocalypse': { faction: 'X-Men', health: 138, speed: 6, power: 110, image: '👑' },

    // WIZARDING WORLD
    'Harry Potter': { faction: 'Wizarding', health: 100, speed: 7, power: 85, image: '⚡' },
    'Hermione Granger': { faction: 'Wizarding', health: 95, speed: 7, power: 88, image: '📚' },
    'Ron Weasley': { faction: 'Wizarding', health: 92, speed: 6, power: 80, image: '♟️' },
    'Dumbledore': { faction: 'Wizarding', health: 105, speed: 5, power: 110, image: '🧙' },
    'Voldemort': { faction: 'Wizarding', health: 110, speed: 6, power: 105, image: '💀' },
    'Bellatrix Lestrange': { faction: 'Wizarding', health: 105, speed: 7, power: 95, image: '🔴' },
    'Grindelwald': { faction: 'Wizarding', health: 108, speed: 6, power: 102, image: '✨' }
};

let gameState = 'menu';
let player1, player2;
let selectedCharacters = { p1: null, p2: null };
let gameLoop;

class Fighter {
    constructor(name, x, isPlayer1 = true) {
        const charData = characters[name];
        this.name = name;
        this.x = x;
        this.y = canvas.height - 150;
        this.width = 80;
        this.height = 100;
        this.health = charData.health;
        this.maxHealth = charData.health;
        this.speed = charData.speed;
        this.power = charData.power;
        this.image = charData.image;
        this.faction = charData.faction;
        this.isPlayer1 = isPlayer1;
        this.velocityY = 0;
        this.velocityX = 0;
        this.isJumping = false;
        this.isAttacking = false;
        this.attackCooldown = 0;
        this.ultimateReady = false;
        this.ultimateCharge = 0;
        this.facing = isPlayer1 ? 1 : -1;
        this.combo = 0;
        this.lastHitTime = 0;
        this.scale = 1;
    }

    update() {
        // Gravity
        if (this.y < canvas.height - 150) {
            this.velocityY += 0.5;
            this.y += this.velocityY;
        } else {
            this.y = canvas.height - 150;
            this.velocityY = 0;
            this.isJumping = false;
        }

        // Movement
        this.x += this.velocityX;
        this.velocityX *= 0.95;

        // Boundaries
        if (this.x < 0) this.x = 0;
        if (this.x + this.width > canvas.width) this.x = canvas.width - this.width;

        // Cooldowns
        if (this.attackCooldown > 0) this.attackCooldown--;
        if (this.ultimateCharge < 100) this.ultimateCharge += 0.3;
        if (this.ultimateCharge >= 100) this.ultimateReady = true;

        // Reset combo if no hits for 3 seconds
        if (Date.now() - this.lastHitTime > 3000) this.combo = 0;
    }

    draw() {
        // Health bar
        const barWidth = 150;
        const barHeight = 20;
        const barX = this.isPlayer1 ? 20 : canvas.width - barWidth - 20;
        const barY = 20;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(barX, barY, barWidth, barHeight);
        
        const healthPercent = this.health / this.maxHealth;
        ctx.fillStyle = healthPercent > 0.5 ? '#00ff64' : healthPercent > 0.25 ? '#ff9900' : '#ff0000';
        ctx.fillRect(barX, barY, barWidth * healthPercent, barHeight);
        
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.strokeRect(barX, barY, barWidth, barHeight);

        // Name
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(this.name, barX, barY - 5);

        // Character
        ctx.font = 'bold 60px Arial';
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        if (this.facing === -1) ctx.scale(-1, 1);
        ctx.scale(this.scale, this.scale);
        ctx.fillText(this.image, -20, 20);
        ctx.restore();

        // Ultimate charge
        if (this.ultimateCharge > 0) {\n            const chargeBarY = barY + barHeight + 10;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(barX, chargeBarY, barWidth, 8);
            ctx.fillStyle = '#ffff00';
            ctx.fillRect(barX, chargeBarY, barWidth * (this.ultimateCharge / 100), 8);
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1;
            ctx.strokeRect(barX, chargeBarY, barWidth, 8);
        }
    }

    jump() {
        if (!this.isJumping) {
            this.velocityY = -12;
            this.isJumping = true;
        }
    }

    moveLeft() {
        this.velocityX = -this.speed;
        this.facing = -1;
    }

    moveRight() {
        this.velocityX = this.speed;
        this.facing = 1;
    }

    attack(opponent) {
        if (this.attackCooldown > 0) return;
        
        const distance = Math.abs(this.x - opponent.x);
        if (distance < 150) {
            const damage = Math.random() * (this.power * 0.4) + (this.power * 0.6);
            opponent.takeDamage(damage, this.combo);
            this.combo++;
            this.lastHitTime = Date.now();
            this.attackCooldown = 20;
            this.scale = 1.1;
            setTimeout(() => this.scale = 1, 100);
        }
    }

    takeDamage(damage, combo = 0) {
        const totalDamage = damage * (1 + combo * 0.1);
        this.health -= totalDamage;
        if (this.health < 0) this.health = 0;
    }

    ultimate(opponent) {
        if (!this.ultimateReady) return;
        
        const damage = this.power * 2;
        opponent.takeDamage(damage, 5);
        this.ultimateReady = false;
        this.ultimateCharge = 0;
        
        // Visual effect
        for (let i = 0; i < 20; i++) {
            createParticle(this.x + this.width / 2, this.y, this.facing);
        }
    }
}

// Particle effects
let particles = [];

function createParticle(x, y, direction) {
    particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 10 * direction,
        vy: Math.random() * -10,
        life: 1,
        size: Math.random() * 10 + 5
    });
}

function updateParticles() {
    particles = particles.filter(p => p.life > 0);
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.2;
        p.life -= 0.02;
    });
}

function drawParticles() {
    particles.forEach(p => {
        ctx.fillStyle = `rgba(255, 100, 0, ${p.life})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Input handling
const keys = {};

window.addEventListener('keydown', e => {
    keys[e.key.toLowerCase()] = true;
    
    // Player 1 controls (WASD)
    if (player1) {
        if (e.key === 'w') player1.jump();
        if (e.key === 'a') player1.moveLeft();
        if (e.key === 'd') player1.moveRight();
        if (e.key === ' ') {
            e.preventDefault();
            player1.attack(player2);
        }
        if (e.key === 'Shift') player1.ultimate(player2);
    }
    
    // Player 2 controls (Arrow keys)
    if (player2) {
        if (e.key === 'ArrowUp') player2.jump();
        if (e.key === 'ArrowLeft') player2.moveLeft();
        if (e.key === 'ArrowRight') player2.moveRight();
        if (e.key === 'Enter') {
            e.preventDefault();
            player2.attack(player1);
        }
        if (e.key === 'Control') player2.ultimate(player1);
    }
});

window.addEventListener('keyup', e => {
    keys[e.key.toLowerCase()] = false;
});

// Game functions
function startCharacterSelect() {
    gameState = 'selecting';
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('characterSelect').classList.remove('hidden');
    renderCharacterSelect();
}

function renderCharacterSelect() {
    const container = document.getElementById('p1Characters');
    container.innerHTML = '';
    
    Object.keys(characters).forEach(name => {
        const char = characters[name];
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <div style="font-size: 3em;">${char.image}</div>
            <div class="character-name">${name}</div>
            <div class="character-faction">${char.faction}</div>
            <div style="font-size: 0.8em; color: #00ff64;">HP: ${char.health} | PWR: ${char.power}</div>
        `;
        card.onclick = () => selectCharacterPair(name);
        container.appendChild(card);
    });
}

function selectCharacterPair(name) {
    player1 = new Fighter(name, 100, true);
    const opponents = Object.keys(characters).filter(c => c !== name);
    player2 = new Fighter(opponents[Math.floor(Math.random() * opponents.length)], canvas.width - 180, false);
    
    document.getElementById('characterSelect').classList.add('hidden');
    gameState = 'playing';
    startGameLoop();
}

function startGameLoop() {
    if (gameLoop) cancelAnimationFrame(gameLoop);
    
    function loop() {
        // Clear
        ctx.fillStyle = 'rgba(15, 15, 30, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update
        player1.update();
        player2.update();
        updateParticles();
        
        // AI for player 2
        const distance = Math.abs(player1.x - player2.x);
        if (Math.random() < 0.02) {
            if (player1.x < player2.x) player2.moveLeft();
            else player2.moveRight();
        }
        if (distance < 150 && Math.random() < 0.1) {
            player2.attack(player1);
        }
        if (player2.ultimateReady && Math.random() < 0.05) {
            player2.ultimate(player1);
        }
        
        // Draw
        player1.draw();
        player2.draw();
        drawParticles();
        
        // Game over check
        if (player1.health <= 0) {
            endGame(`${player2.name} WINS!`);
        } else if (player2.health <= 0) {
            endGame(`${player1.name} WINS!`);
        } else {
            gameLoop = requestAnimationFrame(loop);
        }
    }
    
    gameLoop = requestAnimationFrame(loop);
}

function endGame(text) {
    gameState = 'gameOver';
    document.getElementById('gameOverText').textContent = text;
    document.getElementById('gameOver').classList.remove('hidden');
    cancelAnimationFrame(gameLoop);
}

function restartGame() {
    document.getElementById('gameOver').classList.add('hidden');
    startCharacterSelect();
}

function goBackToMenu() {
    gameState = 'menu';
    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('characterSelect').classList.add('hidden');
    document.getElementById('gameOver').classList.add('hidden');
    if (gameLoop) cancelAnimationFrame(gameLoop);
}

function showInstructions() {
    alert(`CROSSOVER FIGHT - HOW TO PLAY\n\nPLAYER 1 (Left):\nW - Jump\nA/D - Move\nSPACE - Attack\nSHIFT - Ultimate\n\nPLAYER 2 (Right):\nArrow Up - Jump\nArrow Left/Right - Move\nENTER - Attack\nCTRL - Ultimate\n\nBuild your ultimate charge and defeat your opponent!`);
}