var movingrect,fixedrect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(800,400);
 movingrect = createSprite(200, 200,100, 50);
 movingrect.shapeColor = "red";
 movingrect.debug = true;

fixedrect = createSprite(400,200,50,100);
fixedrect.shapeColor = "red";
fixedrect.debug = true;

gameObject1 = createSprite(300,300,50,50);
gameObject1.shapeColor = "red";
gameObject1.debug = true;
gameObject1.velocityX = 3;



gameObject2 = createSprite(500,300,50,50);
gameObject2.shapeColor = "red";
gameObject2.debug = true;
gameObject2.velocityX = -3;
}

function draw() {
  background(0);  

  movingrect.y = mouseY;
  movingrect.x = mouseX;

 if(isTouching(movingrect,gameObject1)){
     
    movingrect.shapeColor = "green";
    gameObject1.shapeColor = "green";
 }
 else{
  movingrect.shapeColor = "red";
  gameObject1.shapeColor = "red";

 }
 bounce(gameObject1,gameObject2);

  drawSprites();
}

