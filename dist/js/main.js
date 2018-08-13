
const showMobileMenu = document.querySelector('.toggle__container');

let showMenu = false;

showMobileMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        showMobileMenu.classList.add('close');

        showMenu = true;
    } else {
        showMobileMenu.classList.remove('close');

        showMenu = false;
    }
}