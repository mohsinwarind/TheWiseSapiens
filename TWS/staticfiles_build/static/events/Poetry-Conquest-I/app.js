document.addEventListener("DOMContentLoaded", function () {
  const text = "Poetry-Conquest-I";
  const typewriterText = document.getElementById("typewriter-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typewriterText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 120); 
    } else {
      typewriterText.style.opacity = 1;
    }
  }
  
  document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
  });

  document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("nav-links").classList.remove("active");
  });

  type();

  const registerButton = document.querySelector(".poetry-button");
  registerButton.addEventListener("click", () => {
    window.location.href = "https://thewisesapiens.fillout.com/t/vYc76Lhykcus";
  });

  const questions = document.querySelectorAll(".question");

  questions.forEach(function (question) {
    question.addEventListener("click", function () {
      this.classList.toggle("active");
      const answer = this.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });

  const inkCanvas = document.getElementById("ink-canvas");
  const inkCtx = inkCanvas.getContext("2d");
  
  inkCanvas.width = window.innerWidth;
  inkCanvas.height = window.innerHeight;
  
  const BROWN = [176, 141, 87];  

  const createInkDrops = () => {
    inkCtx.clearRect(0, 0, inkCanvas.width, inkCanvas.height);
    
    const dropCount = Math.floor(Math.random() * 3) + 3;
    
    for (let i = 0; i < dropCount; i++) {
      const x = Math.random() * inkCanvas.width;
      const y = Math.random() * inkCanvas.height;
      const size = Math.random() * 150 + 50;
      const opacity = Math.random() * 0.15 + 0.05;
      
      const gradient = inkCtx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, `rgba(${BROWN.join(',')}, ${opacity * 1.5})`);
      gradient.addColorStop(0.5, `rgba(${BROWN.join(',')}, ${opacity})`);
      gradient.addColorStop(1, `rgba(${BROWN.join(',')}, 0)`);
      
      inkCtx.fillStyle = gradient;
      inkCtx.beginPath();
      inkCtx.arc(x, y, size, 0, Math.PI * 2);
      inkCtx.fill();
      
      const splatterCount = Math.floor(Math.random() * 5) + 3;
      for (let j = 0; j < splatterCount; j++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * size * 0.8 + size * 0.2;
        const splatterX = x + Math.cos(angle) * distance;
        const splatterY = y + Math.sin(angle) * distance;
        const splatterSize = Math.random() * 20 + 5;
        
        inkCtx.fillStyle = `rgba(${BROWN.join(',')}, ${opacity * 0.8})`;
        inkCtx.beginPath();
        inkCtx.arc(splatterX, splatterY, splatterSize, 0, Math.PI * 2);
        inkCtx.fill();
      }
    }
  };
  
  createInkDrops();
  
  setInterval(createInkDrops, 8000);
  
  window.addEventListener("resize", () => {
    inkCanvas.width = window.innerWidth;
    inkCanvas.height = window.innerHeight;
    createInkDrops();
  });
});

const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
  drawStars();
});

const starCount = 200;
const stars = [];

function initStars() {
  stars.length = 0;
  
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.7 + 0.3,
      twinkle: Math.random() * 0.03 + 0.01,
      color: 'brown'
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(176,141,87,${star.opacity})`;
    ctx.fill();
  });
}

function twinkleStars() {
  stars.forEach((star) => {
    star.opacity += star.twinkle;
    if (star.opacity > 1 || star.opacity < 0.3) {
      star.twinkle *= -1;
    }
  });
  drawStars();
  requestAnimationFrame(twinkleStars);
}

initStars();
twinkleStars();

document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('.header');
  const hamburgerBtn = document.getElementById('hamburger');
  const navContainer = document.querySelector('.nav-container');
  const closeBtn = document.getElementById('close-btn');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  
  hamburgerBtn.addEventListener('click', function() {
    hamburgerBtn.classList.toggle('active');
    navContainer.classList.toggle('active');
    document.body.style.overflow = navContainer.classList.contains('active') ? 'hidden' : '';
  });
  
  closeBtn.addEventListener('click', function() {
    hamburgerBtn.classList.remove('active');
    navContainer.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburgerBtn.classList.remove('active');
      navContainer.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  navLinks.forEach((link, index) => {
    link.style.animationDelay = `${0.1 + index * 0.05}s`;
    link.classList.add('nav-animation');
  });
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .nav-animation {
      animation: fadeInRight 0.6s forwards;
      opacity: 0;
    }
  `;
  document.head.appendChild(style);
});