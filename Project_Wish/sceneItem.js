function sceneItem(gameContext, itemID, sprite, x, y, eventObj){
	this.itemID = itemID;
	this.xLoc = x;
	this.yLoc = y;
	this.game = gameContext;
	this.itemSprite = this.game.add.button(this.xLoc, this.yLoc, sprite, this.interact, this, 1, 0, 2);
	this.triggeredEvent = eventObj;
}

sceneItem.prototype.interact= function(){
	this.triggeredEvent.occur();
}

sceneItem.prototype.display= function(){
	
}

sceneItem.prototype.remove= function(){
	this.itemSprite.destroy();
}