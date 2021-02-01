const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,base,mango1,mango2,mango3,boy,stone,tree,string;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
engine = Engine.create();
world = engine.world;

ground = new Ground(width-5,height-5,width*2,20);

tree = new Tree(1000,100,400,700)
boy = new Boy(200,790,200,300);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
  Engine.run(engine);
  ground.display();
  tree.display();
  boy.display();
  
  drawSprites();
 
}



