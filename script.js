/**
 * Mehedi Hasan Portfolio - Pure JavaScript Logic
 */

// Scroll Reveal Observer
const revealElements = () => {
    const reveals = document.querySelectorAll(".reveal");
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
};

// Update Copyright Year Automatically
const updateYear = () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
};

// Smooth Scroll for Internal Links
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Event Listeners
window.addEventListener("scroll", revealElements);
window.addEventListener("load", () => {
    revealElements();
    updateYear();
    initSmoothScroll();
});

// Simple Console Brand
console.log("%c Portfolio Built by Mehedi Hasan ", "background: #007aff; color: #fff; font-weight: bold; padding: 5px;");
