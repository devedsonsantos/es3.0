const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    links.forEach(link => {
        link.classList.toggle("fade");
    });

    hamburger.classList.toggle("change");
});

window.addEventListener("click", (event) => {
    if (!event.target.matches('.hamburger') && !event.target.matches('.line')) {
        navLinks.classList.remove("open");

        links.forEach(link => {
            link.classList.remove("fade");
        });

        hamburger.classList.remove("change");
    }
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.classList.remove("change");
        links.forEach(link => {
            link.classList.remove("fade");
        });
    });
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do link

        const href = link.getAttribute('href');

        const target = document.querySelector(href);
        const offsetTop = target.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});