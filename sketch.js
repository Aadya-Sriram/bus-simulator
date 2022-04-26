var bus
var road
var car
var busImg
var roadImg
var carImg
var end
var score=0
var sound



function preload(){
busImg=loadImage("bus.png")
roadImg=loadImage("road.png")
carImg=loadImage("car.png")
sound=loadSound("sound.mp3")
}


function setup() {
  
  createCanvas(900,500)
  bus = createSprite(200,400,100,100)
  road = createSprite(500,100,100,100)
  car = createSprite(300,200,100,30)
  bus.addImage(busImg)
  road.addImage(roadImg)
  car.addImage(carImg)
  bus.scale=0.5
  road.scale=1
  car.scale=0.6
  bus.depth=road.depth+1
  sound.play()
}

function draw() {
  text("use arrow keys",5,180)
  text("Ctrl+R to reset",5,100)
  textSize(20)
  if (frameCount % 250 === 0)
   {car=createSprite(300,200) 
  car.addImage(carImg)
  car.x=Math.round(random(500,100))
car.scale=0.6
car.velocityY=2.5

 }
  if(bus.y < 100||car.y < 100)
  {road.y=50}
  bus.velocityY=1.5
  road.velocityY= 0.5
  if(keyDown(UP_ARROW)){
    bus.velocityY = bus.velocityY=-3
    
  }
  if(keyDown(RIGHT_ARROW)){
    bus.velocityX=bus.velocityX=2
  }
  if(keyDown(LEFT_ARROW)){
    bus.velocityX=bus.velocityX=-1
  }
  
  
  if (bus.isTouching(car)) {
   
  
   
    car.setVelocity(0,0);
    car.visible=false
    bus.setVelocity(0,0)
    road.setVelocity(0,0)
    stroke(0)
    fill(120)
    textSize(15)
    text("you failed",10,50)

  

  }

  
  drawSprites()
}
