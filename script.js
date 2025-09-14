// step 1
let container = document.querySelector('.container')

let onlySixteenGrids, onlyOneGrid;
for (let i = 0; i < 16; i++) {
    onlySixteenGrids = document.createElement('div')
    onlySixteenGrids.style.cssText = "flex: 1; display: flex; flex-direction: column"
    for (let j = 0; j < 16; j++) {
        onlyOneGrid = document.createElement('div')
        onlyOneGrid.style.cssText = "border: 1px solid #bababaff; border-radius: 2px; flex: 1"
        onlySixteenGrids.appendChild(onlyOneGrid)
    }
    container.appendChild(onlySixteenGrids)
}