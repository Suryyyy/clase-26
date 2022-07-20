
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;
var suelo1;
var suelo2;
var suelo3;
var suelo4;
var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  
  suelo1 = new Ground (100,350,50,20);
  suelo2 = new Ground (150,350,50,20);
  suelo3 = new Ground (200,350,50,20);
  suelo4 = new Ground (250,350,50,20);


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
con = Matter.Constraint.create({
pointA: {x:200,y:20},
bodyB: ball,
pointB: {x:0,y:0},
length: 100,
stiffness: 0.1




})
World.add(world,con)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  strokeWeight(2);
  stroke("pink")
line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);

  suelo1.show();
  suelo2.show();
  suelo3.show();
  suelo4.show();
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  