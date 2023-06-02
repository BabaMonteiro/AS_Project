let toggle = document.querySelector('.toggle');
let toggleBtn = document.querySelector('.btn-start');
let showContent = document.querySelector('.oflw');
let content = document.querySelector('.cnt-1');
menu.onclick = () => {
    navbar.classList.toggle('open');
}
toggleBtn.onclick = () => {
    toggle.style.opacity = "0";
    showContent.style.overflowY = "scroll";
    setTimeout(function() {toggle.style.display = "none";     content.style.opacity = "100";}, 550);
}