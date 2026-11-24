const header = document.querySelector("#main-header");
const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
    header.classList.toggle("dark-theme");

    if (header.classList.contains("dark-theme")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});
