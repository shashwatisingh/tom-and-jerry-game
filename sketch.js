var cat,catImage;
var mouse,mouseImage;
var garden,gardenImages;



function preload() {
    //load the images here
catImages = loadImages("tomFour.png","tomOne.png","tomThree.png","tomTwo.png");
catImages = loadImages("jerryFour.png","jerryOne.png","jerryThree.png","jerryTwo.png");
gardenImage = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprites(200,300,50,50);
mouse = createSprites(400,500,40,40); 




}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        //write code here to change animation
    cat.addAnimation("catLastImage",catImg3);
    cat.ChangeAnimation("catLastImage");




    }

}



    drawSprites();



function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImg2);
        cat.ChangeAnimation("catRunning");


    }

}
    text(mouseX + '.' + mouseY,10,45);






