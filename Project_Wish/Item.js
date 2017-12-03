function Item(gameContext, itemID, sprite){
	this.itemID = itemID;
	this.game = gameContext;
	this.isSelected = false;
	this.itemSprite = sprite;
}

Item.prototype.select = function(){
	if(this.isSelected != true){
		this.isSelected = true;
	}
}

Item.prototype.deselect = function(){
	if(this.isSelected == true){
		this.isSelected = false;
	}
}

Item.prototype.interact = function(){
	
}