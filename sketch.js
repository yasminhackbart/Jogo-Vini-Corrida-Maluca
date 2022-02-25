var database;
var gameState = 0;
var playerCount;
var Jogador;
var formulário;
var estados;
var jogadores;
var car1, car2, car3, car4, cars;
var car1img, car2img, car3img, car4img;
var chaoimg, ruaimg;

function preload(){
    car1img = loadImage("imagens/car1.png");
    car2img = loadImage("imagens/car2.png");
    car3img = loadImage("imagens/car3.png");
    car4img = loadImage("imagens/car4.png");

    chaoimg = loadImage("imagens/ground.png");
    ruaimg = loadImage("imagens/track.jpg");



}
function setup(){
    createCanvas(displayWidth-10,displayHeight-180);

    database = firebase.database();

    estados = new estadodojogo();
    estados.getState();
    estados.start();
   
}

function draw(){
    background("white");
    
    if(playerCount == 2){
        estados.update(1);
    }

    if(gameState == 1){
        clear();
        estados.play();
    }

    if(gameState === 2){
        estados.end();
      }

    drawSprites();
}

