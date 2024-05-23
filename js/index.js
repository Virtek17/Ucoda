const btnBurger = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.of');

btnBurger.addEventListener('click', function (e) {
   burgerMenu.classList.toggle('of');
   burgerMenu.classList.toggle('burger-navigation-on');
   btnBurger.classList.toggle('on');
})