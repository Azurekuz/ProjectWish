function NPC(npcID, dialogue, spriteID, x, y, context){
	this.npcID = npcID;
	this.game = context;
	this.xLoc = x;
	this.yLoc = y;
	this.npcSprite = this.game.add.button(this.xLoc, this.yLoc, spriteID, this.speak, this, 1, 0, 2); //TODO
	this.dialogue = dialogue;
	this.posDialogue = null;
	this.negDialogue = null;
	this.wantedItem = null;
	this.lineRewards = [];
}

NPC.prototype.speak = function(a, b, c){
	if(!this.flagFind(this.npcID + "Init")){
		this.dialogue.npc[0] = "0";
		this.dialogue.headL[0] = "0";
		this.dialogue.headR[0] = "0";
		this.dialogue.inDialogue = true;
		this.dialogue.initiate(this.npcSprite, a, b, c);
		this.flagEvent(this.npcID + "Init")
	}else if(!this.flagFind(this.npcID + "Quest")){
		if(!this.checkInventory()){
			this.negDialogue.npc[0] = "0";
			this.negDialogue.headL[0] = "0";
			this.negDialogue.headR[0] = "0";
			this.negDialogue.inDialogue = true;
			console.log(this.wantedItem);
			this.negDialogue.initiate(this.npcSprite, a, b, c);
		}else{
			this.posDialogue.npc[0] = "0";
			this.posDialogue.headL[0] = "0";
			this.posDialogue.headR[0] = "0";
			this.posDialogue.inDialogue = true;
			this.posDialogue.initiate(this.npcSprite, a, b, c);
			for(this.i = 0; this.i < this.lineRewards.length; this.i++){
				this.game.poemPouch.pouch.push(this.lineRewards[this.i]);
			}
			this.flagEvent(this.npcID + "Quest");
		}
	}
}

NPC.prototype.checkInventory = function(){
	console.log(this.game.inventory.itemAry);
	for(this.i = 0; this.i < this.game.inventory.itemAry.length; this.i++){
		if(this.game.inventory.itemAry[this.i] != null && this.game.inventory.itemAry[this.i].itemID == this.wantedItem.itemID){
			this.game.inventory.removeItem(this.wantedItem.itemID);
			return true;
		}
	}
	return false;
}

NPC.prototype.flagFind= function(key){
	for(this.i = 0; this.i < this.game.flags.length; this.i++){
		if(this.game.flags[this.i].flagID == key){
			return this.game.flags[this.i].flagged;
		}
	}
	return false;
}

NPC.prototype.flagEvent= function(key){
	for(this.i = 0; this.i < this.game.flags.length; this.i++){
		if(this.game.flags[this.i].flagID == key && !this.game.flags[this.i].flagged){
			this.game.flags[this.i].flagged = true;
		}
	}
}
