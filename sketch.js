var canvas,backgroundImage
var database
var gameState=0
var playerCount;
var form;
var game
var player
var distance=0;
var allPlayers=0;
var car1
var cars=[]
var car2;
var car3;
var car4;
var i1,i2,i3,i4,i5,i6;

function preload(){
i1= loadImage('car1.png')
i2= loadImage('car2.png')
i3= loadImage('car3.png')
i4= loadImage('car4.png')
i5= loadImage('track.png')
i6= loadImage('track.jpg')
}
function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-200);
    database= firebase.database();
     game= new Game();
     game.getState()
   game.start()
}

function draw(){
  background(255)
  if(playerCount===2){
    game.update(1)
  }
  if(gameState===1){
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}


  function showError(err){
      console.error(err);
  }