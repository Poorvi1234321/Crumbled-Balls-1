class Paper {
    constructor(x, y,radius ) {
      var options = {
          restitution:0.3,
          density:1.2,
          isStatic:false
          
      }
      this.x=x;
      this.y=y;
      this.radius=20;
      this.body = Bodies.circle(x, y, 20, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
     stroke ("blue");
     strokeWeight("6");
      fill("purple");
     ellipseMode(RADIUS);
     ellipse(0,0,this.radius,this.radius)
     
      pop();
    }
  };