// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
    }
});

// Scroll to Top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and items
document.querySelectorAll('.project-card, .skill-item, .stat-box, .contact-method').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name') || 'বন্ধু';
        
        alert(`${name}, ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে। শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।`);
        contactForm.reset();
    });
}

// Add name attribute to form inputs for FormData
document.querySelectorAll('.contact-form input, .contact-form textarea').forEach((el, index) => {
    if (!el.name) {
        if (el.placeholder === 'আপনার নাম') el.name = 'name';
        else if (el.placeholder === 'আপনার ইমেইল') el.name = 'email';
        else if (el.placeholder === 'বিষয়') el.name = 'subject';
        else if (el.tagName === 'TEXTAREA') el.name = 'message';
    }
});

// Prevent form submission with Enter key in input fields
document.querySelectorAll('.contact-form input').forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');
let animated = false;

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 10);
    });
};

const skillsSection = document.querySelector('.skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            animateSkillBars();
            animated = true;
        }
    });
}, { threshold: 0.5 });

skillsObserver.observe(skillsSection);

// Hamburger menu animation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});

// Prevent menu close when clicking inside
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') {
        e.stopPropagation();
    }
});

// Mobile menu responsive styles
if (window.innerWidth <= 768) {
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu {
            position: fixed;
            left: -300px;
            top: 60px;
            flex-direction: column;
            background-color: white;
            width: 300px;
            text-align: left;
            transition: left 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            padding: 2rem 0;
            gap: 1rem !important;
        }

        .nav-menu.active {
            left: 0;
        }

        .nav-menu a {
            display: block;
            padding: 1rem 2rem;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(10px, 10px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    `;
    document.head.appendChild(style);
}

// Add to hamburger toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Console message
console.log('%c🚀 Mehedi Dev Journey - Portfolio', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to my portfolio!', 'color: #764ba2; font-size: 14px;');
