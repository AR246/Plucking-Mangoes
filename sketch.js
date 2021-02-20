
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(950,150,40);
	mango3=new mango(1200,160,30);
	mango4=new mango(1050,50,25);
	mango5=new mango(975,250,30);
	mango6=new mango(1100,225,35);
	mango7=new mango(1025,175,25);
	mango8=new mango(1200,250,30);
    stoneObj=new Stone(200,500,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  text("press space to get a second chance to play!",350,50);
  image(boy ,200,340,200,300);
  

  treeObj.display();
      
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stoneObj.display();
  groundObject.display();
}






