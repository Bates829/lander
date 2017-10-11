/** @class terrain
*
*
**/
export default class Terrain{
  constructor(screenWidth, screenHeight){
    var x = 0;
    var y = Math.random()*screenHeight/2  + screenHeight/2 - 10;
    var dist = Math.random() * 10;
    this.path = [];

  }

  function clampHeight(y){
    do{
      var newHeight = y;
      var probability = Math.random();
      if(probability < 0.45){
        newHeight -= Math.random() * 50;
      } //45% chance
      else if(probability < 0.9){
        newHeight += Math.random() * 50;
      }

    }while(newHeight < screenHeight/2 || newHeight > screenHeight);
    return newHeight
  }
    while(x < width){
      x = x + Math.Random() * 50;

      y = clampHeight(y);

      this.path.push(){
        x: x,
        y: y
      });

      x += dist;
      y = height;

      dist = Math.random() * 10;
    }
  }

  render(ctx){
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(this.path[0].x, this.path[0].y);
    for(var i = 1; i < this.path.length; i++){
      ctx.lineTo(this.path[i].x, this.path[i].y);
    }
    ctx.stroke();
    ctx.restore();
  }
}
