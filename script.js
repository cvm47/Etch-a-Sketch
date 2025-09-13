// step 1
let container = document.querySelector('.container')

for (let i = 0; i < 16; i++) {
    let onlySixteenGrids = document.createElement('div')
    onlySixteenGrids.style.flex = '1'
    onlySixteenGrids.style.display = 'flex'
    onlySixteenGrids.style.flexDirection = 'column'
    for (let j = 0; j < 16; j++) {
        let onlyOneGrid = document.createElement('div')
        onlyOneGrid.style.border = '1px solid #acacacff'
        onlyOneGrid.style.borderRadius = '1px'
        onlyOneGrid.style.flex = '1'
        onlySixteenGrids.appendChild(onlyOneGrid)
    }
    container.appendChild(onlySixteenGrids)
}