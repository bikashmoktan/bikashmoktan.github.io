const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
const radius = 10;
const speed = 2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

function updatePosition(e) {
    switch(e.key) {
        case 'ArrowUp':
            y -= speed;
            break;
        case 'ArrowDown':
            y += speed;
            break;
        case 'ArrowLeft':
            x -= speed;
            break;
        case 'ArrowRight':
            x += speed;
            break;
    }
    draw();
}

document.addEventListener('keydown', updatePosition);

draw();
