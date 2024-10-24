const btnToggle = document.querySelector('.toggle');
const nav = document.querySelector('.navigation');

nav.classList.remove('navigation--nojs');

btnToggle.addEventListener('click', () => {
  if(nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  } else {
    nav.classList.add('navigation--closed');
    nav.classList.remove('navigation--opened');
  }
});
