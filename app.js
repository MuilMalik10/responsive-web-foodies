const mobileBtn = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');
const scrollBtn = document.querySelector('.scrollTop');

mobileBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop < 100) {
    scrollBtn.style.display = 'none';
  } else {
    scrollBtn.style.display = 'block';
  }
})

scrollBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
})