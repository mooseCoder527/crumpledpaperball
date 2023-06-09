
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj, leftSide, rightSide

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ballOptions = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Matter.Bodies.circle(140,300,20,ballOptions)
	World.add(world,ball)
	groundObj = new Ground(width/2,470,width,20)
    leftSide = new Ground(700,410,20,100)
	rightSide = new Ground(850,410,20,100)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill('white')
  ellipse(ball.position.x,ball.position.y,20,20)
  groundObj.display()
  leftSide.display()
  rightSide.display()
}
function keyPressed(){
	if(keyCode == UP_ARROW ){
	  Matter.Body.applyForce(ball,ball.position,{x:40, y: -50})
	}
}



