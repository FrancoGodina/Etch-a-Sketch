const container = document.querySelector("#container");

function defaultGrid () {
    cols = 16;
    container.style.cssText = "display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); height: 600px; width: 600px; border: 5px solid black; margin: auto;";
    makeGrid(cols);
}

defaultGrid();

function pickCols () {
    let howmanyCols = prompt("How many columns would you like?(max:100)");

    return howmanyCols;
}

const clearGrid = document.querySelector("#clearGrid");
clearGrid.addEventListener("click", () => {
    reloadContainer();
    
})
const resizeGrid = document.querySelector("#resizeGrid");
resizeGrid.addEventListener("click", () => {
    newGrid();
})


function clearContainer() {
    container.innerText = "";
}

function reloadContainer() {
    clearContainer();
    makeGrid(cols);
}

function newGrid () {
    cols = pickCols();
    
    if (cols < 0) {
        alert ("Negative numbers are not allowed!")
        newGrid();
    }
    else if (cols > 100) {
        alert ("It's not allowed to go beyond 100!")
        newGrid();
    }
    else {
        container.style.cssText = "display: grid; grid-template-columns: repeat("+cols+", 1fr); grid-template-rows: repeat("+cols+", 1fr); height: 600px; width: 600px; border: 5px solid black; margin: auto;";
        clearContainer();
        makeGrid(cols);
    }
    
}
function makeGrid(cols) {

    for (i = 0; i < cols * cols; i++) {
        const box = document.createElement("div");
        container.appendChild(box);
        box.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "black";
        
        }, false);
    }
}

clearGrid.style.cssText = "background-color: red; border-radius: 12px; border: 2px red; color: white; padding: 16px 40px; font-size: 24px; margin: 10px; text-align: center; font-family: 'Orbitron', sans-serif;";

resizeGrid.style.cssText = "background-color: #4CAF50; border-radius: 12px; border: 2px #4CAF50; color: white; padding: 16px 40px; font-size: 24px; margin: 6px; text-align: center; font-family: 'Orbitron', sans-serif;";