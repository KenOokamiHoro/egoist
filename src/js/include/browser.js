/* eslint off */

export default () => {
    let CSSContent = '';

    // 由于在非 webkit 系浏览器，使用圆角代码框配合没有圆角的滚动条会很难看，所以干脆去掉圆角（
    if (!('WebkitAppearance' in document.documentElement.style)) {
        CSSContent += 'main article .content pre code, .hljs { border-radius: 0 }';
    }

    if (CSSContent !== '') {
        const CSSElement = document.createElement('style');
        CSSElement.textContent = CSSContent;
        document.head.appendChild(CSSElement);
    }
};
