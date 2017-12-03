function Flag(gameContext, eventID, eventType){
	this.eventID = eventID;
	this.game = gameContext;
	this.eventType = eventType;
	this.flagged = false;
}

Flag.prototype.flag = function(){
	if(this.flagged != true){
		this.flagged = true;
	}
}