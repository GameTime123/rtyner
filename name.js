class clingy {
constructor(bodyA,bodyB){
var options = {
    bodyA : bodyA,
    bodyB : bodyB,
    length : 192
}
this.chain = Matter.Constraint.create(options);
World.add(world, this.chain);
}
 display(){
line (this.chain.bodyA.position.x , this.chain.bodyA.position.y,this.chain.bodyB.position.x, this.chain.bodyB.position.y)
 }
}