const nav = document.querySelector('nav');
const links = document.querySelector('.links');
const menu = document.querySelector('.hamburger-menu');
const main = document.querySelector('main');

menu.addEventListener('click', toggleHamburgerMenu);

function toggleHamburgerMenu() {
    // toggles the hamburger menu variable to open / closed and enables / disables page scrolling accordingly
    nav.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll');

    // the variable gets updated after it's toggled
    const menuOpen = nav.classList.contains('menu-open');
    
    // if the these elements exists, it prevents them from being focused
    if (main) {
        main.inert = menuOpen;
    };

    // adds or removes the esc key event listener when the hamburger menu is open or closed
    if (menuOpen) {
        document.removeEventListener('keydown', escapeKeyPress);
    } else {
        document.addEventListener('keydown', escapeKeyPress);
    };
};

// listens for escape key while the hamburger menu is open
function escapeKeyPress(e) {
    if (e.key === 'Escape') {
        toggleHamburgerMenu();
    };
};