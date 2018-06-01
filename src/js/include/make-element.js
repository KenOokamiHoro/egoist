/**
 * 创建一个新的 DOM 对象，并为其设置参数
 * @param {string} e        希望创建的元素的标签名
 * @param {object} from     希望设置的参数
 * @param {array}  sub      希望向内部添加的子元素
 * @return {Node}         创建好的 DOM 元素
 */

export default (e, from = {}, sub = []) => {
    const target = document.createElement(e);
    const fromKeys = Object.keys(from);
    for (let i = 0; i < fromKeys.length; i += 1) {
        target[fromKeys[i]] = from[fromKeys[i]];
    }
    for (let i = 0; i < sub.length; i += 1) {
        target.appendChild(sub[i]);
    }
    return target;
};
