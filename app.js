const secret = "ABACK";

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
    let matches = [0,0,0,0,0];
    
    if (evt.key.toUpperCase() == "ENTER") {
        console.log('submit');
        if (attempt < 6 && tries[attempt].length == 5) {
            matches = evaluate(tries[attempt]);
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


    render(matches);
}

const keyboard = [
   "QWERTYUIOP".split(''),
   "ASDFGHJKL".split(''), 
   "ZXCVBNM".split('')
];
keyboard[2].unshift('ENTER');
keyboard[2].push('BACK');

function render( matches ) {
    console.log(matches)
    const main = document.querySelector('#root');
    let board = `<div class="board">`;

    for (let i=0; i<tries.length; i++) {
        for (let j=0; j<5; j++) {
            board += `<div class="match${matches[j]}">${ tries[i][j] ? tries[i][j] : "" }</div>`;
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

function evaluate(guess) {
    console.log(guess)
    let matches = [];
    for (let i=0; i<guess.length;i++) {
        let found = 0;
        console.log(guess[i], secret[i]);

        if (guess[i] == secret[i]) {
            found = 2;
        } else if (secret.includes(guess[i])) {
            found = 1;
        }
        matches.push(found);
    }
    return matches;
}


render([0,0,0,0,0]);