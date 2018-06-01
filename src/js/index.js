/* global hljs:true */

import browserHack from './include/browser';
import navTopStyle from './include/top';
import mobileMenu from './include/mobile-menu';
import lightBox from './include/lightbox';
import '../scss/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    browserHack();
    navTopStyle();
    mobileMenu();
    lightBox();
    hljs.initHighlightingOnLoad();
}, false);
