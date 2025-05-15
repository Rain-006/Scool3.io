const gallery = document.querySelectorAll('.container__gallery img');
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