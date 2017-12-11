DionysusWish.scene_Test = function(game){
	this.poemPouch = game.poemPouch
};

DionysusWish.scene_Test.prototype = {
	create: function(){
		this.sceneBG = this.add.image(0,0, 'road');
		this.portraitDisplay = this.add.sprite(313, this.game.world.height - 137, 'portraitB');
		this.charHead = this.game.add.sprite(335, this.game.world.height - 130, "polyMC");
		this.inventory = this.game.inventory;
		this.inventory.showInventory();
		
		this.sceneChangeA = new sceneChange(this.game, "scene_Start", 585, 360);
		
		this.npcLines = [0, "You there! Sirs! You look like you know where to get a drink around here."
						,"Water? Sirs, I am a Greek horse! It only follows that I drink wine.",
						"Ah, so you're a rapscallian. Well, then you should know how to scrounge together a drink for me. Figure it out, and I'll give you some lines for your troubles.",
						"Poetry, what else? Now quickly! I thirst!",
						"Do not waste time, man! I'm as thirsty as a horse!"];
		this.headALines = [0, "A drink? For you?", 
						  	"Ah, yes, well about that...",
						  "Lines of what?"]
		
		this.headBLines = [0, "What do pegasuses drink exactly? We can lead you to some water.",
						   "We're not exactly weclome in the local establishments any longer..."]
		this.lineOrder = ["NPC", "HeadA", "HeadB", "NPC", "HeadA","HeadB", "NPC","HeadA", "NPC"];
		this.testNPC = new NPC("pegasus", null, "npc_pegasus", 125, 290, this.game);
		this.testDialogue = new Dialogue(this.headALines, this.headBLines, this.npcLines, this.game, this.lineOrder);
		this.testNPC.dialogue = this.testDialogue;
		
		this.npcLines = [0, "Do not waste time, man! I'm as thirsty as a horse!"];
		this.headALines = [0, "We're on it..."]
		this.headBLines = [0, "We're on it!"]
		this.lineOrder = ["NPC", "HeadA", "HeadB"];
		this.negDialogue = new Dialogue(this.headALines, this.headBLines, this.npcLines, this.game, this.lineOrder);
		this.testNPC.negDialogue = this.negDialogue;
		
		this.npcLines = [0, "Oh, a drink at last! You boys have done a most excellent thing today. Here, take these words.", "'You're but a screaming shadow, a poor poet.'", "'Would you make two pies of our shameful heads?'", "and finally, 'Well you, not I, are past your rhyming days.'", "That's all I have for you two! You boys have my thanks! I wish you the best of luck!"];
		this.lineOrder = ["NPC", "NPC", "NPC", "NPC", "NPC"];
		this.posDialogue = new Dialogue(this.headALines, this.headBLines, this.npcLines, this.game, this.lineOrder);
		this.testNPC.posDialogue = this.posDialogue;
		
		this.lineRewards = [];
		this.lineRewards.push(new Insult(this.game, 3, 1, "You're but a screaming shadow, a poor poet.", " Said by an idiot, thine words sound and fury."));
		this.lineRewards.push(new Insult(this.game, 3, 1, "Would you make two pies of our shameful heads?", "Um... prepare thine throat!—Wait, there's two of them..."));
		this.lineRewards.push(new Insult(this.game, 3, 1, "Well you, not I, are past your rhyming days.", "What? No, why don't you just... go far away?"));
		
		this.testNPC.lineRewards = this.lineRewards;
		
		if(!this.inventory.flagFind("key", this.game, this.game.flags)){
			this.key = new Item(this.game, 'key', 'item_Key'); 
			this.event = new Event(this.game, 'getKey', "addObjInv", null, this.key, this.inventory);
			this.curSceneItem = new sceneItem(this.game, "key", 'scItem_Key', 740, 433, this.event, this.inventory);
			this.curSceneItem.show();
			this.event.sceneObject = this.curSceneItem;
		}
		this.wine = new Item(this.game, 'wine', 'item_Wine'); 
		if(!this.inventory.flagFind("grape", this.game, this.game.flags)){
			this.grape = new Item(this.game, 'grape', 'item_Grape'); 
			this.event = new Event(this.game, 'getGrape', "addObjInv", null, this.grape, this.inventory);
			this.curSceneItem = new sceneItem(this.game, "grape", 'scItem_Grape', 110, 470, this.event, this.inventory);
			this.curSceneItem.show();
			this.event.sceneObject = this.curSceneItem;
			this.bowl =  new Item(this.game, 'bowl', 'item_Bowl'); 
			this.getWine = new Event(this.game, 'getWine', "addObjInv", null, this.wine, this.inventory);
			this.lockEvent = new Event(this.game, 'getWine', "lock", null, this.wine, this.inventory, this.bowl);
			this.lockEvent.addEvent = this.getWine;
			this.grape.event = this.lockEvent;
		}
		this.testNPC.wantedItem = this.wine;
	},
	update: function(){
		if(this.testDialogue.inDialogue){
			if(!this.testDialogue.changeBubble && !this.testDialogue.wait){
				this.testDialogue.wait =true;
			   	this.game.time.events.add(Phaser.Timer.SECOND * 3.5, this.testDialogue.nextBubble, this.testDialogue);
			}else{
				this.testDialogue.initiate(this.testNPC.npcSprite, this.testNPC, this.game.activePointer, null);
			}
			if(this.testDialogue.i >= this.testDialogue.lineOrderAry.length){
				this.testDialogue.inDialogue = false;
				this.testDialogue.changeBubble = true;
				this.testDialogue.i = 0;
				for(this.testDialogue.ii = 0; this.testDialogue.bubbleGroup.children.length != 0;){
					this.testDialogue.bubbleGroup.children[this.testDialogue.ii].text.destroy();
					this.testDialogue.bubbleGroup.children[0].destroy();
				}
			}
		}
		
		if(this.posDialogue.inDialogue){
			if(!this.posDialogue.changeBubble && !this.posDialogue.wait){
				this.posDialogue.wait =true;
			   	this.game.time.events.add(Phaser.Timer.SECOND * 3.5, this.posDialogue.nextBubble, this.posDialogue);
			}else{
				this.posDialogue.initiate(this.testNPC.npcSprite, this.testNPC, this.game.activePointer, null);
			}
			if(this.posDialogue.i >= this.posDialogue.lineOrderAry.length){
				this.posDialogue.inDialogue = false;
				this.posDialogue.changeBubble = true;
				this.posDialogue.i = 0;
				for(this.posDialogue.ii = 0; this.posDialogue.bubbleGroup.children.length != 0;){
					this.posDialogue.bubbleGroup.children[this.posDialogue.ii].text.destroy();
					this.posDialogue.bubbleGroup.children[0].destroy();
				}
			}
		}
		
		if(this.negDialogue.inDialogue){
			if(!this.negDialogue.changeBubble && !this.negDialogue.wait){
				this.negDialogue.wait =true;
			   	this.game.time.events.add(Phaser.Timer.SECOND * 3.5, this.negDialogue.nextBubble, this.negDialogue);
			}else{
				this.negDialogue.initiate(this.testNPC.npcSprite, this.testNPC, this.game.activePointer, null);
			}
			if(this.negDialogue.i >= this.negDialogue.lineOrderAry.length){
				this.negDialogue.inDialogue = false;
				this.negDialogue.changeBubble = true;
				this.negDialogue.i = 0;
				for(this.negDialogue.ii = 0; this.negDialogue.bubbleGroup.children.length != 0;){
					this.negDialogue.bubbleGroup.children[this.negDialogue.ii].text.destroy();
					this.negDialogue.bubbleGroup.children[0].destroy();
				}
			}
		}
	},
};