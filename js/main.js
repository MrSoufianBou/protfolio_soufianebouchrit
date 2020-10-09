//Slect DOM Items

const menu_Btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menu_branding = document.querySelector('.menu-branding');
const menu_nav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State Of Menu

let showMenu = false;

menu_Btn.addEventListener('click', toggelMenu);

function toggelMenu() {

    if (!showMenu) {
        menu_Btn.classList.add('close');
        menu.classList.add('show');
        menu_nav.classList.add('show');
        menu_branding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        //set Menu State
        showMenu = true;
    } else {
        menu_Btn.classList.remove('close');
        menu.classList.remove('show');
        menu_nav.classList.remove('show');
        menu_branding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        //set Menu State
        showMenu = false;

    }
}

