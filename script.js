document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Preloader
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);
    }, 1500);

    // 2. Smooth Typewriter
    const typedTextSpan = document.getElementById("typed-text");
    const textArray = [
        "Integrating modern AI workflows.",
        "Compiling the source code.",
        "Refining the UI/UX architecture."
    ];
    
    const typingDelay = 70;
    const erasingDelay = 40;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            setTimeout(type, typingDelay + 500);
        }
    }

    // Start after preloader
    setTimeout(type, 2000);

    // 3. 3D Tilt Effect (Desktop Only)
    const card = document.getElementById("tilt-card");
    if (matchMedia('(pointer:fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 60;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 60;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        document.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    }
});
