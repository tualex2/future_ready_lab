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
    this.color = color; 
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
}

function numberSet(set){
    var ballAmt = Math.floor(Math.random()*set.length);//gives a random number from the length of the array of possible number of balls
    return set[ballAmt];//returns the values 0,1,2,or 3
}

var ballAmount = numberSet([2,5,9,16]);//set of possible number of balls

var ballList = [];//empty array for Balls to be added

for(var c=0; c<ballAmount; c++){
    var ball = new Ball(Math.random()*100,Math.random()*100,80,[0,0,0],Math.floor(Math.random()*20),Math.floor(Math.random()*20));//randomizes size, and speed of balls
    ballList = ballList.concat([ball]);//adds the new ball to the ballList
}

function promptForANumber(reason){//prompts for a number for reason
    var response = prompt("Give a number value for "+reason);
    while(isNaN(response)){//make sure response is number
        response = prompt("Give a number value for "+reason);
    }
    return parseInt(response);//returns integer
}

function setup() {//setup is run once at the beginning before we draw
    frameRate(10);
    createCanvas(promptForANumber("width"),promptForANumber("height"));//determines width and height from the createCanvas
}

function draw() {//animates circle
    background([0,0,200]);//makes background blue after every draw so no trail is left
    for(var i=0; i < ballList.length; i++){
        fill(ballList[i].color);//ball color
        ellipse(ballList[i].xCoor, ballList[i].yCoor, ballList[i].diameter);
        
        
        if(ballList[i].xCoor > width){//if xCoor is too far to the right
            ballList[i].color = randomColor();//color is random
            ballList[i].xSpeed = -ballList[i].xSpeed;//change direction
        }else if(ballList[i].xCoor < 0){//if xCoor is too far to the left
            ballList[i].color = randomColor();//color is random
            ballList[i].xSpeed = -ballList[i].xSpeed;//change direction
        }
    

        if(ballList[i].yCoor > height){//if yCoor is too far up
            ballList[i].diameter = randomNumber();//changes size randomly
            ballList[i].ySpeed = -ballList[i].ySpeed;//change direction
        }else if(ballList[i].yCoor < 0){//if yCoor is too far down
            ballList[i].diameter = randomNumber();//changes size randomly
            ballList[i].ySpeed = -ballList[i].ySpeed;//change direction
        }
        
        if(ballList[i].xCoor<0 && ballList[i].xSpeed<0){//if ball is off the screen and moving away from screen
            ballList[i].xSpeed = -ballList[i].xSpeed;//change direction to get back onto canvas
        }
        if(ballList[i].yCoor<0 && ballList[i].ySpeed<0){//if ball is off the screen and moving away from screen
            ballList[i].ySpeed = -ballList[i].ySpeed;//change direction to get back onto canvas
        }
        if(ballList[i].xCoor>width && ballList[i].xSpeed>0){//if ball is off the screen and moving away from screen
            ballList[i].xSpeed = -ballList[i].xSpeed;//change direction to get back onto canvas
        }
        if(ballList[i].yCoor>height && ballList[i].ySpeed>0){//if ball is off the screen and moving away from screen
            ballList[i].ySpeed = -ballList[i].ySpeed;//change direction to get back onto canvas
        }

       
        for(var diff1Ball=0;diff1Ball<ballList.length;diff1Ball++){//identifies a single ball
            for(var diff2Ball=diff1Ball+1;diff2Ball<ballList.length;diff2Ball++){//identifies another ball
                
                if(touching(ballList[diff1Ball],ballList[diff2Ball])){
                    
                    var rightBall = ballList[diff1Ball];//make variable
                    var leftBall = ballList[diff2Ball];//make variable

                    if(rightBall.xCoor<leftBall.xCoor){//determine which ball is to the right
                        rightBall = ballList[diff2Ball];//redefine variable
                        leftBall = ballList[diff1Ball];//redefine variable
                    }

                    if(rightBall.xSpeed<0){
                        rightBall.xSpeed = -rightBall.xSpeed;//change direction
                    }
                    if(leftBall.xSpeed>0){
                        leftBall.xSpeed = -leftBall.xSpeed;//change direction
                    }

                    var higherBall = ballList[diff1Ball];
                    var lowerBall = ballList[diff2Ball];

                    if(higherBall.yCoor<lowerBall.yCoor){//determine which ball is higher
                        higherBall = ballList[diff2Ball];//redefine variable
                        lowerBall = ballList[diff1Ball];//redefine variable
                    }
                    if(higherBall.ySpeed<0){
                        higherBall.ySpeed = -higherBall.ySpeed;//change direction
                    }
                    if(lowerBall.ySpeed>0){
                        lowerBall.ySpeed = -lowerBall.ySpeed;//change direction
                    }
                }
            }
        }
        
        
        
        ballList[i].yCoor += ballList[i].ySpeed;//moves ball vertically
        ballList[i].xCoor += ballList[i].xSpeed;//moves ball horizontally
    }
}

function touching(ball1,ball2){
    var radius = ball1.diameter/2 + ball2.diameter/2;
    var distanceBtwnCenters = distance(ball1.xCoor,ball1.yCoor,ball2.xCoor,ball2.yCoor);
    if(distanceBtwnCenters<=radius){
        return true
    }else{
        return false
    }
}

function distance(x1,y1,x2,y2){
    return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
}

function randomColor(){//randomizes the color of the circle
    return [random(0,255),random(0,255),random(0,255)];
}

function randomNumber(){//randomizes the a number between 1 and 100
    return random(10,100);
}
