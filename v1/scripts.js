// Navbar Scroll Logic
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Dynamic Cosmic Starfield Logic
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let width, height, stars;

function initStarfield() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    stars = [];
    
    // Generate 250 stars with varied depths
    for (let i = 0; i < 250; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5,
            vx: (Math.random() - 0.5) * 0.2, // Extremely slow drift
            vy: (Math.random() - 0.5) * 0.2
        });
    }
}

function animateStars() {
    // Clear canvas with a very slight opacity to create a trailing effect
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < stars.length; i++) {
        let s = stars[i];
        
        // Some stars glow golden, most are white
        ctx.fillStyle = i % 15 === 0 ? "rgba(212, 175, 55, 0.8)" : "rgba(255, 255, 255, 0.8)";
        
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Apply velocity
        s.x += s.vx;
        s.y += s.vy;
        
        // Wrap around screen boundaries seamlessly
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;
    }
    
    requestAnimationFrame(animateStars);
}

// Handle window resize dynamically
window.addEventListener('resize', initStarfield);

// Initialize and run
initStarfield();
animateStars();