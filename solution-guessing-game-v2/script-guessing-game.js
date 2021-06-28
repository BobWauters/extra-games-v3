
//TODO: A secret number will be generated. To make things fair, the number should be between 1 and (learners in the class)                  DONE
//TODO: A user can enter a guess (what html element can be useful for this?)                                                                DONE
//TODO: When he or she pushes the "play" button, the number will be compared to the secret number
//TODO: Depending on the outcome, an alert box will show:
        // Awesome! You number (actual number) was correct. You can be named many things, hungry not being one of them.
        //Bummer... You guessed (guess) and the secret number was (secret number).




//declare max amount of random numbers (max 15 students)

function generateRandomInteger (max){
    return Math.floor(Math.random() * max) +1;
}

// declaration of variable

const secretNumber = generateRandomInteger(15);

console.log(secretNumber);


document.getElementById('userInputGuessLabel').innerHTML = 'Guess the right number between 1 - 15 to win';

//Play button input

document.getElementById("buttonSubmit").addEventListener("click", function (){
    const userInput = document.getElementById("userInput").value ;
    console.log(userInput);



//compare after click


if (userInput === secretNumber) {
    document.getElementById('result').innerHTML = ('whoop whoop ya got it right ' + userInput +' ');
} else {
    document.getElementById('result').innerHTML = ('Ya guessed wrong, ya answer be ' + userInput +' the right answer was ' + secretNumber + ' ' );
}


});