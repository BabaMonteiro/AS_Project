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
