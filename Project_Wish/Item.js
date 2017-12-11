function Item(gameContext, itemID, sprite){
	this.itemID = itemID;
	this.game = gameContext;
	this.isSelected = false;
	this.itemSprite = sprite;
	this.event = null;
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

Item.prototype.interact = function(item){
	console.log(this.itemID + " -> " + item.itemID + " Interaction!");
	if(this.event != null){
		if(this.event.eventType == 'lock' && item.itemID == this.event.key.itemID){
			this.game.inventory.removeItem(item.itemID);
			this.game.inventory.removeItem(this.itemID);
			this.event.addEvent.occur();
		}
	}
}