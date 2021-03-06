


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;

function preload() {
}
    

function setup(){
createCanvas(800,1000);
 engine = Engine.create();
world = engine.world;

for(var i=0; i<maxDrops; i++){
drops.push(new Drop(random(0,800),random(0,1000)));
}

umbrella = new Umbrella(500,600,100);
    
    
}

function draw(){
 background("black");
 Engine.update(engine)
 for(var i = 0; i < maxDrops; i++){
drops[i].display();
drops[i].update();
umbrella.display();
 }
 drawSprites();

}
 

