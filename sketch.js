var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);
var ball_options={
 isStatic:false,
restitution:0.3,
friction:0,
density:1.2


}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(width/2,670,width,20);
	ball=Bodies.circle(200,100,10,ball_options)
  World.add(world,ball)
leftSide = new Ground(1100,600,20,120)
rightSide = new Ground(1300,600,20,120)

}


function draw() {
	background(0);
    ellipse(ball.position.x,ball.position.y,20)
	rectMode(CENTER);
  
  Engine.update(engine);
  ground.show()
  leftSide.show(
	  rightSide.show()
  )
}

function keyPressed() {
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:20,y:-20})

}

}



