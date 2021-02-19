const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var man , man_running;




function preload() {
  
}


function setup() {
  createCanvas(1000,1000);
  

  man = new Man(700,320,70,70);
  
}

function draw() {
  background("black");  





  man.display();
}