
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground = Bodies.rectangle(400,650,800,10,{isStatic:true})

	box1 = new Box(400,650,200,20)
	box2 = new Box(510,620,20,100)
	box3 = new Box(290,620,20,100)
	paper= new Paper(200,200,20,20)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
 box2.display();
 box3.display();
 paper.display();

  drawSprites();
 
}



