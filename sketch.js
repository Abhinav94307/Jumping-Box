var canvas;
var music;
var blueBar,orangeBar,redBar,greenBar,bouncyBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  //adding music ♬
  music.play();
    //create 4 different surfaces.
   blueBar = createSprite(100,630,150,100);
   blueBar.shapeColor = "blue";
  
   orangeBar = createSprite(300,630,150,100);
   orangeBar.shapeColor = "orange";
  
   redBar = createSprite(500,630,150,100);
   redBar.shapeColor = "red";
   
   greenBar = createSprite(700,630,150,100);
   greenBar.shapeColor = "green";

    //create box sprite and give velocity.
   
   bouncyBox = createSprite(400,500,20,20);
   bouncyBox.shapeColor = "white";
   bouncyBox.velocityX = 5
   bouncyBox.velocityY = 5
   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite.
    edges = createEdgeSprites();
    bouncyBox.bounceOff(edges);
  if(blueBar.isTouching(bouncyBox) && bouncyBox.bounceOff(blueBar)){
    // Change color here.
    bouncyBox.shapeColor = "blue"
  }
  if(orangeBar.isTouching(bouncyBox) && bouncyBox.bounceOff(orangeBar)){
    // Change color here.
    bouncyBox.shapeColor = "orange"
    bouncyBox.velocityX = 0;
    bouncyBox.velocityY = 0;
    music.stop();
  }
  if(redBar.isTouching(bouncyBox) && bouncyBox.bounceOff(redBar)){
    // Change color here.
    bouncyBox.shapeColor = "red"
  }
  if(greenBar.isTouching(bouncyBox) && bouncyBox.bounceOff(greenBar)){
    // Change color here.
    bouncyBox.shapeColor = "green"
  }



    //add condition to check if box touching surface and make it box.
    drawSprites();
}
