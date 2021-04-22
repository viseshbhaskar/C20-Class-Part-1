var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(400,400,30,100);
fixedRect.shapeColor = "red";
movingRect = createSprite(700,400,100,30);
movingRect.shapeColor = "green";
}

function draw() {
  background("black");
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
movingRect.shapeColor = "white";
fixedRect.shapeColor = "white";
  }  
  else {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}