class Chancla extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/chancla.png");
    this.trayectoria = [x,y]
  }

  display() {
 
    super.display();
    
     if (this.body.velocity.x>10 && this.body.position.x >200){ 
  var position =[this.body.position.x, this.body.position.y]
  this.trayectoria.push(position)
}
   
  for(var i=0; i < this.trayectoria.length; i ++ ){
      ellipse(this.trayectoria[i][0],this.trayectoria[i][1],10,10);
    }

  }
}
