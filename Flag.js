function Flag(eventID, eventType){
	this.flagID = eventID;
	this.flagged = false;
}

Flag.prototype.flag = function(){
	if(this.flagged != true){
		this.flagged = true;
	}
}

Flag.prototype.unflag = function(){
	if(this.flagged == true){
		this.flagged = false;
	}
}