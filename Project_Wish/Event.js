function Event(gameContext, eventID, eventType, scItem, item, inventory){
	this.eventID = eventID;
	this.game = gameContext;
	this.eventType = eventType;
	this.flagged = false;
	this.sceneObject = scItem || null;
	this.item = item || null;
	this.inventory = inventory || null;
}

Event.prototype.occur = function(){
	//TO DO
	if(this.eventType == "addObjInv" && this.item != null){
		console.log("Interacted!");
		this.sceneObject.remove();
		this.inventory.addItem(this.item);
	}
}