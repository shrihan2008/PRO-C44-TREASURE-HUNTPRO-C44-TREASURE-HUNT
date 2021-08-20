var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2= loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  //authenticate();
  //system.display()
  security.check1()
  security.check2()
  security.check3()

  // Add code to display score in the middle of the screen
  text("Score:"+score,700,50)
  if(score===3)
    {
    clear()
      background(bg2)
      fill("blue")
      textSize(40)
      text("GAME OVER TREASURE FOUND",200,450)
    }

  // Add code to display the end screen 
  drawSprites()
}