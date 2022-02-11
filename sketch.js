var path,boy,c,v,m,s;
var pathImg,boyImg,cImg,vImg,mImg,sImg;
var vaccine=0
var mask=0
var sanitizer=0
var gImg,uImg
var cgroup,vgroup,mgroup,sgroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("path.jpg");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cImg = loadImage("c.jpg");
  mImg = loadImage("m.jpg");
  vImg = loadImage("v.jpg");
  sImg = loadImage("s.jpg");
  uImg=loadImage("u.jpg")
  gImg=loadImage("g.jpg")
  
  
}

function setup(){
  
  createCanvas(600,800);
// Moving background
path=createSprite(300,200);
path.addImage(pathImg);
path.scale=2.8



//creating boy running
boy = createSprite(100,650,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;

u = createSprite(300,300);
    u.addImage(uImg);
    u.scale = 0.5


    g = createSprite(290,60,100,100);
    g.addImage(gImg);
    g.scale = 0.6
  
  
cgroup=new Group();
mgroup=new Group();
vgroup=new Group();
sgroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  

  g.visible=false
  u.visible=false

  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;

   


  }
  
    createc();
    createm();
    createv();
    creates();

    if (mgroup.isTouching(boy)) {
      mgroup.destroyEach();
      mask=mask+1;
    }
    else if (vgroup.isTouching(boy)) {
    vgroup.destroyEach();
      vaccine=vaccine+1
      
    }else if(sgroup.isTouching(boy)) {
      sgroup.destroyEach();
  sanitizer=sanitizer+1
     
        
  g.visible=false
  u.visible=false
  boy.visible=true



    }else{
      if(cgroup.isTouching(boy)) {
        gameState=END;
  

        
         mgroup.destroyEach();
        vgroup.destroyEach();
         sgroup.destroyEach();
         cgroup.destroyEach();
        
  g.visible=true
  u.visible=true
boy.visible=false
        
        mgroup.setVelocityYEach(0);
        vgroup.setVelocityYEach(0);
        sgroup.setVelocityYEach(0);
        cgroup.setVelocityYEach(0);
        
        text("reload the page to start the game again",100,600)
        textSize(30)
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("mask: "+ mask,10,30);
  text("vaccine: "+vaccine,30,50);
  text("sanitizer: "+sanitizer,50,70);
 
  }

}

function createm() {
  if (World.frameCount % 200 == 0) {
  var m= createSprite(Math.round(random(50, 350),40, 10, 10));
  m.addImage(mImg);
  m.scale=0.3;
  m.velocityY = 8;
  m.lifetime = 250;
  mgroup.add(m);
  }
}

function createv() {
  if (World.frameCount % 320 == 0) {
  var v = createSprite(Math.round(random(50, 350),40, 10, 10));
  v.addImage(vImg);
  v.scale=0.3;
  v.velocityY = 8;
  v.lifetime = 250;
  vgroup.add(v);
}
}

function creates() {
  if (World.frameCount % 410 == 0) {
  var s = createSprite(Math.round(random(50, 350),40, 10, 10));
  s.addImage(sImg);
  s.scale=0.05;
  s.velocityY = 8;
  s.lifetime = 250;
  sgroup.add(s);
  }
}

function createc(){
  if (World.frameCount % 530 == 0) {
  var c = createSprite(Math.round(random(50, 350),40, 10, 10));
  c.addImage(cImg);
  c.scale=0.3;
  c.velocityY = 8;
  c.lifetime = 250;
  cgroup.add(c);
  }
}
