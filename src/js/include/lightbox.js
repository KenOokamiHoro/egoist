import nothing from './nothing';
import makeElement from './make-element';

const lbRoot = makeElement('div', {
    className: 'lightbox',
    onselectstart: nothing,
});

const lbImage = makeElement('img', {
    className: 'image',
    onselectstart: nothing,
});

let lightBoxOpened = false;

const noLightbox = (e) => {
    if (e.classList.contains('no-lightbox')) {
        return false;
    }
    return true;
};

const lightBoxClose = () => {
    lbRoot.className = 'lightbox lb-fadeout';
    setTimeout(() => {
        lightBoxOpened = false;
        document.body.removeChild(lbRoot);
    }, 300);
};

function lightBox() {
    if (!lightBoxOpened) {
        lightBoxOpened = true;
        lbRoot.className = 'lightbox';
        lbImage.src = this.src;
        lbImage.alt = this.alt;
        document.body.appendChild(lbRoot);
    }
}

lbRoot.appendChild(lbImage);
lbRoot.addEventListener('click', lightBoxClose, false);

export default () => {
    const imgElement = document.getElementsByClassName('content')[0].querySelectorAll('img');
    let articleImages = [];
    if (typeof Array.from === 'function') {
        articleImages = Array.from(imgElement).filter(noLightbox);
    } else {
        for (let i = 0; i < imgElement.length; i += 1) {
            articleImages[i] = imgElement[i];
        }
        articleImages = articleImages.filter(noLightbox);
    }
    articleImages.forEach((e) => {
        e.classList.add('lightbox-used');
        e.addEventListener('click', lightBox, false);
    });
};
