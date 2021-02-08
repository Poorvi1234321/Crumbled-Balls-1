var log1,log2,log3;
var ground,boximg;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boximage = loadImage('dustbingreen.png');
	
}

function setup() {
  rectMode(CENTER);
	createCanvas(1200, 600);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,596,1400,20);
  log1=new Dustbin(1000,570,185,20);
  log2=new Dustbin(908,485,17,190);
  log3=new Dustbin(1080,485,17,190);
  paper=new  Paper(80,450);
  console.log(paper)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
    

  log1.display();
   log2.display();
  log3.display();
  ground.display();
  image(boximage,890,365,210,220);
   paper.display();
 
  drawSprites();

}

function keyPressed() {
if (keyCode=== UP_ARROW) {
  Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110});
}
}
