const secret = "aback";
const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

const alpha = new Set(letters.split(''));


window.addEventListener('keyup', logKey);


function logKey(evt) {
    if (alpha.has( evt.key.toUpperCase() )) {
        console.log(evt.key.toUpperCase());
    } else {
        console.log('not a letter');
    }
}

