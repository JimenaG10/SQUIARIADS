var squariad,edges;
var pin1, pin2, pin3, pin4, pin5, pin6;
function preload(){

}

function setup(){
createCanvas(400,400)
  squariad=createSprite(180, 50, 20, 20);  
  squariad.shapeColor = color(255);
  
  pin1=createSprite(200, 300, 20, 20);
  
  pin2=createSprite(180, 320, 20, 20);
  
  pin3=createSprite(220, 320, 20, 20);

  pin4=createSprite(160, 340, 20, 20);
  
  pin5=createSprite(200, 340, 20, 20);
  
  pin6=createSprite(240, 340, 20, 20);

  squariad.velocity.y = 10;
  squariad.velocity.x =4;
}
   /*************** Nota para las maestras *************/
  // Los valores siguientes para la velocidad X y la velocidad Y, son diferentes a los que 
  // dice el documento del proyecto.
  // El objetivo es asegurarse de que todos los pines cuadrados hayan sido desplazados/golpeados.
  // Guíe al niño a usar estos valores basándose en su propio entendimiento.
  /*************** Final de la Nota *************/
function draw() {
  background(220)
  edges=createEdgeSprites();
  squariad.bounceOff(edges);
  pin1.bounceOff(edges);
  pin2.bounceOff(edges);
  pin3.bounceOff(edges);
  pin4.bounceOff(edges);
  pin5.bounceOff(edges);
  pin5.bounceOff(edges);
  pin6.bounceOff(edges);
  
  pin1.bounce(squariad)
  pin2.bounce(squariad)
  pin3.bounce(squariad)
  pin4.bounce(squariad)
  pin5.bounce(squariad)
  pin6.bounce(squariad)
  
  pin1.bounce(pin2)
  pin1.bounce(pin3)
  pin1.bounce(pin4)
  pin1.bounce(pin5)
  pin1.bounce(pin6)
  
  
  pin2.bounce(pin3)
  pin2.bounce(pin4)
  pin2.bounce(pin5)
  pin2.bounce(pin6)
  
  pin3.bounce(pin4)
  pin3.bounce(pin5)
  pin3.bounce(pin6)

  
  pin4.bounce(pin5)
  pin4.bounce(pin6)
  
  pin5.bounce(pin6)
  
  drawSprites();
}
