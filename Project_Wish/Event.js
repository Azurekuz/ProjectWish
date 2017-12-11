function Event(gameContext, eventID, eventType, scItem, item, inventory, keyItem){
	this.eventID = eventID;
	this.game = gameContext;
	this.eventType = eventType;
	this.flagged = false;
	this.sceneObject = scItem || null;
	this.item = item || null;
	this.inventory = inventory || null;
	this.key = keyItem || null;
	this.addEvent = null;
}

Event.prototype.occur = function(){
	if(this.eventType == "addObjInv" && this.item != null){
		if(this.sceneObject != null){
			this.sceneObject.remove();
		}
		this.inventory.addItem(this.item);
	}/*else if(this.eventType == "lock" && this.inventory.selectedItem != null){
		if(this.item.itemID == this.inventory.selectedItem.itemID){
			console.log("Unlocked!");
			this.addEvent.occur();
			console.log(this.inventory);
		}else if(this.item.itemID != this.inventory.selectedItem.itemID || this.inventory.selectedItem == null){
			console.log("Incorrect item!");
		}
	}else if(this.eventType == "lock" && this.inventory.selectedItem == null){
		console.log("Incorrect item!");	 
	}*/
}