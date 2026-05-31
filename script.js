document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Live Clock & Greeting Logic
    const updateClock = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        document.getElementById('live-clock').textContent = `${hours}:${minutes}:${seconds}`;
        
        // Dynamic Greeting
        const greetingElement = document.getElementById('greeting');
        if (hours < 12) greetingElement.textContent = "Good Morning";
        else if (hours < 18) greetingElement.textContent = "Good Afternoon";
        else greetingElement.textContent = "Good Evening";

        // Date String
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        document.getElementById('live-date').textContent = now.toLocaleDateString('en-US', options);
    };
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Spotlight Typewriter Effect
    const input = document.getElementById('typewriter-input');
    const phrases = ["Search the web...", "Ask ChatGPT...", "Vision 2030...", "Mastering CSS..."];
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const type = () => {
        const currentPhrase = phrases[phraseIdx];
        if (isDeleting) {
            input.placeholder = currentPhrase.substring(0, charIdx--);
        } else {
            input.placeholder = currentPhrase.substring(0, charIdx++);
        }

        if (!isDeleting && charIdx === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    };
    type();

    // 3. Reveal on Scroll (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 4. Smooth Battery Mock (Visual only)
    let battery = 88;
    setInterval(() => {
        battery = battery > 10 ? battery - 1 : 100;
        document.getElementById('battery-level').textContent = `${battery}%`;
    }, 60000);
});
