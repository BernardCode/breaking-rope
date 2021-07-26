const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var bunny;
var fruit,rope;
var fruit_con;
var bunny_Img, bg_Img, melon_Img;
var button;
//var btn;

function preload() {
  bunny_Img = loadImage("Rabbit-01.png");
  bg_Img = loadImage("background.png");
  melon_Img = loadImage("melon.png");
}
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  bunny = createSprite(250,630,100,100);
  bunny.addImage(bunny_Img);
  bunny.scale = 0.23;

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);

  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50);

  button = createImg('cut_button.png');
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);

  //btn = createButton("press me!");
  //btn.size(200,100);
  //btn.position(100,60);
}

function draw() 
{
  background(51);
  image(bg_Img, width/2, height/2,500,700);
  rope.show();
  image(melon_Img, fruit.position.x,fruit.position.y,60,60);

  Engine.update(engine);
  ground.show();

  drawSprites();
   
}

function drop() {
  fruit_con.detach();
  rope.break();
  fruit_con = null;
}
