var hr,mn,sc;
var scAngle,mnAngle,hrAngle;

function setup() {

createCanvas(800,400);
angleMode(DEGREES);

}

function draw() {

  background(0);  

  drawSprites();

translate(200,200);
rotate(-90);

  //Calculating the time using the predefined functions from p5.js
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  
  //drawing the seconds hand

  push();
  rotate(scAngle); //Rotating the hand based on the angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle); //Rotating the hand based on the angle calculated
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle); //Rotating the hand based on the angle calculated
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);

  strokeWeight(10);
  noFill();


  stroke(255,0,0);
  arc(0, 0, 300,300, 0, scAngle);

  stroke(0,255,0);
  arc(0, 0, 280,280, 0, mnAngle);

  stroke(0,0,255);
  arc(0, 0, 260,260, 0, hrAngle);
}