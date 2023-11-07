document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 100, // Adjust the offset as needed
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const scrollPosition = window.scrollY;

if (scrollPosition > hero.offsetHeight) {
    navbar.classList.add('active');
} else {
    navbar.classList.remove('active');
}
});

document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
        top: targetElement.offsetTop - navbar.offsetHeight + 10, // Adjust for navbar height
        behavior: 'smooth'
    });
});
});
// const logos = document.querySelectorAll('.stack-icons img');




// Stop logo animations when the user doesn't scroll
let animationStopped = false;
const logos = document.querySelectorAll('.logo-slider img');

window.addEventListener('scroll', () => {
if (!animationStopped) {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 400) {
        logos.forEach(logo => logo.style.animation = 'none');
        animationStopped = true;
    }
}})


const contactSection = document.getElementById('contact');

contactSection.addEventListener('mouseover', () => {
document.body.classList.add('coffee-cursor');
});

contactSection.addEventListener('mouseout', () => {
document.body.classList.remove('coffee-cursor');
});


document.addEventListener("DOMContentLoaded", function () {
const cursor = document.querySelector(".trail-cursor");

document.addEventListener("mousemove", (e) => {
const trail = document.createElement("div");
trail.className = "trail-cursor";
document.body.appendChild(trail);

const x = e.clientX;
const y = e.clientY;
trail.style.left = x + "px";
trail.style.top = y + "px";

// Remove the trail element after the animation
trail.addEventListener("animationend", () => {
    trail.remove();
});
});

document.addEventListener("mouseenter", (e) => {
cursor.style.display = "block";
});

document.addEventListener("mouseleave", (e) => {
cursor.style.display = "none";
});
});



const trailCursor = document.querySelector('.trail-cursor');

document.addEventListener('mousemove', (e) => {
trailCursor.style.left = e.clientX + 'px';
trailCursor.style.top = e.clientY + 'px';
trailCursor.style.display = 'block'; // Show the cursor trail
})
