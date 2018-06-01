const navTopStyle = () => {
    const header = document.getElementsByTagName('header')[0];
    const darkTop = document.getElementsByClassName('dark-top')[0];
    const homeImage = document.getElementsByClassName('index-bg')[0];
    const scroll = window.pageYOffset;
    if (scroll > homeImage.clientHeight / 2) {
        header.classList.remove('top');
        darkTop.classList.remove('top');
    } else {
        header.classList.add('top');
        darkTop.classList.add('top');
    }
};

export default () => {
    if (document.body.classList.contains('body-index')) {
        window.addEventListener('scroll', navTopStyle, false);
        navTopStyle();
    }
};
