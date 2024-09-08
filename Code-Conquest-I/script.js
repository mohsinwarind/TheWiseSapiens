document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
const text = "Welcome to our debut CodeConquest-I of 2024!";
const typewriterText = document.getElementById("typewriter-text");
let index = 0;

function type() {
    if (index < text.length) {
        typewriterText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust the typing speed here (100ms per character)
    }
}

type();
});