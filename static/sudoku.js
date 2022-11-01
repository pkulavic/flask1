
var arr = document.getElementsByClassName("sudoku-cell");
for (let cell in arr) {
    // console.log(arr[cell]);
    // console.log(arr[cell].children[0].textContent);
}

let clues = [];
for (let i = 0; i < arr.length; ++i) {
    if (arr[i].children[0].textContent != '0') {
        clues.push(i);
    }
}

console.log("Hello world!");
console.log(arr.length)
// console.log(arr);

// Represents the position of the highlighted cell. 
var highlight = 0;

arr[0].classList.add("highlighted");
console.log(arr[0].classList);

document.addEventListener('keydown', keypress)


function keypress(event) {
    if (event.key == "ArrowDown") {
        down();
    }
}

function updateHighlight(new_pos) {
    if (clues.includes(highlight)) {
        arr[highlight].classList.remove("clue-highlighted");
    }
    else {
        arr[highlight].classList.remove("highlighted");
    }
    if (clues.includes(new_pos)) {
        arr[new_pos].classList.add("clue-highlighted");
    }
    else {
        arr[new_pos].classList.add("highlighted");
    }
    highlight = new_pos;
}

function down() {
    if (highlight % 9 == 8)
        return;
    else {
        updateHighlight(highlight + 1);
    }
}

function up() {
    if (highlight % 9 == 8)
        return;
    else {
        updateHighlight(highlight - 1);
    }
}

function right() {

}
