var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200, 200, 20, 20);
}

function draw() 
{
  background("black");
  if(keyDown("up_arrow")){
    ball.velocityY = -3;
  }
  if(keyDown("down_arrow")){
    ball.velocityY = 3;
  }
  if(keyDown("left_arrow")){
    ball.velocityX = -3;
  }
  if(keyDown("right_arrow")){
    ball.velocityX = 3;
  }
  edges = createEdgeSprites();
  ball.bounceOff(edges);
  drawSprites();
}




