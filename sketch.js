var ball;
var database
var gameState = 0 
var playerCount
var form
var game
var player
function setup(){
    createCanvas(500,500);
    game = new Game()
    game.getState()
    game.start()
  
}

function draw(){
    background("white");
 
}