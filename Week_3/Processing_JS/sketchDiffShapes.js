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

function Ball(x, y, diameter, color, xSpeed, ySpeed){
    //this is a keyword that refers to the individual object
    this.xCoor = x; //starting x coordinate
    this.yCoor = y; //starting y coordinate
    this.diameter = diameter; //size of ball
    this.color = color; //start color
    this.xSpeed = xSpeed;//horizontal speed
    this.ySpeed = ySpeed;//vertical speed
}

function triangle(x1,y1,x2,y2,x3,y3,color,xSpd,ySpd){
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
    this.x3=x3;
    this.y3=y3;
    this.color=color;
    this.xSpd=xSpd;
    this.ySpd=ySpd;
}

function numberOfShapes(){
    var possibleAMT = [2,5,9,16];//defines the array
    return random(possibleAMT);//chooses a random number from array possibleAMT
}

   var ballList = [];//empty array for Balls to be added


function promptForANumber(reason){//prompts for a number for reason
    var response = prompt("Give a number value for "+reason);
    while(isNaN(response)){//make sure response is number
        response = prompt("Give a number value for "+reason);
    }
    return parseInt(response);//returns integer
}

function setup() {//setup is run once at the beginning before we draw
    frameRate(20);
    createCanvas(promptForANumber("width"),promptForANumber("height"));//determines width and height from the createCanvas
    
    var ballAmount = numberOfShapes();//set of possible number of balls
    
    if(random(1,4)>2){
        for(var c=0; c<ballAmount; c++){
            var ball = new Ball(random(1,width-1),random(1,height-1),80,[0,0,0],random(1,10),random(1,10));//randomizes size, and speed of balls
            ballList = ballList.concat([ball]);//adds the new ball to the ballList
        }
    }else{
        for(var d=0; d<ballAmount; c++){
            var triBall = new triangle(random(1,width-1),random(1,height-1),random(1,width-1),random(1,height-1),random(1,width-1),random(1,height-1),[0,0,0],random(1,10),random(1,10));//creates new triangles w/ random size/speed/position
            ballList=ballList.concat([triBall]);
        }
    }
}

function draw() {//animates circle
    background([0,0,200]);//makes background blue after every draw so no trail is left
    
    
    if(ballList[1]=(Ball){
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
                ballList[i].diameter = random(1,100);//changes size randomly
                ballList[i].ySpeed = -ballList[i].ySpeed;//change direction
            }else if(ballList[i].yCoor < 0){//if yCoor is too far down
                ballList[i].diameter = random(1,100);//changes size randomly
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
                                rightBall.xSpeed = -(rightBall.xSpeed + leftBall.xSpeed)/2;//change direction and averages speed
                            }
                            if(leftBall.xSpeed>0){
                                leftBall.xSpeed = -(leftBall.xSpeed + rightBall.xSpeed)/2;//change direction and averages speed
                            }

                            var higherBall = ballList[diff1Ball];
                            var lowerBall = ballList[diff2Ball];

                            if(higherBall.yCoor<lowerBall.yCoor){//determine which ball is higher
                                higherBall = ballList[diff2Ball];//redefine variable
                                lowerBall = ballList[diff1Ball];//redefine variable
                            }
                            if(higherBall.ySpeed<0){
                                higherBall.ySpeed = -(higherBall.ySpeed + lowerBall.ySpeed)/2;//change direction and averages speed
                            }
                            if(lowerBall.ySpeed>0){
                                lowerBall.ySpeed = -(higherBall.ySpeed + lowerBall.ySpeed)/2;//change direction and averages speed
                            }
                        if(ballList[diff1Ball].xSpeed != -ballList[diff2Ball].xSpeed && ballList[diff1Ball.ySpeed != -ballList[diff2Ball].ySpeed]){//if the 2 balls are not colliding face to face, ie they hit on the side
                            var rightBall = ballList[diff1Ball];//make variable
                            var leftBall = ballList[diff2Ball];//make variable

                            if(rightBall.xCoor<leftBall.xCoor){//determine which ball is to the right
                                rightBall = ballList[diff2Ball];//redefine variable
                                leftBall = ballList[diff1Ball];//redefine variable
                            }

                            if(rightBall.xSpeed<0){
                                rightBall.xSpeed = -(rightBall.xSpeed + leftBall.xSpeed);//change direction and averages speed
                            }
                            if(leftBall.xSpeed>0){
                                leftBall.xSpeed = -(leftBall.xSpeed + rightBall.xSpeed);//change direction and averages speed
                            }

                            var higherBall = ballList[diff1Ball];
                            var lowerBall = ballList[diff2Ball];

                            if(higherBall.yCoor<lowerBall.yCoor){//determine which ball is higher
                                higherBall = ballList[diff2Ball];//redefine variable
                                lowerBall = ballList[diff1Ball];//redefine variable
                            }
                            if(higherBall.ySpeed<0){
                                higherBall.ySpeed = -(higherBall.ySpeed + lowerBall.ySpeed);//change direction and averages speed
                            }
                            if(lowerBall.ySpeed>0){
                                lowerBall.ySpeed = -(higherBall.ySpeed + lowerBall.ySpeed);//change direction and averages speed
                            }
                        }

                    }
                }
            }

            if(ballList[i].xSpeed>=25){//if the ball exceeds a certain xSpeed
                ballList[i].xSpeed = random(5,15);//the speed decreases to a random number
            }
            if(ballList[i].ySpeed>=25){//if the ball exceeds a certain ySpeed
                ballList[i].ySpeed = random(5,15);//the speed decreases to a random number
            }
            if(ballList[i].xSpeed<10 && ballList[i].xSpeed>0){//if the ball decreases to a certain xSpeed
                ballList[i].xSpeed = random(5,15);//the speed decreases to a random number
            }
            if(ballList[i].ySpeed<10 && ballList[i].ySpeed>0){//if the ball decreases to a certain ySpeed
                ballList[i].ySpeed = random(5,15);//the speed decreases to a random number
            }

            if(ballList[i].xSpeed>-10 && ballList[i].xSpeed<0){//if the ball decreases to a certain xSpeed
                ballList[i].xSpeed = -random(5,15);//the speed decreases to a random number
            }
            if(ballList[i].ySpeed>-10 && ballList[i].ySpeed<0){//if the ball decreases to a certain ySpeed
                ballList[i].ySpeed = -random(5,15);//the speed decreases to a random number
            }
            if(ballList[i].xSpeed<-25 && ballList[i].xSpeed<0){//if the ball decreases to a certain xSpeed
                ballList[i].xSpeed = -random(5,15);//the speed decreases to a random number
            }
            if(ballList[i].ySpeed<-25 && ballList[i].ySpeed<0){//if the ball decreases to a certain ySpeed
                ballList[i].ySpeed = -random(5,15);//the speed decreases to a random number
            }
            
            ballList[i].yCoor += ballList[i].ySpeed;//moves ball vertically
            ballList[i].xCoor += ballList[i].xSpeed;//moves ball horizontally
            
        }} else{
            for(var i=0; i < ballList.length; i++){
            fill(ballList[i].color);
                    triangle(ballList[i].x1,ballList[i].y2,ballList[i].x2,ballList[i].y2,ballList[i].x3,ballList[i].y3);

                if(ballList[i].x1 > width){//if xCoor is too far to the right
                    ballList[i].color = randomColor();//color is random
                    ballList[i].xSpd = -ballList[i].xSpd;//change direction
                }else if(ballList[i].x1 < 0){//if xCoor is too far to the left
                    ballList[i].color = randomColor();//color is random
                    ballList[i].xSpd = -ballList[i].xSpd;//change direction
                }
                if(ballList[i].x2 > width){//if xCoor is too far to the right
                    ballList[i].color = randomColor();//color is random
                    ballList[i].xSpd = -ballList[i].xSpd;//change direction
                }else if(ballList[i].x2 < 0){//if xCoor is too far to the left
                    ballList[i].color = randomColor();//color is random
                    ballList[i].xSpd = -ballList[i].xSpd;//change direction
                }
                if(ballList[i].x3 > width){//if xCoor is too far to the right
                    ballList[i].color = randomColor();//color is random
                    ballList[i].xSpd = -ballList[i].xSpd;//change direction
                }else if(ballList[i].x3 < 0){//if xCoor is too far to the left
                    ballList[i].color = randomColor();//color is random
                    ballList[i].xSpd = -ballList[i].xSpd;//change direction
                }

                if(ballList[i].y1 > width){//if xCoor is too far to the right
                    ballList[i].color = randomColor();//color is random
                    ballList[i].ySpd = -ballList[i].ySpd;//change direction
                }else if(ballList[i].y1 < 0){//if xCoor is too far to the left
                    ballList[i].color = randomColor();//color is random
                    ballList[i].ySpd = -ballList[i].ySpd;//change direction
                }
                if(ballList[i].y2 > width){//if xCoor is too far to the right
                    ballList[i].color = randomColor();//color is random
                    ballList[i].ySpd = -ballList[i].ySpd;//change direction
                }else if(ballList[i].x2 < 0){//if xCoor is too far to the left
                    ballList[i].color = randomColor();//color is random
                    ballList[i].ySpd = -ballList[i].ySpd;//change direction
                }
                if(ballList[i].y3 > width){//if xCoor is too far to the right
                    ballList[i].color = randomColor();//color is random
                    ballList[i].ySpd = -ballList[i].ySpd;//change direction
                }else if(ballList[i].y3 < 0){//if xCoor is too far to the left
                    ballList[i].color = randomColor();//color is random
                    ballList[i].ySpd = -ballList[i].ySpd;//change direction
                }

                ballList[i].x1=ballList[i].x2=ballList[i].x3 +=ballList[i].xSpd;
                ballList[i].y1=ballList[i].y2=ballList[i].y3 +=ballList[i].ySpd;
            }




            
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
