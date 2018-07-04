//define an object that describes a circle
/*
var circle = {
    diameter:80,
    xCoor: 0,
    yCoor: 0,
    color: [255,0,0],
    xSpeed: 10,//horizontal speed
    ySpeed: 10,//vertical speed
}
*/
function Ball(x,y,diameter, color, xSpeed, ySpeed){
    //this is a keyword that refers to the individual object
    this.xCoor = x; //starting x coordinate
    this.yCoor = y; //starting y coordinate
    this.diameter = diameter; //size of ball
    this.color = color; // "||" makes default color black
    this.xSpeed = xSpeed; //default horizontal speed 10
    this.ySpeed = ySpeed; //default vertical speed 10
}

function numberSet(set){
    var ballAmt = Math.floor(Math.random()*set.length);//gives a random number from the length of the array of possible number of balls
    return set[ballAmt];//returns the values 0,1,2, or 3
}

var ballAmount = numberSet([2,5,9,16]);//set of possible number of balls

var ballList = [];//empty array for Balls to be added

for(var c=0; c<ballAmount; c++){
    var ball = new Ball(0,0,80,[0,0,0],Math.floor(Math.random()*100),Math.floor(Math.random()*100));
    ballList = ballList.concat([ball]);
}

function promptForANumber(reason){//prompts for a number for reason
    var response = prompt("Give a number value for "+reason);
    while(isNaN(response)){//make sure response is number
        response = prompt("Give a number value for "+reason);
    }
    return parseInt(response);//returns integer
}

//setup is run once at the beginning before we draw
function setup() {
    frameRate(100);
    createCanvas(promptForANumber("width"),promptForANumber("height"));//determines width and height from the createCanvas
}

//animates the circle
function draw() {
    background([0,0,255]);
    for(var i=0; i < ballList.length; i++){
        fill(ballList[i].color);
        ellipse(ballList[i].xCoor, ballList[i].yCoor, ballList[i].diameter);
        if(ballList[i].xCoor > width){//if xCoor is too far to the right
            ballList[i].color = randomColor();//color is random
            ballList[i].xSpeed = -ballList[i].xSpeed;//change direction
        }else if(ballList[i].xCoor < 0){//if xCoor is too far to the left
            ballList[i].color = randomColor();//color is random
            ballList[i].xSpeed = -ballList[i].xSpeed;//change direction
        }
        ballList[i].xCoor += ballList[i].xSpeed;

        if(ballList[i].yCoor > height){//if yCoor is too far up
            ballList[i].diameter = randomNumber();//changes size randomly
            ballList[i].ySpeed = -ballList[i].ySpeed;//change direction
        }else if(ballList[i].yCoor < 0){//if yCoor is too far down
            ballList[i].diameter = randomNumber();//changes size randomly
            ballList[i].ySpeed = -ballList[i].ySpeed;//change direction
        }
        ballList[i].yCoor += ballList[i].ySpeed;
        
    }
}

function randomColor(){//randomizes the color of the circle
    return [random(0,255),random(0,255),random(0,255)];
}

function randomNumber(){//randomizes the a number between 1 and 100
    return random(1,100);
}
