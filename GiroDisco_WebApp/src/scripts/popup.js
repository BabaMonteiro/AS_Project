let user = document.querySelector('.user');
let cross = document.querySelector('.popup-close');
let popup = document.querySelector('.wrapper-popup');
let ovflw = document.querySelector('.oflw');
user.onclick = () =>{
    popup.style.display = "block";
    popup.style.opacity = "1";
    ovflw.style.overflowY = "hidden";
}
cross.onclick = () =>{
    popup.style.opacity = "0";
    setTimeout(function() {popup.style.display = "none";}, 550);
    ovflw.style.overflowY = "scroll";
}