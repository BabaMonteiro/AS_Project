//User Pop-up
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
//
//Mbway Pop-up
let wrapper2 = document.querySelector('#wrapper-popup2');
let openBtn2 = document.querySelector('.popup-open2');
let closeBtn2 = document.querySelector('#popup2-close');

openBtn2.onclick = () => {
    wrapper2.style.display = "flex";
    setTimeout(function() {wrapper2.style.opacity = "1";}, 250);
}
closeBtn2.onclick = () => {
    wrapper2.style.opacity = "0";
    setTimeout(function() { wrapper2.style.display = "none";}, 550);
}
//User Pop-up
let wrapper3 = document.querySelector('#wrapper-popup3');
let openBtn3 = document.querySelector('.popup-open3');
let closeBtn3 = document.querySelector('#popup3-close');

openBtn3.onclick = () => {
    wrapper3.style.display = "flex";
    setTimeout(function() {wrapper3.style.opacity = "1";}, 250);
}
closeBtn3.onclick = () => {
    wrapper3.style.opacity = "0";
    setTimeout(function() { wrapper3.style.display = "none";}, 550);
}