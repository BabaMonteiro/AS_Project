let menu = document.getElementById("menu-icon");
let navbar = document.getElementsByClassName(".navbar");

//Navbar scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 30);
});

menu.onclick = () => {
  navbar.classList.toggle("open");
};
