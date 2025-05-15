const gallery = document.querySelectorAll('.old-images__gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

// Открытие модального окна
gallery.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    currentIndex = index;
  });
});

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Просмотр предыдущей фотографии
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  modalImg.src = gallery[currentIndex].src;
});

// Просмотр следующей фотографии
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % gallery.length;
  modalImg.src = gallery[currentIndex].src;
});

// Закрытие по клику вне изображения
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});















//SLIDER
let currentSlide = 0;
let autoSlideInterval;
const slideDelay = 3000;
function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
    resetAutoSlide();
}
function autoSlide() {
    moveSlide(1);
}
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, slideDelay);
}
autoSlideInterval = setInterval(autoSlide, slideDelay);
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
    resetAutoSlide();
}
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}
let startX;
document.getElementById('slider').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
document.getElementById('slider').addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        moveSlide(1);
    } else if (endX - startX > 50) {
        moveSlide(-1);
    }
});
updateDots();