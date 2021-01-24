var bg ,  bgImg;
var cat , catImg , catImgg , catImggg ;
var mouse , mouseiImg , mouseImgg , mouseImggg ;
function preload() {
    //load the images here
    bgImg = loadAnimation("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    mouseImg = loadAnimation("images/mouse3.png");
    catImgg = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImgg = loadAnimation("images/mouse4.png");
    catImggg = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400,20,20);
    bg.addAnimation("a",bgImg);
    bg.scale = 1.2;
    cat = createSprite(800,600);
    cat.addAnimation("catRunning",catImg);
    cat.scale = 0.14;
    cat.width = 100
    mouse = createSprite(300,620);
    mouse.addAnimation("m",mouseImg);
    mouse.scale = 0.07;
    mouse.width = 100;
    keyPressed();


}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
    

        if(cat.x - mouse.x < (cat.width - mouse.width)/2){

            cat.velocityX = 0;
            cat.addAnimation("catRunning",catImggg);

            mouse.addAnimation("m",mouseImgg);

            
              }



    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){

    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImgg);


}

}
