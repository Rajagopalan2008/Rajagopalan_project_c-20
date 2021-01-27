var car, wall
var speed,weight,deformation
function setup() {
  createCanvas(800,400);
  wall=createSprite(750,200,60,200);
  car=createSprite(50,200,50,50);

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("orange");  
  wall.shapeColor="yellow"
  car.shapeColor="silver"
//to make the speed as the car's velocity
car.velocityX=speed;

//to calculate the deformation
deformation=(0.5*weight*speed^2)/22500;

if(car.x-wall.x<wall.width/2+car.width/2 && wall.x-car.x<wall.width/2+car.width/2 && deformation<100){
car.shapeColor="green";
car.velocityX=0;
}
if(car.x-wall.x<wall.width/2+car.width/2 && wall.x-car.x<wall.width/2+car.width/2 && deformation>100 && deformation<180){
  car.shapeColor="yellow";
  car.velocityX=0;
  }
if(car.x-wall.x<wall.width/2+car.width/2 && wall.x-car.x<wall.width/2+car.width/2 && deformation>180){
  car.shapeColor="red";
  car.velocityX=0;
  }

  drawSprites();
}