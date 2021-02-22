const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    
}

function setup(){
    createCanvas(800,400)
   engine = Engine.create();
    world = engine.world;

    drop = new Drop();
}

function draw(){
    Engine.update(engine)
    
    drop.display()
}   

