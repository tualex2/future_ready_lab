/*eslint-env browser*/
function playGame(){
alert("Enter a low and a high number. Then guess the number between them.");

//get the low and high bounds
//uses parseInt() to make sure vars are integers
var from = parseInt(prompt("Enter the lower bound."));

var to = parseInt(prompt("Enter the higher bound."));

//get a random integer between [from,to]
//Math.random() returns decimals, Math.round() to get integers
var target = Math.round(Math.random() * (to - from) + from);

var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

var totalGuesses = 1;


//loop until user guesses target
while(currentGuess != target){
      if(currentGuess < target){
    currentGuess = parseInt(prompt("Enter a higher number"));
    
    totalGuesses++;
}
    else if(currentGuess > target){
    currentGuess = parseInt(prompt("Enter a lower number"));
    
    totalGuesses++;
}
}
    if(totalGuesses != 1){
    alert("It took you " + totalGuesses + " tries to get the number");
    }
    else{
    alert("It took you " + totalGuesses + " try to get the number");
    }
}