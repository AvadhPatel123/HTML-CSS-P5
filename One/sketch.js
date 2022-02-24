// Emoji
// By Avadh Patel

// This code creates the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// This code creates the Emoji
function draw() {
  background(0 ,400, 200);
  
// This code creates the face
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2, 400, 400, 200);
  fill("Black");
  stroke("Black");
  strokeWeight("2")
  
// This code creates the eyes
  circle(640, 300, 40);
  circle(800, 300, 40);
  fill("Black");
  
// This code creates the mouth
  arc(windowWidth/2, 400, 160, 200, 0, PI, CHORD);
  fill("Yellow")

}

