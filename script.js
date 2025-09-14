// step 1
// let container = document.querySelector('.container')
// step 3 :customGrids
let customGrids = document.querySelector('.customGrids')
customGrids.addEventListener('click', () => {
    let totalGrids;
    totalGrids = +prompt('enter number of grid')
    
    let container = document.querySelector('.container')
    let onlySixteenGrids, onlyOneGrid;
    for (let i = 0; i < totalGrids; i++) {
        onlySixteenGrids = document.createElement('div')
        onlySixteenGrids.style.cssText = "flex: 1; display: flex; flex-direction: column"
        for (let j = 0; j < totalGrids; j++) {
            onlyOneGrid = document.createElement('div')
            onlyOneGrid.classList.add('bgColor')
            onlyOneGrid.style.cssText = "border: 1px solid #bababaff; border-radius: 2px; flex: 1"
            onlySixteenGrids.appendChild(onlyOneGrid)
        }
        container.appendChild(onlySixteenGrids)
    }
    
    // step 2 : hover
    let gridsBgColor = document.querySelectorAll('.bgColor')
    gridsBgColor.forEach((gridBgColor) => {
        gridBgColor.addEventListener('mouseover',() => {
            gridBgColor.style.background = 'pink'
        })
    })
})
