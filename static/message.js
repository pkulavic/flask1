document.getElementById("message-label").addEventListener(onclick, message_input);

let text = document.getElementById("message-text");
let notes = document.getElementById("message-notes");

function message_input(event) {
    console.log('clicked');
    text.textContent = '|';
    notes.textContent = "Press return to send. Please include your email if you'd like.";
    text.addEventListener(keypress, update_message);
}

function update_message(event) {
    if (event.code > 47 && event.code < 91) {
        text.textContent += event.key;
    }
}

