function sceneItem(gameContext, itemID, sprite){
	this.itemID = itemID;
	this.game = gameContext;
	this.isSelected = false;
	this.itemSprite = sprite;
}

sceneItem.prototype.select = function(){
	if(this.isSelected != true){
		this.isSelected = true;
	}
}

sceneItem.prototype.deselect = function(){
	if(this.isSelected == true){
		this.isSelected = false;
	}
}