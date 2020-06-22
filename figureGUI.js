figureSetCanvas = figureCanvas; 

// continue moving while move-button pressed
movingModus = 0, movingSpeed = 1;
function moving(){
	if (movingModus > 0) {
		movingSpeed++;
		if (movingSpeed > 10) movingSpeed = 10;
	}	else {
		movingSpeed = 1;
	}
	switch (movingModus) {
		case 1: moveUpFigure(figureSet[figureIndex],movingSpeed); break;
		case 2: moveRightFigure(figureSet[figureIndex],movingSpeed); break;
		case 3: moveDownFigure(figureSet[figureIndex],movingSpeed); break;
		case 4: moveLeftFigure(figureSet[figureIndex],movingSpeed); break;
	}
}
setInterval(moving,100);

// continue resizing while size-button pressed
sizingModus = 0, sizingSpeed = 1;
function sizing(){
	if (sizingModus > 0) {
		sizingSpeed++;
		if (sizingSpeed > 10) sizingSpeed = 10;
	}	else {
		sizingSpeed = 1;
	}
	switch (sizingModus) {
		case 1: growFigure(figureSet[figureIndex],sizingSpeed); break;
		case 2: shrinkFigure(figureSet[figureIndex],sizingSpeed); break;
	}
}
setInterval(sizing,100);

function activateButtons(){
	// activate all buttons to manipulate figures on canvas
	figureAdd.onclick = (event)=>{addToFigureSet(randomFigure(figureCanvas));}
	figureDelete.onclick = (event)=> {
			if (confirm('Remove this figure')){
				deleteFromFigureSet(figureIndex);
			}
	}
	figureNext.onclick = NextOfFigureSet;
	figurePrev.onclick = PrevOfFigureSet;
	figureMoveFront.onclick = toFrontOfFigureSet;
	figureMoveBack.onclick = toBackOfFigureSet;
	figureShow.onclick = (event)=>{showFigure(figureSet[figureIndex]);}
	figureHide.onclick = (event)=>{hideFigure(figureSet[figureIndex]);}
	figureGrow.onmousedown = (event)=>{sizingModus = 1;}
	figureGrow.onmouseup = (event)=>{sizingModus = 0;}
	figureShrink.onmousedown = (event)=>{sizingModus = 2;}
	figureShrink.onmouseup = (event)=>{sizingModus = 0;}
	figureMoveRight.onmousedown = (event)=>{movingModus = 2;}
	figureMoveLeft.onmousedown = (event)=>{movingModus = 4;}
	figureMoveUp.onmousedown = (event)=>{ movingModus = 1;}
	figureMoveDown.onmousedown = (event)=>{movingModus = 3;}
	figureMoveRight.onmouseup = (event)=>{movingModus = 0;}
	figureMoveLeft.onmouseup = (event)=>{movingModus = 0;}
	figureMoveUp.onmouseup = (event)=>{ movingModus = 0;}
	figureMoveDown.onmouseup = (event)=>{ movingModus = 0;}
	
	figureCanvas.onkeydown = (event)=>{ 
		movingModus = 0;
		sizingModus = 0;
		var used = false;
		if (!event.ctrlKey && !event.altKey && !event.shiftKey) {
			switch (event.code){
				case 'ArrowUp' : movingModus = 1; used = true; break;
				case 'ArrowRight' : movingModus = 2; used = true; break;
				case 'ArrowDown' : movingModus = 3; used = true; break;
				case 'ArrowLeft' : movingModus = 4; used = true; break;
			}		
		} else if (event.ctrlKey) {
			switch (event.code){
				case 'ArrowUp' : sizingModus = 1; used = true; break;
				case 'ArrowDown' : sizingModus = 2; used = true; break;
			}		
		} else if (event.altKey){
			switch (event.code){
				case 'ArrowUp' : NextOfFigureSet(); used = true; break;
				case 'ArrowDown' : PrevOfFigureSet(); used = true; break;
				case 'Equal' : addToFigureSet(randomFigure()); used = true; break;
				case 'Minus' : deleteFromFigureSet(figureIndex); used = true; break;
			}	
		} else if (event.shiftKey){
			switch (event.code){
				case 'ArrowUp' : toFrontOfFigureSet(); used = true; break;
				case 'ArrowDown' : toBackOfFigureSet(); used = true; break;
			}	
		}
		if (used) event.preventDefault();
	}

	figureCanvas.onkeyup = (event)=>{ 
		movingModus = 0;
		sizingModus = 0;
		event.preventDefault();
	}
}
activateButtons();

// re-focus on canvas to receive keypressed events
document.onmouseup = (event)=>{figureCanvas.focus();}

// redraw all figures on canvas every 100 ms
setInterval(()=>{window.requestAnimationFrame( ()=>{drawFigureSet();}) },100);
figureCanvas.focus();

