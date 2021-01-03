class Paper
{
 constructor(x,y){
     var options={
     restitution:0.8,
     friction:1,
     density:1.2
    }
     this.body= Matter.Bodies.rectangle(x,y,50,options)
     this.width=width
     this.height= height
     World.add (world,this.body)
     this.image= loadImage("paper.png")   


 }
 display(){
     var pos = this.body.position
     var angle= this.body.angle
     push()
     translate(pos.x,pos.y)
     rotate(angle)
     rectMode(CENTER) 
     fill("pink")
     rect(pos.x,pos.y,this.width,this.height)
     pop()
 }
}