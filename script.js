let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

// front end stuff

const columns = document.getElementsByClassName("column");
const turnText = document.getElementById("turn");
let player = "red";

function addDiv(color, target) {
    const newDiv = document.createElement("div");
    newDiv.className = "disc " + color;
    target.appendChild(newDiv);
}

handleClick = function (event) {
    const column = event.target;
    
    if (player == "red") {
        addDiv("red", column);
        board[5][column.id] = 1;
        player = "green";
        turnText.className = "green-text";
        turnText.innerHTML = "Green's Turn!";
        console.log(board);
    } else {
        addDiv("green", column);
        board[5][column.id] = 2;
        player = "red";
        turnText.className = "red-text";
        turnText.innerHTML = "Red's Turn!";
        console.log(board);
    }
}

for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click', handleClick);
}