
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var Object1,Object2,Object3,Object4,Object5;
var roof1, rope1,bobDiameter

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof (700,200,400,30)
	Object1 = new Bob(300,450,50)
	Object2 = new Bob(350,450,50)
	Object3 = new Bob(400,450,50)
	Object4 = new Bob(450,450,50)
	Object5 = new Bob(500,450,50)

	bobDiameter= 50

	rope1 = new Rope (Object1.body, roof1.body,-95,0)
	rope2 = new Rope (Object2.body, roof1.body,-45,0)
	rope3 = new Rope (Object3.body, roof1.body,5,0)
	rope4 = new Rope (Object4.body, roof1.body,55,0)
	rope5 = new Rope (Object5.body, roof1.body,105,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  roof1.display();
  Object1.display();
  Object2.display();
  Object3.display();
  Object4.display();
  Object5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
		
		Matter.Body.setStatic(Object1.body,false)
    //	Matter.Body.applyForce(Object1.body,Object1.body.position,{x:60,y:-95});
    
  	}
}

