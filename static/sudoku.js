
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

function startup() {
    updateHighlight(0);
}
startup();

let numbers = [];
for (let n = 1; n < 10; ++n) {
    numbers.push(n.toString(10));
}

let numberCodes = {};
for (let i = 1; i < 10; ++i) {
    numberCodes[i] = 48 + i;
}
console.log(numberCodes);

document.addEventListener('keydown', keypress)

function keypress(event) {
    if (event.key == "ArrowDown") {
        down();
    }
    if (event.key == "ArrowUp")
        up();
    if (event.key == "ArrowLeft")
        left();
    if (event.key == "ArrowRight")
        right();
    if (numbers.includes(event.key))
        number(event.key);
    if(event.key == "Backspace")
        remove();
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
    if (highlight % 9 == 0)
        return;
    else {
        updateHighlight(highlight - 1);
    }
}

function left() {
    if (Math.floor(highlight / 9) == 0)
        return;
    else
        updateHighlight(highlight - 9);
}

function right() {
    if (Math.floor(highlight/9) == 8)
        return;
    else
        updateHighlight(highlight + 9);
}

function number(num) {
    if (clues.includes(highlight))
        return;
    else
        arr[highlight].children[0].textContent = num;
        arr[highlight].children[0].classList.remove("blank");
        arr[highlight].children[0].classList.add("filled");
}

function remove() {
    if (clues.includes(highlight))
        return;
    else
    arr[highlight].children[0].classList.remove("filled");
    arr[highlight].classList.add("blank");
    updateHighlight(highlight);
    arr[highlight].children[0].textContent = 0;
}
