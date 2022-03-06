const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

btn.addEventListener('click', () => {
    menu.classList.toggle("hidden");
    main.classList.toggle("hidden");
    footer.classList.toogle("hidden");
});