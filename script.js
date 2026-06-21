// SCROLL REVEAL ANIMATION

function revealSections() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// HERO FADE IN

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// FLOATING CARD EFFECT

document.addEventListener("mousemove", (e) => {

    const card = document.querySelector(".glass-card");

    if (!card) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave", () => {

    const card = document.querySelector(".glass-card");

    if (!card) return;

    card.style.transform =
        "rotateY(0deg) rotateX(0deg)";

});

// DARK MODE TOGGLE

const themeBtn =
document.getElementById("theme-toggle");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (
            document.body.classList.contains("dark-mode")
        ) {

            themeBtn.innerHTML = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeBtn.innerHTML = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });

}

// LOAD SAVED THEME

if (
    localStorage.getItem("theme") === "dark"
) {

    document.body.classList.add("dark-mode");

    if (themeBtn) {

        themeBtn.innerHTML = "☀️";

    }

}