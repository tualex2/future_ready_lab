/*eslint-env browser*/
function playGame(){
alert("Enter 2 numbers between 0 and 1000 as the lower and higher bounds. Then guess the number between them.");



//get the low and high bounds
//uses parseInt() to make sure vars are integers
var from = parseInt(prompt("Enter the lower bound."));
//from is within correct range


while(isNaN(from) || from < 0 || from == 1000 || from > 1000){
    from = parseInt(prompt("Enter a positive number that is less than 1000 as the lower bound."))
}


var to = parseInt(prompt("Enter the higher bound."));
//get the higher bound(max 1000) greater than lower bound

while(isNaN(to) || to < from || to == from || to > 1000){
    to = parseInt(prompt("Enter a number that is higher than " + from + "and not greater than 1000 as the upper bound"))
}

    
    
//get a random integer between [from,to]
//Math.random() returns decimals, Math.round() to get integers
var target = Math.round(Math.random() * (to - from) + from);

    
//
var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

var totalGuesses = 1;

//loop until user guesses target
while(currentGuess != target || currentGuess>to || currentGuess<from || isNaN(currentGuess)){
        if(currentGuess>to || currentGuess<from || isNaN(currentGuess)){
        currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));
    }
    if(currentGuess < target){
    currentGuess = parseInt(prompt("Guess a higher number"));
    
    totalGuesses++;
      }
    if(currentGuess > target){
    currentGuess = parseInt(prompt("Guess a lower number"));
    
    totalGuesses++;
    }

}
if(currentGuess == target){
    if(totalGuesses != 1){
    alert("It took you " + totalGuesses + " tries to get the number");
    }
    else{
    alert("It took you " + totalGuesses + " try to get the number");
    }
}
}