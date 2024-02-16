const secret = "aback";

const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
const alpha = new Set(letters.split(''));

let tries = [
    [],
    [],
    [],
    [],
    [],
    [], // 6 tries
];

let attempt = 0;

window.addEventListener('keyup', logKey);

function logKey(evt) { 
    console.log(evt);

    if (evt.key.toUpperCase() == "ENTER") {
        console.log('submit');
        if (attempt < 6 && tries[attempt].length == 5) {
            attempt++;
        }
    }

    if (evt.key.toUpperCase() == "BACKSPACE") {
        console.log('deleting');
        tries[attempt].pop();
    }

    if (alpha.has( evt.key.toUpperCase() )) {
        // console.log(evt.key.toUpperCase());
        if (tries[attempt].length < 5) {
            tries[attempt].push( evt.key.toUpperCase() )
        }
    } else {
        console.log('not a letter');
    }
    render();
}

const keyboard = [
   "QWERTYUIOP".split(''),
   "ASDFGHJKL".split(''), 
   "ZXCVBNM".split('')
];
keyboard[2].unshift('ENTER');
keyboard[2].push('BACK');

function render() {
    const main = document.querySelector('#root');
    let board = `<div class="board">`;

    for (let i=0; i<tries.length; i++) {
        for (let j=0; j<5; j++) {
            board += `<div>${ tries[i][j] ? tries[i][j] : "" }</div>`;
        }
    }
    board += `</div>`;

    let keyTemplate = `<div class="keyboard">`;
    
    for (let i = 0; i<keyboard.length; i++) {
        keyTemplate += `<div class="row">`;
        for (let j=0; j<keyboard[i].length; j++) {
            keyTemplate += `<div class="key">${ keyboard[i][j] }</div>`
        }
        keyTemplate += `</div>`;
    }

    keyTemplate += `</div>`;
    
    let template = board + keyTemplate;

    main.innerHTML = template;

    console.log(main);
}

render();