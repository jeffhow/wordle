// Create a variable to hold the secret.
// Const can't be changed later
const secret = "aback";

// create all the letters in uppercase
const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

// letters.split('') => This splits the letters into an Array
// a new Set is like an array, but only contains unique values
const alpha = new Set(letters.split(''));

// this is an array with three arrays inside it.
const keyboard = [
     // .split('') creates an array from the string
    "QWERTYUIOP".split(''), // ["Q", "W", "E", ... "P"]
    "ASDFGHJKL".split(''), 
    "ZXCVBNM".split('')
]

// attach a function to the browser window.
// when a key is released (keyup), the logkey() 
// function will be called
// the evt is "Keyup" and the callback function is "LogKey"
window.addEventListener('keyup', logKey);

// This is the code for the logKey function
// Whenever an event fires, and a callback is triggered
// that event is actually sent to the callback as a JS object.
function logKey(evt) { // evt is the event. 
    // all this stuff is the saved program
    // this runs every time logKey is called()
    console.log(evt);

    // check to see if the enter key was typed
    if (evt.key.toUpperCase() == "ENTER") {
        console.log('submit');
    }

    // check to see if the backspace was types
    if (evt.key.toUpperCase() == "BACKSPACE") {
        console.log('deleting');
    }

    // check to make sure a letter was typed.
    // Because alpha is a SET, we can use
    // the built in method .has() to check
    // if the set contains the key just pressed.
    if (alpha.has( evt.key.toUpperCase() )) {
        console.log(evt.key.toUpperCase());
    } else {
        // fun this if a non-letter key was pressed.
        console.log('not a letter');
    }
}

function render() {
    // This searches the HTML doc for 
    // <main id="root"></main>
    // then saves it in JS
    const main = document.querySelector('#root');
    let template = ``;
    
    for (let i = 0; i<keyboard.length; i++) {
        console.log(i, keyboard[i]);
    }
    
    main.innerHTML = template;

    console.log(main);
}

render();