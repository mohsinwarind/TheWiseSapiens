document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to the Capture Quest-I";
  const typewriterText = document.getElementById("typewriter-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typewriterText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 30);
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

  // Register button interaction
  const registerButton = document.querySelector(".button-1");
  registerButton.addEventListener("click", () => {
    window.location.href = "https://example.com/register";
  });

  // FAQ toggle functionality
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
});

// Star canvas animation
const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawStars();
});

// Star properties
const starCount = 150;
const stars = [];

for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    opacity: Math.random(),
    twinkle: Math.random() * 0.05 + 0.02,
  });
}

// Draw stars on canvas
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();
  });
}

// Twinkling effect
function twinkleStars() {
  stars.forEach((star) => {
    star.opacity += star.twinkle;
    if (star.opacity > 1 || star.opacity < 0) {
      star.twinkle *= -1;
    }
  });
  drawStars();
  requestAnimationFrame(twinkleStars);
}

// Start animation
twinkleStars();
