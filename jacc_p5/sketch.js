const sketch = function(p){
	var mic;
	p.setup = function(){
		p.createCanvas(370,370);
		mic = new p5.AudioIn();
		mic.start();
	}
	p.draw = function(){
		p.background(0);
		micLevel = mic.getLevel();
		p.ellipse(370/2,370/2,micLevel*4000);
	}
}

const myp5_1 = new p5(sketch, 'sketchUno');