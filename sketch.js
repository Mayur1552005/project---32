const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var man , man_running;




function preload() {
  man_running = loadAnimation("sprites/1.jpg , 2.jpg , 3.jpg , 4.jpg , 5.jpg , 6.jpg , 7.jpg , 8.jpg , 9.jpg , 10.jpg, 11.jpg , 12.jpg , 13.jpg");
}


function setup() {
  createCanvas(800,400);
  man = createSprite(400, 200, 50, 50);


  
}

function draw() {
  background("black");  





  drawSprites();
}