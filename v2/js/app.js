/* =====================================
   LOADER
===================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);
    }

});


/* =====================================
   MOBILE MENU
===================================== */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* =====================================
   CLOSE MENU ON LINK CLICK
===================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(0,0,0,0.85)";

        navbar.style.backdropFilter =
            "blur(20px)";

    }

    else {

        navbar.style.background =
            "rgba(0,0,0,0.35)";
    }

});


/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements = document.querySelectorAll(
    ".about, .services, .advantage, .why-what, .contact, .stat-card, .service-card, .adv-card"
);

function revealOnScroll() {

    revealElements.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";
            item.style.transform =
                "translateY(0)";

        }

    });

}

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform =
        "translateY(60px)";
    item.style.transition =
        "all .8s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =====================================
   COUNTER ANIMATION
===================================== */

const counters =
    document.querySelectorAll(
        ".stat-card h2"
    );

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(".stats");

    if (!statsSection) return;

    const top =
        statsSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const text =
                counter.innerText;

            const target =
                parseInt(
                    text.replace(/\D/g, "")
                );

            let current = 0;

            const increment =
                target / 100;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.innerText =
                        Math.floor(current);

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.innerText =
                        text;

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener(
    "scroll",
    startCounters
);

startCounters();


/* =====================================
   HERO PARALLAX
===================================== */

const hero =
    document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scroll =
        window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY =
            scroll * 0.4 + "px";

    }

});


/* =====================================
   SIMPLE PARTICLES
===================================== */

const particles =
    document.getElementById(
        "particles"
    );

if (particles) {

    for (let i = 0; i < 40; i++) {

        const star =
            document.createElement("span");

        const size =
            Math.random() * 4 + 1;

        star.style.position = "absolute";

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        star.style.borderRadius =
            "50%";

        star.style.background =
            "rgba(255,255,255,.6)";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animation =
            `float ${
                Math.random() * 6 + 4
            }s infinite ease-in-out`;

        particles.appendChild(star);

    }

}


/* =====================================
   FLOAT KEYFRAMES
===================================== */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes float{

    0%{
        transform:
        translateY(0px);
        opacity:.2;
    }

    50%{
        transform:
        translateY(-20px);
        opacity:1;
    }

    100%{
        transform:
        translateY(0px);
        opacity:.2;
    }

}

.nav-links a.active{

    color:#c8a96a;

}

`;

document.head.appendChild(style);


/* =====================================
   BUTTON RIPPLE EFFECT
===================================== */

document.querySelectorAll(
    ".btn-primary, .btn-secondary"
).forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
                "translateY(-3px)";

        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translateY(0px)";

        }
    );

});


/* =====================================
   CURRENT YEAR FOOTER
===================================== */

const footer =
    document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        "© " +
        new Date().getFullYear() +
        " YAJURVEDH. All Rights Reserved.";

}
/* =====================================
   HERO DISSOLVE EFFECT
===================================== */

function dissolveHero(){

    const hero =
        document.getElementById("heroContent");

    if(!hero) return;

    const width = hero.offsetWidth;
    const height = hero.offsetHeight;

    for(let i=0;i<400;i++){

        const dot =
            document.createElement("div");

        dot.classList.add("dot-particle");

        dot.style.left =
            Math.random()*width + "px";

        dot.style.top =
            Math.random()*height + "px";

        dot.style.setProperty(
            "--x",
            (Math.random()-0.5)*500 + "px"
        );

        dot.style.setProperty(
            "--y",
            (Math.random()-0.5)*500 + "px"
        );

        hero.appendChild(dot);

        dot.addEventListener(
            "animationend",
            () => dot.remove()
        );
    }

    hero.classList.add("hide-content");
}

setTimeout(dissolveHero,5000);