const container = document.querySelector(".container");
const gridPref = 13;
const boxSize = 30;
let containerWidth = (boxSize+2) * gridPref;
container.style.width = `${containerWidth}px`
console.log(containerWidth)
// const userGridPref = prompt('Whats your preferred grid?');


function createSquares() {
    const square = document.createElement("div");
    square.style.width = `${boxSize}px`;
    square.style.height = `${boxSize}px`;
    square.style.backgroundColor ="#a8a4b5";
    square.style.border = "1px dotted gray";

    container.appendChild(square);

    square.addEventListener("mouseover", (event) => {
        console.log("hover!")
        event.target.style.backgroundColor = "#fef900";
    })
}


for (let i = 0; i < (gridPref*gridPref); i++){
    createSquares();
}


