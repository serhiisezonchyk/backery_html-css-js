const header = document.querySelector('.header');
window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('nav-active');
    } else {
        header.classList.remove('nav-active');
    }
};