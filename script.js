document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for Reveal on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Target all elements with class 'reveal'
    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });

    // Smooth scroll for nav links (Standard behavior enhanced)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(5, 5, 5, 0.9)';
            nav.style.padding = '0.8rem 0';
        } else {
            nav.style.background = 'transparent';
            nav.style.padding = '1.2rem 0';
        }
    });
});
