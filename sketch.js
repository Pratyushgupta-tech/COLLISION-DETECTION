var rect,rect2,rect3,rect4;




function setup() {
  createCanvas(800,400);


  rect=createSprite(400, 200, 50, 50);
  rect.shapeColor="blue";
  
   
  rect2=createSprite(100,150,70,30);
  rect2.shapeColor="blue";
  

  rect3=createSprite(300,10,70,30);
  rect3.shapeColor="blue";
  rect3.velocityY=5;

  rect4=createSprite(300,400,70,30);
  rect4.shapeColor="blue";
  rect4.velocityY=-5;
  

}

function draw() {
  background("black");

rect2.x=mouseX;  
rect2.y=mouseY;

if(rect.x-rect2.x < rect.width/2+rect2.width/2 && rect2.x-rect.x < rect.width/2+rect2.width/2
   && rect.y-rect2.y < rect.height/2+rect2.height/2 && rect2.y-rect.y < rect.height/2+rect2.height/2 ){
   rect.shapeColor="red";
   rect2.shapeColor="red";
   }else{
    rect2.shapeColor="blue";
    rect.shapeColor="blue"
   }
 
if(rect3.x-rect4.x < rect3.width/2+rect4.width/2 && rect4.x-rect3.x < rect3.width/2 + rect4.width/2){
   rect3.velocityX = -rect3.velocityX
   rect4.velocityX = - rect4.velocityX
}  

if(rect3.y-rect4.y < rect3.height/2+rect4.height/2 && rect4.y-rect3.y < rect3.height/2 + rect4.height/2){
  rect3.velocityY = -rect3.velocityY;
  rect4.velocityY = - rect4.velocityY;
}

  drawSprites();

}