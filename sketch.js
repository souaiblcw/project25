
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var pin1,pin2,pin3;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground1 = new ground(400,680,800,30);
	pin1 = new dustbin(680,670,120,10);
	pin2 = new dustbin(615,650,10,50);
	pin3 = new dustbin(745,650,10,50); 
	paper1 = new paper(50,660,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

ground1.display(); 
pin1.display(); 
pin2.display();
pin3.display();
paper1.display();
  drawSprites();
 
}

function keyPressed(){

if ( keyCode === UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65} )

}

}

