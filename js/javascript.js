const gridContainer = document.querySelector(".grid-container");
const gridInput = document.querySelector(".grid-input");
const createButton = document.querySelector(".create-button");
const rgbButton = document.querySelector(".rgb-button");
const blackButton = document.querySelector(".black-button");
const darkButton = document.querySelector(".dark-button");
let currentMode = 0;
let currentOpacity = 0;

function verifyGridSize(){
    if (gridInput.value > 100) {
        gridInput.value = 100;
    }
    else if (gridInput.value < 1) {
        gridInput.value = 1;
    }
}

function getRandomColor(max) {
    let r = Math.floor(Math.random()*(max+1));
    let g = Math.floor(Math.random()*(max+1));
    let b = Math.floor(Math.random()*(max+1));
    const color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}

function createGrid(mode) {
    gridContainer.innerHTML = "";
    verifyGridSize();
    let columnValue = gridInput.value;
    let boxesValue = gridInput.value;
    
    const grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.appendChild(grid);
    let boxSize = 700/boxesValue + 'px';

    for (let columnCounter = 0; columnCounter < columnValue; columnCounter++) {
        const column = document.createElement("div");
        column.classList.add("column");
        grid.appendChild(column);
        
        for (let boxCounter = 0; boxCounter < boxesValue; boxCounter++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.height = boxSize;
            box.style.width = boxSize;

            switch(mode) {
            case 0:
                box.addEventListener("mouseover", () => {
                box.style.background = "black";
                });
                break;
            case 1: 
                box.addEventListener("mouseover", () => {
                box.style.background = getRandomColor(255);
                });
                break;
            case 2: 
                box.addEventListener("mouseover", () => {
                currentOpacity += 0.001;
                box.style.opacity = currentOpacity;
                box.style.background = "black";
                });
                break;
            }
            column.appendChild(box);
        }
    }
}

createButton.addEventListener("click", () => {
    createGrid(currentMode);
});

blackButton.addEventListener("click", () => {
    currentMode = 0;
    createGrid(currentMode);
});

rgbButton.addEventListener("click", () => {
    currentMode = 1;
    createGrid(currentMode);
});

darkButton.addEventListener("click", () => {
    currentMode = 2;
    currentOpacity = 0;
    createGrid(currentMode);
});