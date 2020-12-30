class polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("polygon.png");
    
    }
  
    display() {
      //this.body.position.x = mouseX;
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      //this.body.position.y = mouseY;
      super.display();

    }
  }
  