
let d=document;
export default function setupMenu() {
    const navMenu = d.getElementById('nav-menu'),
          navToggle = d.getElementById('nav-toggle'),
          navClose = d.getElementById('nav-close');

    /* Menu show */
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
            console.log("Open");
        });
    }

    /* Menu hidden */
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            console.log("Close");
        });
    }
}
