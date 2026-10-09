//DOM:
const navlinks = document.querySelector(".nav-links");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
    if (navlinks.style.right === "0px") {
        navlinks.style.right = "-200px";
    } else {
        navlinks.style.right = "0px";
    }
});
////smooth scroling :
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});