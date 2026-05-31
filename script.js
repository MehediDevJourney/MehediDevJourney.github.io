// Function to handle reveal animations on scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Event listener for scroll
window.addEventListener("scroll", reveal);

// Run reveal once on load to show elements already in view
window.onload = function() {
    reveal();
    
    // Set dynamic year in footer
    document.getElementById("year").textContent = new Date().getFullYear();
};

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        nav.style.padding = "1rem 0";
        nav.style.background = "rgba(5, 5, 7, 0.95)";
    } else {
        nav.style.padding = "1.5rem 0";
        nav.style.background = "rgba(5, 5, 7, 0.8)";
    }
};
