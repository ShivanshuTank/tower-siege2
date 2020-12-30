const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var polygon1;
var g1,g2;
var slingShot1;


function setup(){
    var canvas = createCanvas(1200,1000);
    engine=Engine.create();
    world=engine.world;
g1 = new ground (600,1000,1200,50)
box1= new Box (390,175,30,40)
box2= new Box(360,235,30,40)
box3= new Box(330,235,30,40)
box4= new Box(420,235,30,40)
box6= new Box(450,235,30,40)
box7= new Box(360,195,30,40)
box8= new Box(390,195,30,40)
box9= new Box(420,195,30,40)
box10= new Box(390,155,30,40)
polygon1 = new polygon(700,300)
g2=new ground (390,260,160,20)
slingshot1 = new slingShot(polygon1.body,{x :700,y :300})
}
function draw(){
    background(255,255,255)
Engine.update(engine);

g1.display();
box1.display();
box2.display();
box3.display();
box4.display();
g2.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
polygon1.display();
slingshot1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot1.attach(polygon1.body);
      //  gameState="onsling"
    }
}