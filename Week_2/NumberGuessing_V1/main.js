/*eslint-env browser*/
function playGame(){
alert("Enter 2 numbers between 0 and 1000 as the lower and higher bounds. Then guess the number between them.");



//get the low and high bounds
//uses parseInt() to make sure vars are integers
var from = parseInt(prompt("Enter the lower bound."));
//from is within correct range

while(!isNaN(from)){
    while(from < 0 || from == 1000 || from > 1000){
    while(from < 0){
        if(from < 0){
    from = parseInt(prompt("Enter a number at least 0 as the lower bound."))
}}
    while(from == 1000){
        if(from == 1000){
    from = parseInt(prompt("Enter a number less than 1000 as the lower bound."))
}}
    while(from > 1000){
        if(from > 1000){
    from = parseInt(prompt("Enter a number less than 1000 as the lower bound."))
}}}
}

var to = parseInt(prompt("Enter the higher bound."));
//get the higher bound(max 1000) greater than lower bound

    while(to < from || to == from || to > 1000){
    while(to < from){
        if(to < from){
    to = parseInt(prompt("Enter a number higher than the lower bound as the higher bound."));
}}
    while(to == from){
        if(to == from){
    to = parseInt(prompt("Enter a number higher than the lower bound as the higher bound."));
}}
    while(to > 1000){
        if(to > 1000){
    to = parseInt(prompt("Enter a number(max:1000) as the higher bound."))
}}}

    
    
//get a random integer between [from,to]
//Math.random() returns decimals, Math.round() to get integers
var target = Math.round(Math.random() * (to - from) + from);

var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));
while(currentGuess>to){
    if(currentGuess>to){
    currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to))
        
        totalGuesses++;
}
}
while(currentGuess<from){
    if(currentGuess<from){
    currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to))
        
        totalGuesses++;
}
}
    
var totalGuesses = 1;


//loop until user guesses target
while(currentGuess != target){
      if(currentGuess < target){
    currentGuess = parseInt(prompt("Guess a higher number"));
    
    totalGuesses++;
}
    else if(currentGuess > target){
    currentGuess = parseInt(prompt("Guess a lower number"));
    
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
