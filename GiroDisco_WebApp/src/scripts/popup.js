//User Pop-up
let wrapper = document.querySelector('.wrapper-popup');
let openBtn = document.querySelector('.popup-open');
let closeBtn = document.querySelector('.popup-close');
let loginCnt = document.querySelector('#login-container');
let registerCnt = document.querySelector('#register-container');
let registerCmplt = document.querySelector('#register-containerComplete');
let registerBtn = document.querySelector('.signup-btn');
let createBtn = document.querySelector('.create-btn');

openBtn.onclick = () => {
    wrapper.style.display = "block";
    setTimeout(function() {wrapper.style.opacity = "1";}, 250);
}
closeBtn.onclick = () => {
    wrapper.style.opacity = "0";
    if(registerCmplt.style.display == "block"){
        setTimeout(function() { wrapper.style.display = "none";}, 550);
    }
    else{
        setTimeout(function() { wrapper.style.display = "none";
        loginCnt.style.display = "block";
        registerCnt.style.display = "none";
        }, 550);
    }
}
createBtn.onclick = () => {
    wrapper.style.opacity = "0";
    setTimeout(function() { wrapper.style.display = "none";
    loginCnt.style.display = "none";
    registerCnt.style.display = "none";
    registerCmplt.style.display = "block";
    }, 550);
}

//Register Swap
registerBtn.onclick = () => {
    loginCnt.style.display = "none";
    registerCnt.style.display = "flex";
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