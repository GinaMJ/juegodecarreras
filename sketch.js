var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track;
var car1img;
var car2img;
var car3img;
var car4img;
var ground;

function preload(){
  track = loadImage("../images/track.jpg");
car1img=loadImage("../images/car1img.png");
car2img=loadImage("../images/car2img.png");
car3img=loadImage("../images/car3img.png");
car4img=loadImage("../images/car4img.png");
ground=loadImage("../images/ground.png");

}






function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
