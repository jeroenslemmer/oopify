// handle the set figureSet on the canvas

// construction of figure set on a canvas
var	figureSet = [];
var	figureIndex = 0;
var	figureSetCanvas; // canvas to be determined later by GUI layer

function focusInFigureSet(){
	for (figure of figureSet){
		blurFigure(figure);
	}
	focusFigure(figureSet[figureIndex]);	
}

function NextOfFigureSet(){
		figureIndex = (figureIndex + 1) % figureSet.length;
		focusInFigureSet();
}

function PrevOfFigureSet(){
		figureIndex = (figureIndex + figureSet.length - 1) % figureSet.length;
		focusInFigureSet();
}

function toFrontOfFigureSet(){
	if (figureIndex < figureSet.length - 1){
		var figures = figureSet.splice(figureIndex,1);
		figureIndex++;
		figureSet.splice(figureIndex,0, figures[0]);
	}
}

function toBackOfFigureSet(){
	if (figureIndex > 0){
		var figures = figureSet.splice(figureIndex,1);
		figureIndex--;
		figureSet.splice(figureIndex,0, figures[0]);		
	}
}

function clearCanvasFigureSet(){
	var context = figureSetCanvas.getContext("2d");
	context.setLineDash([]);
	context.strokeStyle = '#ffffff';
	context.lineWidth = 2;
	context.clearRect(0,0,figureSetCanvas.width,figureSetCanvas.height);	
}

function drawFigureSet(){
	clearCanvasFigureSet();
	for (figure of figureSet){
		drawFigure(figure);
	}
}

function deleteFromFigureSet(figureIndex){
	figureSet.splice(figureIndex,1);
	NextOfFigureSet();	
}

function addToFigureSet(figure){
	figureSet.push(figure);
	figureIndex = figureSet.length - 1;
	focusInFigureSet();
}

