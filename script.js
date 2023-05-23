const gridElement = document.getElementById('grid');
const button = document.querySelector('button.button');

button.addEventListener('click', function() {
    for (let index = 0; index < 100; index++) {
        const actualCell = createElement('div', 'cell');
        gridElement.appendChild(actualCell);
        actualCell.addEventListener('click', function(){
            actualCell.classList.toggle('selected');
        });
    }
    button.className = 'disabled';
})

function createElement(tagName, className){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    return cellElement;
}



