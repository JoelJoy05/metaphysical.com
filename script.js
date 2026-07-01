const quotes = [
    "Every masterpiece begins with exceptional vision.",
    "Crafting spaces that inspire generations.",
    "Where craftsmanship meets timeless elegance.",
    "Designed with passion. Built with purpose.",
    "Creating environments that feel like home.",
    "Quality you can see. Excellence you can trust."
];

const quote = document.getElementById("heroQuote");

if (quote) {

    let index = 0;

    setInterval(() => {

        quote.style.opacity = 0;

        setTimeout(() => {

            index = (index + 1) % quotes.length;

            quote.textContent = `"${quotes[index]}"`;

            quote.style.opacity = 1;

        }, 500);

    }, 5000);

}


const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.onclick = () => {
    mobileMenu.classList.toggle("open");
};

function closeMobileMenu(){
    mobileMenu.classList.remove("open");
}
// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const href = this.getAttribute("href");

        if (href === "#hero") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("sw.js");

    });

}
const track = document.getElementById("galleryTrack");

// Only run the gallery marquee if the gallery section is present in the DOM
if (track) {

    // Clone images continuously
    const items = [...track.children];

    items.forEach(item => {
        track.appendChild(item.cloneNode(true));
    });

    let x = 0;
    const speed = 0.5;

    function loop(){

        x -= speed;

        // Move track
        track.style.transform = `translateX(${x}px)`;

        // Width of first half
        if(Math.abs(x) >= track.scrollWidth / 2){

            x = 0;

        }

        requestAnimationFrame(loop);

    }

    loop();

}
