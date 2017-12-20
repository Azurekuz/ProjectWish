DionysusWish.cutscene_Win = function(game){
	this.game =game;
};

DionysusWish.cutscene_Win.prototype = {
	preload: function(){
		
	},
	
	create: function(){
		this.conflictBG = this.game.add.image(0,0,'athens');
		this.audience = this.game.add.group();
		this.audienceSprite = this.game.add.sprite(0, 300, 'audience');
		this.audienceSprite.animations.add('excited1', [0,1,2,3], 15, true);
		this.audienceSprite.animations.add('excited2', [0,1,2,3], 30, true);
		this.audienceSprite.animations.add('excited3', [0,1,2,3], 50, true);
		this.audienceSprite.animations.add('wait', [0], 1, false);
		this.audience.add(this.audienceSprite);
		this.conflictOpponent = this.game.add.sprite(440, 260, 'posse');
		
		this.audBooSFX = this.game.add.audio('3SecBoo');
		this.audCheerSFX = this.game.add.audio('3SecCheer');
		this.portraitDisplay = this.add.sprite(313, this.game.world.height - 137, 'portraitB');
		this.charHead = this.game.add.sprite(335, this.game.world.height - 130, "polyMC");
		
		this.npcLines = [0, "No! You'll pay for this! Literately! I'll be back with a lawyer!"];
		this.headALines = [0, "It's time to get off the stage, pal."]
		
		this.headBLines = [0, "Man, looks like our law degree might finally come in handy..."]
		this.lineOrder = ["HeadA", "NPC", "HeadB"];
		this.testDialogue = new Dialogue(this.headALines, this.headBLines, this.npcLines, this.game, this.lineOrder);
		this.testDialogue.inDialogue = true;
		this.testDialogue.initiate(this.conflictOpponent);
		this.endSoon = false;
		this.skipScene = new SkipBTN('ThankYou', 764, 0, this.game);
	},
   
    update: function(){
		if(this.testDialogue.inDialogue){
			if(!this.testDialogue.changeBubble && !this.testDialogue.wait){
				this.testDialogue.wait =true;
			   	//this.game.time.events.add(Phaser.Timer.SECOND * 3.5, this.testDialogue.nextBubble, this.testDialogue);
			}else{
				this.testDialogue.initiate(this.conflictOpponent);
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
		if(this.testDialogue.inDialogue && !this.endSoon){
			this.endSoon = true;
			this.audienceSprite.animations.play('excited2');
			this.audBooSFX.play();
			this.game.time.events.add(Phaser.Timer.SECOND * 18, this.endScene, this);
			this.game.time.events.add(Phaser.Timer.SECOND * 21, this.nextScene, this);
		}
    },
	
	endScene: function(){
		this.audienceSprite.animations.play('excited2');
		this.audCheerSFX.play();
		this.audCheerSFX.play();
		this.audCheerSFX.play();
		this.audCheerSFX.play();
	},
	
	nextScene: function(){
		this.state.start('ThankYou');
	},
}