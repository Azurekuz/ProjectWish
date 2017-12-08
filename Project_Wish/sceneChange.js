function sceneChange(gameContext, stateID, x, y){
	this.game = gameContext;
	this.stateID = stateID;
	this.xLoc = x;
	this.yLoc = y;
	this.sprite = this.game.add.button(this.xLoc, this.yLoc, 'sceneChange', this.change, this, 1, 0, 2);
}

sceneChange.prototype.change= function(button, pointer, someBool){
	this.game.state.start(this.stateID);
}