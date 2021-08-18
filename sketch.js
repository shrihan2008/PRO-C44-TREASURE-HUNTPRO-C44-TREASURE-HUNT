var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  system.display()

  // Add code to display score in the middle of the screen
  text("Score:"+score,200,150)
  if(score===3)
    {
      clear()
      background(bg2)
      fill("black")
      textSize(40)
      text("GAME OVER TREASURE FOUND",250,200)
    }


  // Add code to display the end screen


  drawSprites()
}