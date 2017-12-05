function sceneItem(gameContext, itemID, sprite, x, y, eventObj, inventory){
	this.itemID = itemID;
	this.inventory = inventory;
	this.xLoc = x;
	this.yLoc = y;
	this.game = gameContext;
	this.itemSprite = this.game.add.button(this.xLoc, this.yLoc, sprite, this.interact, this, 1, 0, 2);
	this.triggeredEvent = eventObj;
}

sceneItem.prototype.interact= function(button, pointer, someBool){
	if(this.triggeredEvent.eventType == "addObjInv"){
		this.triggeredEvent.occur();
	}else if(this.triggeredEvent.eventType == "lock"){
		if(this.inventory.selectedItem == null){
			console.log("Incorrect Item!");
		}else if(this.inventory.selectedItem != null && this.triggeredEvent.key.itemID == this.inventory.selectedItem.itemID){
			console.log("Unlocked!");
			this.triggeredEvent.eventType = "addObjInv";
			this.triggeredEvent.occur();
			this.inventory.deselectItem(this.inventory.inventoryButtons[this.inventory.findButton(this.inventory.selectedItem)], this.game, true, this.inventory.selectedItem);
		}else if(this.triggeredEvent.key.itemID != this.inventory.selectedItem.itemID){
			console.log("Incorrect Item!");
		}
	}
}

sceneItem.prototype.display= function(){
	
}

sceneItem.prototype.remove= function(){
	this.itemSprite.destroy();
}