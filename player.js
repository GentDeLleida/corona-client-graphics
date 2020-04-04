


class Player{

  constructor(x, y, movingSprite, stopSprite){
    this.x = x;
    this.y = y;
    this.xSpeed = 10;
    this.ySpeed = 10;
    this.movingSprite = loadImage(movingSprite);
    this.stopSprite = loadImage(stopSprite);
    this.currentSprite = this.stopSprite;
  }


  move(direction){
    switch(direction) {
      case 'UP':
        // code block
        break;
      case 'DOWN':
        // code block
        break;
      case 'LEFT':

        break;
      case 'RIGHT':

        break;
      default:
      // code block
    }
  }


  show(){
    Image(this.currentSprite, this.x, this.y);
  }

}
