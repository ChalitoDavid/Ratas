class Pig extends BaseClass {

  constructor(x, y){
    super(x,y,80,80);
    this.image = loadImage("sprites/niño.png");
    this.disminuidor = 255
  }


display() {
 if(this.body.speed <3){
 super.display();
 }
 else{
 World.remove(world, this.body)
 push();
 tint(255, this.disminuidor=this.disminuidor-5);
 imageMode(CENTER);
 image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
 pop();
 }
 
}

}