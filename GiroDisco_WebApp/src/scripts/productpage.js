const thumbnails = document.querySelectorAll('.photo-thumbnails img');
const mainPhoto = document.getElementById('main-photo');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const thumbnailSrc = thumbnail.getAttribute('src');
    const mainPhotoSrc = mainPhoto.getAttribute('src');

    thumbnail.setAttribute('src', mainPhotoSrc);
    mainPhoto.setAttribute('src', thumbnailSrc);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sellerLink = document.querySelector(".seller-link");
  const sellerName = document.querySelector(".seller-name").innerText;
  const sellerLocation = document.querySelector(".seller-location").innerText;
  

  sellerLink.addEventListener("click", function (event) {
    event.preventDefault();
    const profileUrl = sellerLink.getAttribute("href");
    const url = new URL(profileUrl, window.location.href);
    url.searchParams.set("firstName", sellerName);
    url.searchParams.set("location", sellerLocation);
    window.location.href = url.href;
  });
});