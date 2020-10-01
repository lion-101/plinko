var plinkos
var particles
var divides
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;


  ground1=new Ground(1,400,400,20)
  divide=new Division(50,400,20,50)
  divide1=new Division(120,400,20,50)
  divide2=new Division(190,400,20,50)
  divide3=new Division(260,400,20,50)
  divide4=new Division(330,400,20,50)
  divide5=new Division(400,400,20,50)


}
var plinkos = []
var particles = []
var divide = []
var divisionHeight=300
for (var k = 0; k ; k = k + 80){
  DivisionHeight.push(new divisions(k, height-DivisionHeight/2,10,DivisionHeight));
}
function draw() {
  Engine.update(engine)
  background(255,255,255); 
  for (var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75,10,10,10))
  }
  /*for (var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for (var j=-10;j<=width-20;j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for (var j=-35;j<=width-30;j=j+50){
    plinkos.push(new Plinko(j,375))
  }*/
  for (var j=0;j<particles.length;j=j++){
    particles(j).display();
  }
  for (var k=0;k<divide.length;k=k++){
    divide(k).display();
  }
  /*for (var l=0;l<plinkos.length;l=l++){
    plinko(l).display();
  }*/
  if (Framecount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  ground1.display();
  divide1.display();
  divide2.display();
  divide3.display();
  divide4.display();
  divide5.display();
  drawSprites();
  }


