let size = 64;
let squareWidth = (size) => {
    let squares = size * size;
    console.log("Number of squares: ", squares);
    let squareArea = Math.floor(160000 / squares);
    console.log("Area of each square: ", squareArea);
    let squareWidth = Math.floor(Math.sqrt(squareArea));
    console.log("Width of each square: ", squareWidth);
    return squareWidth;
}

// create container
const container = document.createElement('div');
container.classList.add("container");
container.setAttribute("style",
    `outline: 1px solid lime; display: flex; flex-wrap: wrap; width: 400px; height: 400px; margin: auto;`
)
document.body.prepend(container);


// create grid of divs
function generateSquares(size){
    const side = squareWidth(size);
    for(let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
        row.setAttribute("style", `display:flex; width: 100%`);
        container.appendChild(row);
        for(let j = 0; j < size; j++) {
            const square = document.createElement('div');
            // square.classList.toggle("square");
            square.setAttribute("style", `outline: 1px solid black; margin: 0; height: ${side}px; width: ${side}px;`);
            row.appendChild(square);

            square.addEventListener("mousemove", ()=> {
                square.classList.add("filled");
            })
        }
    }
}

window.addEventListener("load", ()=> {
    generateSquares(size);
})

// create buttons
const changeSizeBtn = document.createElement('button');
changeSizeBtn.textContent = "Change Size";
document.body.prepend(changeSizeBtn);


changeSizeBtn.addEventListener('click', ()=> {
    size = prompt("Enter number of squares per side (must be between 2 and 100)");
    if(size === null || size < 2) {
        alert("You must enter a valid number");
    } else if (size > 99){
        alert("You must enter a number between 2 and 100")
    } else {
        container.remove();
        createContainer();
        generateSquares(size);
        console.log("Result of listener: ", size, squareWidth);
    }
})


