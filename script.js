const container = document.querySelector(".container");
const newButton = document.querySelector(".newButton");
const resetButton = document.querySelector(".resetButton");

let gridPref = 10;
let boxSize = 30;
let containerWidth = (boxSize+2) * gridPref;
container.style.width = `${containerWidth}px`

function createSquares() {
    container.innerHTML = "";
    for (let i = 0; i < (gridPref*gridPref); i++){
        const square = document.createElement("div");
        square.style.width = `${boxSize}px`;
        square.style.height = `${boxSize}px`;
        square.style.backgroundColor ="#a8a4b5";
        square.style.border = "1px dotted gray";

        container.appendChild(square);

        square.addEventListener("mouseover", (event) => {
            // console.log("hover!")
            event.target.style.backgroundColor = "#fef900";
        })
        }
}

function resetGrid(){
    createSquares();
}

function newGrid(){
    gridPref = prompt('Whats your preferred grid?');
    
    if (gridPref <= 100){
        if (gridPref >= 32){
            boxSize = boxSize/2;
        }
        if (gridPref >= 64){
            boxSize = boxSize/4;
        }
        containerWidth = (boxSize+2) * gridPref;
        container.style.width = `${containerWidth}px`;
        container.style.maxWidth = "960px";
        
        console.log(gridPref, containerWidth);
        createSquares();
        boxSize = 30;
    }
    else{
        alert('Your Grid preference exceeds 100!')
    }
    
}

createSquares();

newButton.addEventListener("click", newGrid);
resetButton.addEventListener("click", resetGrid);

