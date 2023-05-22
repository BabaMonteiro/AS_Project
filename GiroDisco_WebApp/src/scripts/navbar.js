let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

//Navbar scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 30);
});

menu.onclick = () => {
  navbar.classList.toggle("open");
};
