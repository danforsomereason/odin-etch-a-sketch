let size = 64;

// create container
const container = document.createElement('div');
container.classList.add("container");
container.setAttribute("style",
    `border: 1px solid black; display: flex; flex-wrap: wrap; width: 400px; height: 400px; margin: auto;`
)
document.body.prepend(container);


// create grid of divs
function generateSquares(size){
    container.replaceChildren();
    for(let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
        row.setAttribute("style", `display:flex; width: 100%`);
        container.appendChild(row);
        for(let j = 0; j < size; j++) {
            const square = document.createElement('div');
            // square.classList.toggle("square");
            square.setAttribute("style", `margin: 0; width: 100%;`);
            row.appendChild(square);

            square.addEventListener("mouseover", (e) => {
                let randomColor = Math.floor(Math.random() * 360);
                let random100 = Math.floor(Math.random() * 101);
                console.log("Target: ", e.target)
                e.target.style.background = `hsl(${randomColor}deg, ${random100}%, ${random100}% )`;
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
    } else if (size > 100){
        alert("You must enter a number between 2 and 100")
    } else {
        console.log("Result of listener: ", size);
        generateSquares(size);
    }
})


