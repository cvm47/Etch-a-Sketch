let gridSizeBtn = document.querySelector('.grid-size-btn')
let gridContainer = document.querySelector('.grid-container')

gridSizeBtn.addEventListener('click', () => {
    let size = +prompt('enter number of grid')
    if (size > 0 && size < 101) {
        clearGrid()
        createGrid (size)
        applyHoverEffect('pink')
        applyRandomColorMode()
    }
    else {
        alert('grid size should be in between 1 and 100')
    }
})

function createGrid(size) {
    let column,cell;
    for (let i = 0; i < size; i++) {
        column = document.createElement('div')
        column.classList.add('column')
        for (let j = 0; j < size; j++) {
            cell = document.createElement('div')
            cell.classList.add('cellBgColor')
            column.appendChild(cell)
        }
        gridContainer.appendChild(column)
    }
}
createGrid(16)

function applyHoverEffect(color) {
    let cells = document.querySelectorAll('.cellBgColor')
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            cell.style.background = color
        })
    });
}
applyHoverEffect('#333')

function applyRandomColorMode () {
    function getRandomRGB() {
        let red = Math.floor(Math.random() * (255 + 1))
        let green = Math.floor(Math.random() * (255 + 1))
        let blue = Math.floor(Math.random() * (255 + 1))
        return `rgb(${red}, ${green}, ${blue})`
    }

    let randomColorBtn = document.querySelector('.random-color-btn')
    randomColorBtn.addEventListener('click', () => {
        let cells = document.querySelectorAll('.cellBgColor')
        cells.forEach((cell) => {
            cell.addEventListener('mouseenter', () => {
                cell.style.background = getRandomRGB()
            })
        })
    })
}
applyRandomColorMode()

function clearGrid() {
    return gridContainer.innerHTML = ''
}