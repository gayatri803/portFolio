// Portfolio Website JavaScript

// Welcome message
console.log("Welcome to Gayatri's Portfolio");

// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});

// Current Year in Footer
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// Welcome Alert
window.addEventListener("load", () => {
    alert("Welcome to Gayatri Dahiwal's Portfolio!");
});

// Contact Button
const contactBtn = document.getElementById("contactBtn");

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        alert("Thank you for visiting my portfolio!");
    });
}
