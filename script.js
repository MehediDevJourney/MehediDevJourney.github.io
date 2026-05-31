// Digital Clock System
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('digital-clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Blog Toggle System
function toggleBlog(id) {
    const content = document.getElementById(id);
    content.classList.toggle('active');
}

// Scroll Reveal System
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Form Submission Fake Handling
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    form.reset();
});
