let menuBtn = document.querySelector(".menu-btn")
let navigation = document.querySelector("nav")

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    navigation.classList.toggle("hide");
    menuBtn.classList.toggle("change");
}