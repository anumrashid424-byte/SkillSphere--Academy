// ================================
// PRELOADER
// ================================

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
    }, 500);
});

// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuBtn.querySelector("i").classList.remove("fa-times");
        menuBtn.querySelector("i").classList.add("fa-bars");

    });

});

// ================================
// STICKY ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================================
// DARK / LIGHT MODE
// ================================

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");
    themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.innerHTML = `<i class="fas fa-moon"></i>`;
        localStorage.setItem("theme", "light");

    }

});

// ================================
// BACK TO TOP
// ================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ================================
// COUNTER ANIMATION
// ================================

const counters = document.querySelectorAll(".counter");

function startCounters() {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);
        const speed = 60;

        const updateCounter = () => {

            const current = Number(counter.innerText);

            const increment = Math.ceil(target / speed);

            if (current < target) {

                counter.innerText = current + increment;

                setTimeout(updateCounter, 25);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

}

let counterStarted = false;

window.addEventListener("scroll", () => {

    const heroStats = document.querySelector(".hero-stats");

    if (!heroStats) return;

    const position = heroStats.getBoundingClientRect().top;

    if (position < window.innerHeight && !counterStarted) {

        counterStarted = true;
        startCounters();

    }

});

// ================================
// RESULT CHECKER
// ================================

const results = {

    "458104": {
        name: "Anum Rashid",
        course: "Web Development",
        grade: "A",
        percentage: "91%"
    },

    "1001": {
        name: "Ali Khan",
        course: "Digital Marketing",
        grade: "A+",
        percentage: "95%"
    },

    "1002": {
        name: "Sara Ahmed",
        course: "Graphic Design",
        grade: "B+",
        percentage: "84%"
    },

    "1003": {
        name: "Hamza Ali",
        course: "Python Programming",
        grade: "A",
        percentage: "90%"
    }

};

const checkBtn = document.getElementById("checkResult");
const rollInput = document.getElementById("rollNumber");
const resultBox = document.getElementById("resultBox");

checkBtn.addEventListener("click", () => {

    const roll = rollInput.value.trim();

    resultBox.style.display = "block";

    if (results[roll]) {

        const student = results[roll];

        resultBox.innerHTML = `
            <strong>Name:</strong> ${student.name}<br>
            <strong>Course:</strong> ${student.course}<br>
            <strong>Grade:</strong> ${student.grade}<br>
            <strong>Percentage:</strong> ${student.percentage}
        `;

    } else {

        resultBox.innerHTML = `
            <span style="color:#e11d48;font-weight:600;">
                Result not found! Please enter a valid roll number.
            </span>
        `;

    }

});// ================================
// CONTACT FORM VALIDATION
// ================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 3) {
        alert("Please enter a valid name.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (subject.length < 3) {
        alert("Please enter a valid subject.");
        return;
    }

    if (message.length < 10) {
        alert("Message should contain at least 10 characters.");
        return;
    }

    alert("✅ Message sent successfully!");

    contactForm.reset();

});

// ================================
// LOGIN FORM (UI ONLY)
// ================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Login Successful! (Demo Only)");

    loginForm.reset();

});

// ================================
// SMOOTH SCROLL (Fallback)
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth"
        });

    });

});

// ================================
// CURRENT YEAR (Optional)
// ================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// ================================
// INITIALIZE
// ================================

window.addEventListener("load", () => {

    revealOnScroll();

    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    }

});

// ================================
// END OF SCRIPT
// ================================