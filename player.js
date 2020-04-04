class Player{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.initY = y;
    this.height = playerHeight;
    this.xSpeed = 10;
    this.ySpeed = 10;

    this.direction = Direction.RIGHT;
    this.action = Action.STOP;

    this.sp_move_left =  loadImage("sprites/player/left_blue.png");
    this.sp_move_right =  loadImage("sprites/player/right_blue.png");
    this.sp_stop_left =  loadImage("sprites/player/left_blue_stop.png");
    this.sp_stop_right =  loadImage("sprites/player/right_blue_stop.png");
    this.sp_crouch_left =  loadImage("sprites/player/left_blue_crouch.png");
    this.sp_crouch_right =  loadImage("sprites/player/right_blue_crouch.png");
  }

  stop(){
    this.action = Action.STOP;
  }

  moveLeft(){
    this.direction = Direction.LEFT;
    this.action = Action.MOVE;
    this.x -= this.xSpeed;
  }

  moveRight(){
    this.direction = Direction.RIGHT;
    this.action = Action.MOVE;
    this.x += this.xSpeed;
  }

  crouch(){
    this.height = playerHeight - 10;
  }

  standUp(){
    this.height = playerHeight;
  }

  show() {
    let sprite;
    if(this.action === Action.MOVE){
      if(this.direction === Direction.LEFT) {
        sprite = this.sp_move_left;
      }else{
        sprite = this.sp_move_right;
      }
    }else{
      if(this.direction === Direction.LEFT) {
        sprite = this.sp_stop_left;
      }else{
        sprite = this.sp_stop_right;
      }
    }
    // IS MOVING
    if(this.height < playerHeight) {
      if(this.direction === Direction.LEFT) {
        sprite = this.sp_crouch_left;
      }else{
        sprite = this.sp_crouch_right;
      }
    }
  image(sprite, this.x, this.y);
  }
}
