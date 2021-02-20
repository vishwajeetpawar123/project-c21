/*assign varables for car and wall and also for speed*/
var damage;
var bullet,wall;
var  thickness,speed,weight;

function setup() {
  createCanvas(1300,400);
  wall=createSprite(1180, 200, thickness, height/2);
  bullet=createSprite(50,200,50,8);

  thickness=random(22,83);
  
speed=random(223,321);
weight=random(30,52);


}

function draw() {
  background(0);  
  bullet.velocityX=speed;

if (hasCollided(bullet ,wall)){

bullet.velocityX=0;

 var damage= 0.5 * weight * speed * speed/(thickness*thickness*thickness)


if(damage>15){
  wall.shapeColor=color(225,0,0);
}


if(damage<15){
  wall.shapeColor=color(0,225,0)
}


}
  drawSprites();
}

function hasCollided(bullet, wall){
  bulletrightedge=bullet.x+bullet.width;
  wallleftedge=wall.x

  if(bulletrightedge>=wallleftedge){
    return true
  }

  return false;
}