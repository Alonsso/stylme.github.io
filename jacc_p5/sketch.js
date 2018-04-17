var canvas;
var mic;

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function setup(){
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	mic = new p5.AudioIn();
	mic.start();
}

function draw(){
	background(0);
	var volume = mic.getLevel();
	ellipse(width/2,height/2, volume * width);
}