function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("show");
}

document.addEventListener("click", function (event) {
    const nav = document.getElementById("navMenu");
    const button = document.querySelector(".menu-toggle");

    if (nav && button && !nav.contains(event.target) && !button.contains(event.target)) {
        nav.classList.remove("show");
    }
});
