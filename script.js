//hamburger menu & no scroll start//
let wrapper = document.querySelector('.wrapper');
let menu = document.querySelector('.hamburger-menu');

menu.addEventListener('click', () => {
    wrapper.classList.toggle('active')
});

menu.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
});
//hamburger menu & no scroll end//