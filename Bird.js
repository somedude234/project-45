class Bird  {
  constructor(x,y){
    var options = {
      'restitution':0.8,
      'friction':0.7,
      'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.image = loadImage("images/ironman1.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    World.add(world, this.body);
    this.trajectory =[];
  }

  display() {
   
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      if(gameState === "launched"){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
  }

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
