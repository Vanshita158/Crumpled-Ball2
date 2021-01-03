
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper,box1,ground



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	 paper= new Paper(300,200,20,20)
	 box1= new Box(700,583,150,20)
	 ground= new Ground(400,600,800,20)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display()
  ground.display()
  box1.display()
  
  
  drawSprites();
 
}
function keyPressed(){
  if (keyCode=== UP_ARROW){
    Matter.body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85})
  }
}


