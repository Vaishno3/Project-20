var together, tom, tom1, tom2, tom3,jerry, jerry1, jerry2, jerry3;
var bg;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tom1 = loadAnimation("images/cat1.png");
    tom2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tom3 = loadAnimation("images/cat4.png");
    jerry1 = loadAnimation("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerry3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(870, 600);
tom.scale = 0.2;
tom.addAnimation("tom1", tom1);
jerry = createSprite(200, 600);
jerry.scale = 0.15;
jerry.addAnimation("jerryStanding", jerry1);
}

function draw() {

    background(bg);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tom3", tom3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tom3");
        jerry.addAnimation("jerry3", jerry3);
        jerry.changeAnimation("jerry3");
        jerry.scale = 0.15;
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.veloctiyX = -4;
    tom.addAnimation("tomWalking", tom2);
    tom.changeAnimation("tomWalking");
    console.log(tom.velocityX);
    jerry.addAnimation("jerry2", jerry2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerry2");
}

}
