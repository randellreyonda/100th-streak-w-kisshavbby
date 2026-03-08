// script.js

// Function to create confetti animation
function createConfetti() {
    const colors = ['#FFC700', '#FF3D00', '#FF6B00', '#FFB5E8', '#FF9EB5'];
    const body = document.body;
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        body.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Particle effect function
function createParticles(e) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}

// Event listener for mouse clicks to create particles
window.addEventListener('click', createParticles);

// Trigger confetti on celebration
document.querySelector('#celebrateBtn').addEventListener('click', createConfetti);

// CSS for particles and confetti
const style = document.createElement('style');
style.textContent = `.confetti {position: absolute; animation: fall 3s linear forwards;} .particle {width: 10px; height: 10px; background-color: rgba(255, 255, 255, 0.8); position: absolute; border-radius: 50%; animation: explode 1s forwards;} @keyframes fall {to {transform: translateY(100vh); opacity: 0;}} @keyframes explode {from {transform: scale(1);} to {transform: scale(2); opacity: 0;}}`;
document.head.appendChild(style);