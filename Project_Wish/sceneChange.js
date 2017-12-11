function sceneChange(gameContext, stateID, x, y){
	this.game = gameContext;
	this.stateID = stateID;
	this.xLoc = x;
	this.yLoc = y;
	this.sprite = this.game.add.button(this.xLoc, this.yLoc, 'sceneChange', this.change, this, 1, 0, 2);
	this.stepsSFX = this.game.add.audio('1SecSteps');
	this.sprite.alpha = 0.25;
}

sceneChange.prototype.change= function(button, pointer, someBool){
	this.stepsSFX.play();
	this.game.state.start(this.stateID);
}