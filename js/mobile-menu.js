const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.header-burger');
const menuBtnClose = document.querySelector('.mobile-menu-close');
const menuItems = document.querySelectorAll('.mobile-menu-list a');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('is-scroll-disabled');
};

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', closeMenu);
});
