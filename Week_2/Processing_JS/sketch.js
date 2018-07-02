//define an object that describes a circle
var circle = {
    diameter:80,
    xCoor: 0,
    yCoor: 0,
    color: [255,0,0],
    xSpeed: 10,//horizontal speed
    ySpeed: 10,//vertical speed
}

function randomColor(){
    circle.color = [random(0,255),random(0,255),random(0,255)];
}

function randomSize(){
    circle.diameter = random(1,100);
}

//setup is run once at the beginning before we draw
function setup() {
    createCanvas(640, 480);
    background(210,255,46);
    frameRate(15);
}

function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    
    //if the xCoor of circle is greater than the length of the canvas, bounce back
    if(circle.xCoor > 640){
        randomColor();//color is random
        circle.xSpeed = -circle.xSpeed;    
    }else if(circle.xCoor < 0){
        randomColor();//color is random
        circle.xSpeed = -circle.xSpeed;
    }
    circle.xCoor += circle.xSpeed;

    //if the yCoor of circle is greater than length of canvas, bounce back
    if(circle.yCoor > 480){
        randomSize();//changes size randomly
        circle.ySpeed = -circle.ySpeed;
    }else if(circle.yCoor < 0){
        randomSize();//changes size randomly
        circle.ySpeed = -circle.ySpeed;
    }
    circle.yCoor += circle.ySpeed;
}