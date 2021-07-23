var seaImg;
var shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png, ship-2.png");
}

function setup(){
  createCanvas(400,400);
  spriteName.addImage(seaImg);
  spriteName.addImage(shipImg1);
}

function draw() {
  background("blue");
 if(sea.x < 0){
sea.x = sea.width/2;
 }
}AddeventListener