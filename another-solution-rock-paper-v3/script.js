
/** Set score variables */
let humanScore = 0;
let aiScore = 0;
let result = 'Start';

/** Show score */
function showScore() {

    document.getElementById("playerScore").innerText = humanScore;
    document.getElementById("aiScore").innerText = aiScore;
    document.getElementById("result").innerText = result;

}

/** Start Game and output results */
function playGame(humanInput) {

    let humanSelection = humanInput.textContent;
    let aiSelection = getAiSelection();
    let result = calcResult(humanSelection, aiSelection);
    document.getElementById("vstext").innerText = humanSelection + ' VS ' + aiSelection;
    showScore();

}

/** AI Selection */
function getAiSelection() {

    const options = ['rock', 'paper', 'scissors'];
    let aiSelector = options[Math.floor(Math.random()*options.length)];
    return aiSelector;

}

/** Determine game results */
function calcResult(human, ai) {

    if (human === ai) {
        result = 'Draw'
        return;
    } else if ((human === 'rock' && ai === 'scissors') || (human === 'paper' && ai === 'rock') || (human === 'scissors' && ai === 'paper')) {

        humanScore += 1;

        if (humanScore == 10){
            result = "Human is the winner!";
            endgame();
        } else {
            result = 'Wins'
            return;
        }

    } else {
        aiScore += 1;

        if (aiScore == 10){
            result = 'AI is the Winner'
            endgame();
        } else {
            result = 'Lose'
            return;
        }

    }

}

function endgame(){

    var ele = document.getElementById('startgame');
    ele.remove();
    document.getElementById("endgame").style.display = "block";
    showScore();

}







































/*
let result = 'Start';
let humanScore = 0;
let aiScore =0;

function playGame (humanInput){

    let humanSelection = humanInput.textContent;
    let aiSelection = getAiSelection();

}

function getAiSelection(){
    const options = ['✊', '✋', '✌'];
    let aiSelector = options[Math.floor(Math.random()*options.length)];
    return aiSelector;
}

function calcResult (human, ai){
    if (human == ai){
        result='Draw'
        return;
    } else if ((human === '✊' && ai === '✌')
        || (human === '✋' && ai === '✊')
        || (human ==='✌' && ai === '✋')){
    }
    humanScore +=1;

    if (humanScore ==10){
        result= "Human is the winner!";
        endgame();
    } else {
        result ='Wins'
        return;
    }

}
*/