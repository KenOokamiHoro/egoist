const overlay = document.createElement('div');
const mobileMenu = document.getElementsByTagName('nav')[0];
const mobileMenuBtn = document.getElementById('mobile-menu-btn');

const toggleMobileMenu = () => {
    overlay.classList.toggle('active');
    mobileMenu.classList.toggle('active');
};

export default () => {
    overlay.addEventListener('click', toggleMobileMenu, false);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu, false);
    overlay.className = 'overlay mobile-only';
    document.body.appendChild(overlay);
};
