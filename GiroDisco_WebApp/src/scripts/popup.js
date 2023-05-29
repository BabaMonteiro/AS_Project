let wrapper = document.querySelector('.wrapper-popup');
let openBtn = document.querySelector('.popup-open');
let closeBtn = document.querySelector('.popup-close');

openBtn.onclick = () => {
    wrapper.style.display = "block";
    setTimeout(function() {wrapper.style.opacity = "1";}, 250);
}
closeBtn.onclick = () => {
    wrapper.style.opacity = "0";
    setTimeout(function() { wrapper.style.display = "none";}, 550);
}
