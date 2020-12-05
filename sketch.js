
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ballImage, dustbinImage

function preload()
{

}

var redbox,redbox1,redbox2,box;
var ball,ground;
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box=new Dustbin(700,580,200,200);
	//redbox.shapeColor=("red");
	//redbox1=createSprite(590,610,20,100);
	//redbox1.shapeColor=("red");
	//redbox2=createSprite(770,610,20,100);
	//redbox2.shapeColor=("red");

	ball = new Paper(200,450,70);


	ground = new Ground(450,680,1600,10);
	Engine.run(engine);
  
}


function draw() {
   rectMode(CENTER);
  background("white");
	//box.collide(redbox);
  ground.display();
  ball.display();
  //redbox.display();
  //redbox1.display();
  //redbox2.display();
  box.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-55});
  
	}
}


