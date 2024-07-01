let wrapper = document.querySelector('.wrapper');
let menu = document.querySelector('.hamburger-menu');

//opens hamburger menu
menu.addEventListener('click', () => {
    wrapper.classList.toggle('active')
});

//disable scroll when nav menu is open
menu.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
});