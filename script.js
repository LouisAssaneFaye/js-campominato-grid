const gridElement = document.getElementById('grid');

Button.addEventListener('click', function(){
    for (let index = 0; index < 100; index++) {
        const actualCell = createElement('div', 'cell');
        gridElement.appendChild(createElement('div', 'cell'))
    }
})

function createElement(tagName, className){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    return cellElement;
}

