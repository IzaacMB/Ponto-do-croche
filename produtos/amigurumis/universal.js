const slider = document.querySelector('.slider-container');
const arrow = document.querySelector('.slider-arrow');
const images = ['imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg'];
let index = 0;

arrow.addEventListener('click', function() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  slider.querySelector('.slider-image').src = images[index];
});
