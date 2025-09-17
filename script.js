// step 1
// let container = document.querySelector('.container')
// step 3 :customGrids
let gridSizeBtn = document.querySelector('.grid-size-btn')
let gridContainer = document.querySelector('.grid-container')
let totalGrids;
gridSizeBtn.addEventListener('click', () => {
    totalGrids = +prompt('enter number of grid')
    // clearing container at every click
    gridContainer.innerHTML = ''

    createGrid (totalGrids)
    

    // step 2 : hover
    applyHoverEffect('pink')

    // random rgb
    function getRandomRGB() {
        let red = Math.floor(Math.random() * (255 + 1))
        let green = Math.floor(Math.random() * (255 + 1))
        let blue = Math.floor(Math.random() * (255 + 1))
        return `rgb(${red}, ${green}, ${blue})`
    }

    let randomColorBtn = document.querySelector('.random-color-btn')
    randomColorBtn.addEventListener('click',() => {
        cells.forEach((cell) => {
            cell.addEventListener('mouseover', () => {
                cell.style.background = getRandomRGB()
            })
        })
    })
    
})

function createGrid(size) {
    let column,cell;
    for (let i = 0; i < size; i++) {
        column = document.createElement('div')
        column.style.cssText = "flex: 1; display: flex; flex-direction: column;"
        for (let j = 0; j < size; j++) {
            cell = document.createElement('div')
            cell.classList.add('cellBgColor')
            cell.style.cssText = 'flex: 1; border: 1px solid #e3e3e3ff'
            column.appendChild(cell)
        }
        gridContainer.appendChild(column)
    }
}

function applyHoverEffect(color) {
    let cells = document.querySelectorAll('.cellBgColor')
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            cell.style.background = color
        })
    });
}