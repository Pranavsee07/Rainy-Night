class Umbrella {
    constructor(x, y,) {
     
        var options = {
           isStatic: true,
          'restitution':0.1,
          'friction':0.01
          
         }
     this.image = loadImage("walking_3.png");
      this.body = Bodies.circle(x, y, 100,options);
      this.radius = 100;
      World.add(world, this.body);
    }

      
    
    
    display(){
      var pos = this.body.position;
      
      imageMode(RADIUS);
      fill("blue");
      image(this.image,pos.x, pos.y,this.radius);
      
    }
  }