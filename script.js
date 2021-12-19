// mobile navbar menu

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// modal

const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

// click events

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
// clicking the close button to exit
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
// clicking outside the modal to exit
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});