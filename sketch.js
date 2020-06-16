var canvas, backgroundImage;
var gameState=0;
var playerCount;
var allPlayers;
var distance=0;
var database;
var form, game, player;
var cars, car1,car2,car3,car4,car5,car6;
var track;
var car1_img, car2_img, car3_img, car4_img,car5_img;

function preload(){
  
  
  backgroundImage=loadImage("images/ludoB.jpg");

  back_img=loadImage("images/ludoB.jpg");
}

function setup(){
  canvas=createCanvas(displayWidth-20,displayHeight);
  
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();

  
}

function draw(){
background(back_img);

if(playerCount===4){
  game.update(1);
}
if(gameState===1){
  clear();
  game.play();
}
if(gameState===2){
  game.end();
}

}