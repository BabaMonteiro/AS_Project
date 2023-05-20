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

const dropdowns = document.querySelectorAll('.drpdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.drpdown-menu');
    const options = dropdown.querySelectorAll('.drpdown-menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

//Product Box
const favs = document.querySelectorAll('.product-fav');
favs.forEach(fav => {
    fav.onmouseover = () => {
        fav.classList.toggle('fa-solid'); 
        fav.classList.toggle('fa-regular');
    }
    fav.onmouseout = () => {
        fav.classList.toggle('fa-solid');
        fav.classList.toggle('fa-regular');
    }

    fav.onclick = () => {
        fav.classList.toggle('fa-regular');
        fav.classList.toggle('fa-solid');
        fav.classList.add('.fav-toggle');
    }
});