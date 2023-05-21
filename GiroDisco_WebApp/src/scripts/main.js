let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
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
//Navbar scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 30);
});

const dropdowns = document.querySelectorAll('.drpdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.drpdown-menu');
    const options = dropdown.querySelectorAll('.drpdown-menu li');
    const selected = dropdown.querySelector('.selected');

    //Filter plus
    const plusToggle = dropdown.querySelector('.plus-toggle');

    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
        //Filter plus
        if(caret.classList.contains('caret-plus')){
            plusToggle.classList.toggle('fa-plus');
            plusToggle.classList.toggle('fa-minus');
        }
    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            if(caret.classList.contains('caret-plus')){
            
            }
            else{
                selected.innerText = option.innerText;
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
            }

            if(option.classList.contains('active')){
                option.classList.remove('active');
            }
            else{
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.toggle('active');}
        });
    });
});

//Product Box
const favs = document.querySelectorAll('.product-fav');
favs.forEach(fav => {
    fav.onclick = () => {
        fav.classList.toggle('fa-solid');
        fav.classList.toggle('fav-toggle');
    }
});

const adds = document.querySelectorAll('.product-add');
adds.forEach(add => {
    add.onclick = () => {
        add.classList.toggle('fa-plus');
        add.classList.toggle('fa-check');
    }
});

//Price Range
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
progress = document.querySelector(".slider .progress");

let priceGap = 10;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value);

        if((maxVal - minVal >= priceGap) && maxVal <= 100){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            }
            else{
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        }

    });
});


rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }
            else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }

    });
});