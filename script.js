/* =====================================================
   RUBAS PERFUME - PREMIUM JAVASCRIPT ANIMATION
   ===================================================== */


/* =====================================================
   1. MOUSE FOLLOWING LIGHT
   ===================================================== */

const cursorGlow = document.createElement("div");

cursorGlow.className = "cursor-glow";

document.body.appendChild(cursorGlow);


document.addEventListener("mousemove", function (e) {

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});


/* =====================================================
   2. FLOATING BACKGROUND PARTICLES
   ===================================================== */

const particleContainer = document.createElement("div");

particleContainer.className = "particles";

document.body.prepend(particleContainer);


for (let i = 0; i < 28; i++) {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        10 + Math.random() * 12 + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        0.15 + Math.random() * 0.55;

    particleContainer.appendChild(particle);

}


/* =====================================================
   3. SCROLL ANIMATION
   ===================================================== */

const animatedElements = document.querySelectorAll(
    ".section-heading, .product-card, .about-content, .quote-box, .contact-box, .order-card, .order-product"
);


animatedElements.forEach(function (element, index) {

    element.classList.add("scroll-hidden");


    if (element.classList.contains("product-card")) {

        if (index % 2 === 0) {

            element.classList.add("from-left");

        } else {

            element.classList.add("from-right");

        }

    } else {

        element.classList.add("from-bottom");

    }

});


const scrollObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("scroll-show");

                scrollObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px"
    }

);


animatedElements.forEach(function (element) {

    scrollObserver.observe(element);

});


/* =====================================================
   4. PRODUCT 3D TILT
   ===================================================== */

const productCards =
    document.querySelectorAll(".product-card");


productCards.forEach(function (card) {

    card.addEventListener("mousemove", function (e) {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;


        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)
             scale(1.01)`;

    });


    card.addEventListener("mouseleave", function () {

        card.style.transform =
            `perspective(1000px)
             rotateX(0deg)
             rotateY(0deg)
             translateY(0)
             scale(1)`;

    });

});


/* =====================================================
   5. CONTACT CARD MOUSE EFFECT
   ===================================================== */

const contactBoxes =
    document.querySelectorAll(".contact-box");


contactBoxes.forEach(function (box) {

    box.addEventListener("mousemove", function (e) {

        const rect =
            box.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;


        box.style.setProperty(
            "--mouse-x",
            x + "px"
        );

        box.style.setProperty(
            "--mouse-y",
            y + "px"
        );

    });

});


/* =====================================================
   6. GOLD BUTTON SHINE
   ===================================================== */

const buttons = document.querySelectorAll(
    ".gold-btn, .order-btn, .order-card button"
);


buttons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        button.classList.add("button-shine");

    });


    button.addEventListener("mouseleave", function () {

        button.classList.remove("button-shine");

    });

});


/* =====================================================
   7. HERO IMAGE ANIMATION
   ===================================================== */

const heroImage =
    document.querySelector(".hero-banner-image");


if (heroImage) {

    heroImage.classList.add("hero-floating");

}


/* =====================================================
   8. HERO AUTOMATIC SLIDESHOW
   ===================================================== */

/*
    IMPORTANT:

    Apne images folder mein ye files rakho:

    hero page.png
    hero page 2.png
    hero page 3.png

    Agar sirf 1 image hai to slideshow nahi chalega.
*/


const hero = document.querySelector(".hero-banner-image img");


if (hero) {

    const heroSlides = [
        "images/hero page.png",
        "images/hero page 2.png",
        "images/hero page 3.png"
    ];

    let currentSlide = 0;


    function showNextSlide() {

        hero.style.opacity = "0";

        hero.style.transform =
            "translateX(50px) scale(1.03)";


        setTimeout(function () {

            currentSlide++;

            if (currentSlide >= heroSlides.length) {

                currentSlide = 0;

            }


            hero.src = heroSlides[currentSlide];


            hero.onload = function () {

                hero.style.opacity = "1";

                hero.style.transform =
                    "translateX(0) scale(1)";

            };

        }, 500);

    }


    setInterval(showNextSlide, 5000);

}


/* =====================================================
   9. ORDER FORM INPUT EFFECT
   ===================================================== */

const formInputs = document.querySelectorAll(
    ".order-card input, .order-card select, .order-card textarea"
);


formInputs.forEach(function (input) {

    input.addEventListener("focus", function () {

        input.classList.add("input-focus");

    });


    input.addEventListener("blur", function () {

        input.classList.remove("input-focus");

    });

});


/* =====================================================
   10. PARALLAX BACKGROUND
   ===================================================== */

document.addEventListener("mousemove", function (e) {

    const x =
        (e.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (e.clientY / window.innerHeight - 0.5) * 20;


    document.documentElement.style.setProperty(
        "--parallax-x",
        x + "px"
    );

    document.documentElement.style.setProperty(
        "--parallax-y",
        y + "px"
    );

});


/* =====================================================
   11. PAGE LOAD
   ===================================================== */

window.addEventListener("load", function () {

    document.body.classList.add("page-loaded");

});