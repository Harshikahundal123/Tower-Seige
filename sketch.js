const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 object = new Ground (67,89,90,89);
 stand1 = new Stand(390,300,250,10);
 stand2 = new Stand(700,200,200,10);
 Block1 = new Box(330,235,30,40);
 Block2 = new Box(360,235,30,40);
 Block3 = new Box (390,235,30,40);
 Block4 = new Box (420,234,30,40)
 Block5 = new Box (450,235,30,40);
 Block6 = new Box(360,195,30,40);
 Block7 = new Box (390,195,30,40);
 Block8 = new Box(420,195,30,40);
 Block9 = new Box(390,155,30,40);
Polygon =Bodies.circle(50,200,20);
World.add(world,polygon)
Slingshot = new Slingshot(this.polygon,{x:100,y:200});
imageMode(CENTER)
image(polygon_img, polygon.posiyion.x,polygon.position.y,40,40);

}

function draw() {
  Worl
  background(255,255,255);  
  object.display();
  Stand.display();
  Block1.display();
  Block2.display();
  Block3.display(); 
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();
  polygon.display();
  
 
  drawSprites();


imageMode(CENTER)
image(polygon_img ,ball.position.x,ball.position.y,40,40);

slingShot.display();

function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
  slingshot.attach(polygon.body)
  }
}
}