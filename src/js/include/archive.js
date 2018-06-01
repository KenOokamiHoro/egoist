import makeElement from './make-element';

const aContainer = document.getElementById('archive-container');

export default () => {
    if (aContainer) {
        const request = new XMLHttpRequest();
        request.open('POST', '/control/get_list/post', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                const list = JSON.parse(request.responseText);
                const softedList = {};
                const domList = [document.createTextNode(`如今，本博客已经有 ${list.length} 篇文章了呢。`)];
                for (let i = 0; i < list.length; i += 1) {
                    const oneYear = Number(list[i].time.substr(0, 4));
                    if (typeof softedList[oneYear] === 'undefined') {
                        softedList[oneYear] = [];
                    }
                    softedList[oneYear].push(list[i]);
                }
                const softedTree = Object.keys(softedList);
                for (let i = softedTree.length - 1; i > -1; i -= 1) {
                    const domSubList = [];
                    const thisYear = softedList[softedTree[i]];
                    domList.push(makeElement('h2', {
                        textContent: `${softedTree[i]} 年`,
                    }));
                    for (let j = 0; j < thisYear.length; j += 1) {
                        domSubList.push(makeElement('li', {}, [
                            makeElement('a', {
                                href: `/post/${thisYear[j].name}`,
                                textContent: thisYear[j].title,
                            }),
                        ]));
                    }
                    domList.push(makeElement('ul', {}, domSubList));
                }
                while (aContainer.childNodes[0]) {
                    aContainer.removeChild(aContainer.childNodes[0]);
                }
                for (let i = 0; i < domList.length; i += 1) {
                    aContainer.appendChild(domList[i]);
                }
            } else {
                aContainer.textContent = `载入归档页面失败（${request.status}），请尝试刷新页面。`;
            }
        };
        request.onerror = () => {
            aContainer.textContent = '载入归档页面失败，请尝试刷新页面。';
        };
        aContainer.textContent = '归档页面载入中 ...';
        request.send();
    }
};
