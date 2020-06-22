// Structure of figure:
// figure = [type, color, x, y, visible, focus, size, canvas]

// Examples of figure:
// var figure = ['square','#0000FF',20,	50,	true,	true, 80, canvas]

// property names of a figure to find its value in the figure array:
const _type = 0, _color = 1, _x = 2, _y = 3, _visible  = 4, _focus = 5, _size = 6, _canvas = 7;

// Limits to its size:
const _minSize = 10, _maxSize = 500;

// Types of figures:
_types = ['square','circle'];

class Figure {
	static minSize = 10;
	static maxSize = 500;

	constructor(type, color, x, y, visible, size, canvas){
		this.type = type;
		this.color = color;


		this.visible = visible;
		if (size < Figure.minSize) size = Figure.minSize;
		if (size > Figure.maxSize) size = Figure.maxSize;
		this.size = size;
		this.canvas = canvas;
		this.focus = true;

		if (x < 0) x = 0;
		if (x > this.canvas.width - this.size){
			x = this.canvas.width - this.size;
		}
		this.x = x;

		if (y < 0) y = 0;
		if (y > this.canvas.height - this.size){
			y = this.canvas.height - this.size;
		}
		this.y = y;
	}

	draw(){
		var context = this.canvas.getContext("2d");
		if (this.visible){
			context.fillStyle = this.color;
			if (this.type == 'square'){
				context.fillRect(this.x, this.y, this.size, this.size);
			} else
			if (this.type == 'circle'){

				context.beginPath();
				context.ellipse(this.x + this.size/2,this.y+this.size/2,this.size/2,this.size/2,0,0,Math.PI * 2);
				context.fill();
			}			
		}
		
		if (this.focus){
			context.setLineDash([1,4]);
			context.strokeRect(this.x,this.y,this.size,this.size);
		}		
	}

}

/*function hideFigure(figure){

	figure[_visible] = false;
}

function showFigure(figure){

	figure[_visible] = true;
}

function growFigure(figure,percentage){
	figure[_size] += Math.ceil(figure[_size] * percentage / 100);
	if (figure[_size] > _maxSize) {
		figure[_size] = _maxSize;
	}
}

function shrinkFigure(figure,percentage){
	figure[_size] -= Math.ceil(figure[_size] * percentage / 100);
	if (figure[_size] < _minSize) {
		figure[_size] = _minSize;
	}
}

function moveRightFigure(figure, step){

	figure[_x] += step;
}

function moveLeftFigure(figure, step){

	figure[_x] -= step;
}

function moveUpFigure(figure, step){
	
	figure[_y] -= step;
}

function moveDownFigure(figure, step){

	figure[_y] += step;
}

function focusFigure(figure){

	figure[_focus] = true;
}

function blurFigure(figure){

	figure[_focus] = false;
}

function randomFigure(canvas){
	return constructFigure(
		_types[Math.floor(Math.random()*_types.length)], 										// type
		'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6), 	// color
		Math.floor(Math.random()*(canvas.width - figure[_size])), 					// x
		Math.floor(Math.random()*(canvas.height - figure[_size])), 					// y
		true, 																															//visible
		_minSize + Math.floor(Math.random() * (_maxSize - _minSize)/2),			// size
		canvas);																														// canvas
}

*/