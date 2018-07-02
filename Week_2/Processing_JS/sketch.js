//define an object that describes a circle
var circle = {
    diameter:80,
    xCoor: 0,
    yCoor: 0,
    color: [255,0,0],
    xSpeed: 10,//horizontal speed
    ySpeed: 10,//vertical speed
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
        circle.color = [random(0,255),random(0,255),random(0,255)];//color is random
        circle.xSpeed = -circle.xSpeed;    
    }else if(circle.xCoor < 0){
        circle.color = [random(0,255),random(0,255),random(0,255)]
        circle.xSpeed = -circle.xSpeed;
    }
    circle.xCoor += circle.xSpeed;

    //if the yCoor of circle is greater than length of canvas, bounce back
    if(circle.yCoor > 480){
        circle.diameter = random(1,100)//changes size when 
        circle.ySpeed = -circle.ySpeed;
    }else if(circle.yCoor < 0){
        circle.diameter = random(1,100)
        circle.ySpeed = -circle.ySpeed;
    }
    circle.yCoor += circle.ySpeed;
}