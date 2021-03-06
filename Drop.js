class Drop {
    constructor(x, y,) {
     
        var options = {
           isStatic: false,
          'restitution':0.1,
          'friction':0.01
          
         }
      this.body = Bodies.circle(x, y, 5,options);
      this.radius = 5;
      World.add(world, this.body);
    }

      update(){
       if(this.body.position.y > height){
      Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,1000)})
       }
    }
    
    
    display(){
      var pos = this.body.position;
      
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(pos.x, pos.y,this.radius);
      
    }
  }