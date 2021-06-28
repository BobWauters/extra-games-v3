// 1. Create the HTML you need
//     - Three buttons for the player to choose from            ✌️      ✊           ✋
//     - Player button to trigger the computer's turn
//     - A message we can use to show the result. Put some temporary content ([a random message]()http://www.cupcakeipsum.com) there to test the styling
// 2. Add some *basic* styling for those
// 3. Figure out a way to know when the "play" button was clicked (tip: you'll need `events` in JavaScript for that, and you'll need to `handle` those)
// 4. Next up, we want to determine the computer's choice
//     - How many choices does the computer have? What can be a suitable datatype to store multiple things?
//     - How can you select a random element from these choices? The math options in JavaScript might help you here
// 5. Determine the payers result: draw / win / lose. It's okay if this involves a lot of conditional statements (if)
// 6. Depending on the result, change the `inner html` (hint hint) of the message to congratulate or comfort the player


function getComputerChoice() {
    return Math.floor((Math.random() * 5) + 1);
}



let userChoiceID = '';

window.onload = () => {
    // your code here
}

const output = document.querySelector('#output');

const userOptions = document.querySelectorAll('.user-option');

userOptions.forEach(el => el.addEventListener('click', event => {
    userChoiceID = event.target.id;
}));

playButton.addEventListener('click', () => {
})

const computerChoiceID = getComputerChoice();
const computerChoice = OPTIONS[computerChoiceID];
const computerChoiceElement = document.querySelector('#computer-choice');
const output = document.querySelector('#output');
const userChoice = OPTIONS[userChoiceID];

let result = '';

computerChoiceElement.innerHTML = OPTIONS2EMOJI[computerChoiceID];



const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';
const SPOCK = 'SPOCK';
const LIZARD = 'LIZARD';
const OPTIONS = {
    1: ROCK,
    2: SCISSORS,
    3: PAPER,
    4: SPOCK,
    5: LIZARD
};
const OPTIONS2EMOJI = {
    1: '⛰️',
    2: '✂️',
    3: '🧻',
    4: '🖖',
    5: '🦎'
};
const playButton = document.querySelector('#play');

switch (`${computerChoice}-${userChoice}`) {
    case `${ROCK}-${ROCK}`:
    case `${SCISSORS}-${SCISSORS}`:
    case `${PAPER}-${PAPER}`:
    case `${SPOCK}-${SPOCK}`:
    case `${LIZARD}-${LIZARD}`:
        result = 'TIE 👔'
        break;
    case `${ROCK}-${SCISSORS}`:
    case `${ROCK}-${LIZARD}`:
    case `${SCISSORS}-${PAPER}`:
    case `${SCISSORS}-${LIZARD}`:
    case `${PAPER}-${ROCK}`:
    case `${PAPER}-${SPOCK}`:
    case `${SPOCK}-${ROCK}`:
    case `${SPOCK}-${SCISSORS}`:
    case `${LIZARD}-${PAPER}`:
    case `${LIZARD}-${SPOCK}`:
        result = 'COMPUTER WIN 😔💔 🤖🥇'
        break;
    case `${ROCK}-${PAPER}`:
    case `${ROCK}-${SPOCK}`:
    case `${SCISSORS}-${ROCK}`:
    case `${SCISSORS}-${SPOCK}`:
    case `${PAPER}-${SCISSORS}`:
    case `${PAPER}-${LIZARD}`:
    case `${SPOCK}-${PAPER}`:
    case `${SPOCK}-${LIZARD}`:
    case `${LIZARD}-${ROCK}`:
    case `${LIZARD}-${SCISSORS}`:
        result = 'YOU WIN ☺️🥇 🤖💔'
        break;
    default:
        result = 'SOMETHING WRONG. TRY AGAIN. 🐛'
}

output.innerHTML = result;