const favoritesList = document.getElementById('favorites-list');
const productBoxes = document.querySelectorAll('.product-box');

productBoxes.forEach((productBox) => {
  const heartIcon = productBox.querySelector('.product-fav');
  heartIcon.addEventListener('click', () => {
    const clonedProductBox = productBox.cloneNode(true);

    const clonedHeartIcon = clonedProductBox.querySelector('.product-fav');
    clonedHeartIcon.remove();
    
    favoritesList.appendChild(clonedProductBox);

  });
});