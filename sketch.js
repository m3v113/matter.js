//namespacing Matter classes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//declaring variables
var world, engine;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

  //created ABG (angry birds game) engine from the main Engine class
  engine = Engine.create();
  //the world of my ABG is same as the engine's world
  world = engine.world;

  //changes the properties of the rectangle
  //you create the options when you want to change an already pre-defined property
  options = {
    //makes it static
    isStatic: true
  }

  //creating the ground from the main Bodies class
  ground = Bodies.rectangle(400,350,800,10,options);
  //adding to the main.World
  World.add(world, ground);

  //changes the properties for the circle
  roundoptions = {
   //makes it bounce
   restitution: 0.8 
  }

  //creates the ball
  ball = Bodies.circle(400,100,20,roundoptions);
  World.add(world, ball);

  
  
}

function draw() {
  //background
  background("lightblue");  
  //bigger engine updaes tiny engine
  Engine.update(engine);

  //changest the color
  fill("lightgreen");
  //changes the line color
  stroke("white")
  //makes it centered
  rectMode(CENTER);
  //displays
  rect(ground.position.x, ground.position.y,800,10);
 
  fill("black");
  stroke("pink");
  //changes the line width
  strokeWeight(3);
  //makes the radius not the diameter
  ellipseMode(RADIUS);
  //displays
  ellipse(ball.position.x, ball.position.y,20,20);
}