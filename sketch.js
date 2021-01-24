var log1,log2,log3;
var ground;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
  rectMode(CENTER);
	createCanvas(1200, 600);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,596,1400,20);
  log1=new Dustbin(1000,570,200,20);
	log2=new Dustbin(1090,510,20,100);
  log3=new Dustbin(910,510,20,100);
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
  paper.display();

  drawSprites();

}

function keyPressed() {
if (keyCode=== UP_ARROW) {
  Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-85});
}
}
