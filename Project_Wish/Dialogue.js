function Dialogue(headALines, headBLines, NPCLines, context, lineOrder){
	this.headL = headALines;
	this.headR = headBLines;
	this.npc = NPCLines;
	this.game = context;
	this.lineOrderAry = lineOrder;
	this.bubbleGroup = this.game.add.group();
	this.changeBubble = true;
	this.wait = false;
	this.inDialogue = false;
	this.i = 0;
}

Dialogue.prototype.initiate =function(chatSprite, button, pointer, someBool){
	if(this.changeBubble){
		this.changeBubble = false;
		var newBubble;
		for(this.ii = 0; this.bubbleGroup.children.length != 0;){
			this.bubbleGroup.children[this.ii].text.destroy();
			this.bubbleGroup.children[0].destroy();
		}
		if(this.lineOrderAry[this.i] == "HeadA"){
			newBubble = this.game.add.sprite(30, 425, 'lBubble');
			newBubble.text = this.game.add.group();
			newBubble.text = this.game.add.text(30 + 14, 425 + 7, this.headL[[parseInt(this.headL[0]) + 1]], { font: "12px Times New Roman", fill: '#000000', wordWrap:true, wordWrapWidth: 305 });
			this.bubbleGroup.add(newBubble);
			console.log(this.headL[[parseInt(this.headL[0]) + 1]]);
			this.headL[0] = (parseInt(this.headL[0]) + 1).toString();
		}else if(this.lineOrderAry[this.i] == "HeadB"){
			newBubble = this.game.add.sprite(455, 425, 'rBubble');
			newBubble.text = this.game.add.group();
			newBubble.text = this.game.add.text(455 + 14, 425 + 7, this.headR[[parseInt(this.headR[0]) + 1]], { font: "12px Times New Roman", fill: '#000000', wordWrap:true, wordWrapWidth: 305 });
			this.bubbleGroup.add(newBubble);
			console.log(this.headR[[parseInt(this.headR[0]) + 1]]);
			this.headR[0] = (parseInt(this.headR[0]) + 1).toString();
		}else if(this.lineOrderAry[this.i] == "NPC"){
			newBubble = this.game.add.sprite(chatSprite.world.x + chatSprite._frame.width, chatSprite.world.y - 71, 'rBubble');
			newBubble.text = this.game.add.group();
			newBubble.text = this.game.add.text(chatSprite.world.x + chatSprite._frame.width + 14, chatSprite.world.y - 65, this.npc[[parseInt(this.npc[0]) + 1]], { font: "12px Times New Roman", fill: '#000000', wordWrap:true, wordWrapWidth: 305 });
			this.bubbleGroup.add(newBubble);
			console.log(this.npc[[parseInt(this.npc[0]) + 1]]);
			this.npc[0] = (parseInt(this.npc[0]) + 1).toString();
		}
	}
}

Dialogue.prototype.nextBubble= function(){
	this.i = this.i + 1;
	this.wait = false;
	this.changeBubble = true;
}

