class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':0.01,
          'isStatic': false
      }
       
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    score(){
      if(this.visibility<200 &&this.visibility>-101){
        score++;
      }
    }
    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
     }
     else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 1;
      tint(30, this.visibility);

      pop();
     }
    }
   };