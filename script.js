const quotes = [
    "Strong Wood. Stronger Promise",
    "Heavy On Quality. Light On Price",
    "Chemically Treated Wood",
    "Designed with passion. Built with purpose.",
    "Creating environments that feel like home.",
    "If It Breaks, We Fix It. But It Wont.",
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


const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const navBackdrop = document.getElementById("navBackdrop");

function openMobileMenu(){
    if (mobileMenu) mobileMenu.classList.add("open");
    if (hamburger) hamburger.classList.add("open");
    if (navBackdrop) navBackdrop.classList.add("open");
    if (nav) nav.classList.add("menu-open");
}

function closeMobileMenu(){
    if (mobileMenu) mobileMenu.classList.remove("open");
    if (hamburger) hamburger.classList.remove("open");
    if (navBackdrop) navBackdrop.classList.remove("open");
    if (nav) nav.classList.remove("menu-open");
}

if (hamburger) {
    hamburger.onclick = () => {
        mobileMenu.classList.contains("open") ? closeMobileMenu() : openMobileMenu();
    };
}

// Tap the dimmed backdrop to dismiss the menu
if (navBackdrop) {
    navBackdrop.addEventListener("click", closeMobileMenu);
}

// Give the nav a solid background once the user scrolls past the top of the hero
if (nav) {
    const setNavState = () => {
        if (window.scrollY > 40) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    };
    setNavState();
    window.addEventListener("scroll", setNavState, { passive: true });
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
