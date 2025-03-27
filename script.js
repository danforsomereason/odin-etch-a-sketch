let size = 25;
let containerSize = size * 10;

// create container

const container = document.createElement('div');
container.classList.add("container");
container.setAttribute("style",
    `outline: 1px solid lime; display: flex; flex-wrap: wrap; width: ${containerSize}px; margin: auto;`
)
document.body.prepend(container);


// create grid of divs
    for(let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
        row.setAttribute("style", `display:flex; width: 100%`);
        container.appendChild(row);
        for(let j = 0; j < size; j++) {
            const square = document.createElement('div');
            // square.classList.toggle("square");
            square.setAttribute("style", `outline: 1px solid black; margin: 0; height: 10px; width: 10px;`);
            row.appendChild(square);

            square.addEventListener("mousemove", ()=> {
                square.classList.add("filled");
            })
        }
    }


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
        containerSize = size * 10;
        console.log(size);
        
    }
})


