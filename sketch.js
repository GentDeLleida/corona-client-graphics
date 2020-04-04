let player;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  player = new Player(windowWidth/2, windowHeight/2);
}

function draw() {
  background(255);

  player.standUp();
  if(keyIsPressed){
    if(keyIsDown(65)){
      player.moveLeft();
    }
    if(keyIsDown(68)){
      player.moveRight();
    }
    if(keyIsDown(83)){
      player.crouch();
    }
  }else{
    player.stop();
  }
  player.show();
}
