DionysusWish.CoupletConflict = function(game){
	this.game =game;
	this.coupletConflictInsults= [];
	this.comeBacks=[];
	this.conflictBG;
	this.conflictOpponent;
};

DionysusWish.CoupletConflict.prototype = {
	preload: function(){
        
	},
	
	create: function(){
		this.conflictOver = false;
		this.updateInsults = true;
		for(this.i = 0; this.i < this.game.poemPouch.pouch.length; this.i++){
			this.coupletConflictInsults.push(this.game.poemPouch.pouch[this.i]);
		}
		for(this.i = 0; this.i < this.game.poemPouch.comeback.length; this.i++){
			this.comeBacks.push(this.game.poemPouch.comeback[this.i]);
		}
		
		this.comebacksLeft = true;
        this.conflictBG = this.game.add.image(0,0,'athens');
		this.audience = this.game.add.group();
		this.audienceSprite = this.game.add.sprite(280, 320, 'audience');
		this.audienceSprite.animations.add('wait',[0],false,1);
		this.audienceSprite.animations.add('cheer', [1,2,3,4,5], true, 1);
		this.audienceSprite.animations.add('boo', [6,7,8,9,10], true, 1);
		this.audience.add(this.audienceSprite);
		this.conflictOpponent = this.game.add.sprite(440, 260, 'posse');
		this.btnGroup = this.game.add.group();
		this.bubbleGroup = this.game.add.group();
		this.textGroup = this.game.add.group();
		this.oppHP = 3;
		this.playerHP = 3;
		this.round = 1;
		this.game.controlsOn = true;
		this.displayPortrait();
		this.btnSaver = [];
		
		if(this.game.BGMusic != null){
			this.game.BGMusic.stop();
		}
		this.game.BGMusic = this.game.add.audio('conflictTheme');
		this.game.BGMusic.loop = true;
		this.game.BGMusic.volume = 0.045;
		this.game.BGMusic.play();
		
		this.btnSFX= this.game.add.audio('clopBTN');
		this.audCheerSFX = this.game.add.audio('3SecCheer');
		this.audBooSFX = this.game.add.audio('3SecBoo');
	},
   
    update: function(){
        // Call getRandomInsult()
        if(this.updateInsults){
            this.getThreeDifferentInsults();
            this.updateInsults = false;
        }
    },

	//Removes an insult from the pouch
	removeInsult: function(insult){
		var newArray = [];
		for(i = 0; i < this.coupletConflictInsults.length; i++){
			if(!(this.coupletConflictInsults[i].insult == insult.insult)){
				newArray.push(this.coupletConflictInsults[i]);
			 }
		}
		this.coupletConflictInsults = newArray;
	},
	
	removeComeback: function(insult){
		var newArray = [];
		for(i = 0; i < this.comeBacks.length; i++){
			if(!(this.comeBacks[i].insult == insult.insult)){
				newArray.push(this.comeBacks[i]);
			 }
		}
		this.comeBacks = newArray;
	},
	
	audienceReact: function(isWon){
		if(isWon){
			this.audience.children[0].animations.play('cheer');
		}else if(!isWon){
			this.audience.children[0].animations.play('boo');
		}
	},
	//Starts a new Couplet Conflict round
	newRound: function(){
		console.log("Our HP: " + this.playerHP + " | " + "Opponent HP: " + this.oppHP);
		this.audience.children[0].animations.play('wait');
		if(this.playerHP != 0 && this.oppHP != 0){
			this.round = this.round + 1;
			if(this.round % 2 == 0){
				console.log("Comeback mode!");
				this.comebackMode();
				this.game.controlsOn = true; 
			}else{
				console.log("Regular mode!");
				this.game.controlsOn = true;
				for(this.i = 0; this.i < this.btnGroup.children.length; this.i++){
					this.btnGroup.children[this.i].insult = undefined;
					this.btnGroup.children[this.i].insult = this.btnSaver[this.i];
					while(this.btnGroup.children[this.i].btnText.children.length != 0){
						this.btnGroup.children[this.i].btnText.children[0].destroy();   
					}
					if(this.btnGroup.children[this.i].insult != undefined){
						this.addBtnText(this.btnGroup.children[this.i].insult, this.btnGroup.children[this.i], this.btnGroup.children[this.i].x + 6, this.btnGroup.children[this.i].y + 4);
					}
				}
				while(this.btnSaver.length != 0){
					this.btnSaver = [];
					console.log("Deleting saved buttons...");
				}
			}
		}
		if(this.playerHP == 0){
		   	this.game.add.text((this.world.centerX) - 150, (this.world.centerY), "YOU LOSE!", { font: "40px Times New Roman", fill: "#111111", fontWeight:900});
			console.log("You lost!");
			this.state.start("scene_Start");
		}else if(this.oppHP == 0){
			this.game.add.text((this.world.centerX) - 150, (this.world.centerY), "YOU WIN!", { font: "40px Times New Roman", fill: "#111111", fontWeight:900});
			console.log("You won!");
			this.state.start("ThankYou");
		}
	},
	
	comebackMode: function(){
		while(this.btnSaver.length != 0){
			this.btnSaver.pop();
			console.log("Popping saved buttons...");
		}
		for(this.i = 0; this.i < this.btnGroup.children.length; this.i++){
			this.btnSaver.push(this.btnGroup.children[this.i].insult);
		}
		console.log(this.btnSaver);
		console.log(this.comeBacks);
		this.comebacksLeft = false;
		for(this.i = 0; this.i < this.comeBacks.length; this.i++){
			if(this.comeBacks[this.i].response != null){
			   this.comebacksLeft = true;
				this.i = this.comeBacks.length;
			}
		}
		
		if(this.comebacksLeft){
			this.randomComeback = this.comeBacks[this.getRandomComeback()];
			while(this.randomComeback.response == null){
				this.randomComeback = this.comeBacks[this.getRandomComeback()];
				console.log("Generating current comeback...");
			}
			this.ranBtnIndex = Math.floor((Math.random() * this.btnGroup.children.length));
			this.btnGroup.children[this.ranBtnIndex].insult = this.randomComeback;
			this.addBtnText(this.btnGroup.children[this.ranBtnIndex].insult, this.btnGroup.children[this.ranBtnIndex], this.btnGroup.children[this.ranBtnIndex].x + 6, this.btnGroup.children[this.ranBtnIndex].y +4);
			
			this.otherIndexes =[];
			for(this.i = 0; this.i < this.btnGroup.children.length; this.i++){
				if(this.i != this.ranBtnIndex){
				   this.otherIndexes.push(this.i);
					this.btnGroup.children[this.i].insult =this.comeBacks[this.getRandomComeback()]; 
				}
			}
			while(this.btnGroup.children[this.otherIndexes[0]].insult == this.btnGroup.children[this.otherIndexes[1]].insult || this.btnGroup.children[this.otherIndexes[0]].insult == this.btnGroup.children[this.ranBtnIndex].insult || this.btnGroup.children[this.otherIndexes[1]].insult == this.btnGroup.children[this.ranBtnIndex].insult || this.btnGroup.children[this.otherIndexes[0]].insult.response != null || this.btnGroup.children[this.otherIndexes[1]].insult.response != null){
				this.btnGroup.children[this.otherIndexes[0]].insult =this.comeBacks[this.getRandomComeback()]; 
				this.btnGroup.children[this.otherIndexes[1]].insult =this.comeBacks[this.getRandomComeback()];
				console.log("Generating other buttons...");
			}
			this.addBtnText(this.btnGroup.children[this.otherIndexes[0]].insult, this.btnGroup.children[this.otherIndexes[0]], this.btnGroup.children[this.otherIndexes[0]].x + 6, this.btnGroup.children[this.otherIndexes[0]].y +4);
			this.addBtnText(this.btnGroup.children[this.otherIndexes[1]].insult, this.btnGroup.children[this.otherIndexes[1]], this.btnGroup.children[this.otherIndexes[1]].x + 6, this.btnGroup.children[this.otherIndexes[1]].y +4);
			var thisBubble = this.game.add.sprite(75, 175, 'resBubble');
			thisBubble.dialogue = this.game.add.text(96, 181, this.btnGroup.children[this.ranBtnIndex].insult.response, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
			this.bubbleGroup.add(thisBubble);
		}
	},
	
	//Checks who won the round. Returns 0 if Polykrites wins, and 1 if the opponent wins.
	isWinner: function(button){
			if (button.insult.insultVal > button.insult.responseVal || button.insult.insultVal == button.insult.responseVal){
				return true;
			}else if (button.insult.insultVal < button.insult.responseVal){
				return false;
			}
	},
	//Polykrites says something
	sayInsult: function(insult, pointer){
		//Say insult UI here
			pointer.game.add.sprite(75, 175, 'resBubble');
			pointer.game.add.sprite(178, 0, 'ccBubble');
			thisText = pointer.game.add.text(199, 6, insult.insult, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
			this.textGroup.add(thisText);
			thisText = pointer.game.add.text(96, 181, insult.response, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
			this.textGroup.add(thisText);
		/**/
	},
	
	//Grabs a random insult from the Poem Pouch
	getRandomComeback: function(){
		var randomInsultNumber = Math.floor((Math.random() * this.comeBacks.length));
		return randomInsultNumber;
	},
	
	getRandomInsult: function(){
		var randomInsultNumber = Math.floor((Math.random() * this.coupletConflictInsults.length));
		return randomInsultNumber;
	},
	
	//Returns the chosen insult
	insultChosen: function(a, b, c){
		if(this.round % 2 == 1 || this.comebacksLeft == false){
			this.btnSFX.play();
			if(b.game.controlsOn && a.insult != undefined){
				b.game.controlsOn = false;
				var thisBubble = b.game.add.sprite(178, 0, 'ccBubble');
				thisBubble.dialogue = b.game.add.text(203, 6, a.insult.insult, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
				this.bubbleGroup.add(thisBubble);
				b.game.time.events.add(Phaser.Timer.SECOND * 3, this.respond, this, this.bubbleGroup, b, a);
				b.game.time.events.add(Phaser.Timer.SECOND * 6, this.dismissDialogue, this, this.bubbleGroup, b, a);
				b.game.time.events.add(Phaser.Timer.SECOND * 11, this.newRound, this);
			}
		}else if(this.round % 2 == 0 && this.comebacksLeft == true){
			if(b.game.controlsOn && a.insult != undefined){
				b.game.controlsOn = false;
				var thisBubble = b.game.add.sprite(178, 0, 'ccBubble');
				thisBubble.dialogue = b.game.add.text(203, 6, a.insult.insult, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
				this.bubbleGroup.add(thisBubble);
				b.game.time.events.add(Phaser.Timer.SECOND * 8, this.dismissDialogue, this, this.bubbleGroup, b, a);
				b.game.time.events.add(Phaser.Timer.SECOND * 11, this.newRound, this);
			}
		}
	},
	
	respond: function(dialogueGroup, pointer, button){
		var thisBubble = pointer.game.add.sprite(75, 175, 'resBubble');
		thisBubble.dialogue = pointer.game.add.text(96, 181, button.insult.response, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
		this.bubbleGroup.add(thisBubble);
	},
	
	replaceInsult: function(button){
		if(this.coupletConflictInsults.length != 0){
			button.insult = this.coupletConflictInsults[this.getRandomInsult()];
			this.addBtnText(button.insult, button, button.x + 6, button.y+4);
		}
		this.removeInsult(button.insult);
	},
	
	dismissDialogue: function(dialogueGroup, pointer, button){
		if(this.isWinner(button) && this.round % 2 == 1 || this.comebacksLeft == false){
			this.audienceReact(true);
			this.audCheerSFX.play();
			this.oppHP -= 1;
		}else if(this.isWinner(button) && this.round % 2 == 0 && this.comebacksLeft == true){
			this.audienceReact(true);
			this.audCheerSFX.play(); 
		}else{
			this.audienceReact(false);
			this.audBooSFX.play();
			this.playerHP -= 1;
		}
		while(dialogueGroup.children.length !=0){
			dialogueGroup.children[0].dialogue.destroy();
			dialogueGroup.children[0].destroy();
			console.log("Dismissing dialogue...");
		}
		while(button.btnText.children.length != 0){
			button.btnText.children[0].destroy();
			console.log("Destroying button text...");
		}
		if(this.round % 2 == 0 && this.comebacksLeft){
			this.removeComeback(button.insult);
		}
		button.insult =null;
		this.replaceInsult(button);
	},
	
	addBtnText: function(insult, button, x, y){
		if(button.btnText == null){
			button.btnText = this.game.add.group();
		}
		while(button.btnText.children.length != 0){
			button.btnText.children[0].destroy();
		}
		button.btnText.add(this.game.add.text(x, y, insult.insult, { font: "16px Papyrus", fill: '#FFFFFF', wordWrap:true, wordWrapWidth: 275 }));
	},

	displayPortrait: function(){
		this.game.add.sprite(2, this.game.world.height - 600, "portrait");
		this.game.add.sprite(23, this.game.world.height - 604, "polyMC");
	},

	// THIS IS THE FUNCTION YOU CALL IN THE NON-MODULE YOU DOOF!!!
	showInsultOptions: function(insult1, insult2, insult3){
		//Show insults in UI then return whichever one they click on

		var btn1 = this.game.add.button(2, this.game.world.height - 70, 'button', this.insultChosen, this, 1, 0, 2);
		var btn2 = this.game.add.button(2, this.game.world.height - 138, 'button', this.insultChosen, this, 1, 0, 2);
		var btn3 = this.game.add.button(2, this.game.world.height - 206, 'button', this.insultChosen, this, 1, 0, 2);

		btn1.insult = insult1;
		btn2.insult = insult2;
		btn3.insult = insult3;
		
		this.btnGroup.add(btn1);
		this.btnGroup.add(btn2);
		this.btnGroup.add(btn3);

		this.addBtnText(insult1, btn1, 8, this.game.world.height - 66);
		this.addBtnText(insult2, btn2, 8, this.game.world.height - 134);
		this.addBtnText(insult3, btn3, 8, this.game.world.height - 202);
		
		this.removeInsult(insult1);
		this.removeInsult(insult2);
		this.removeInsult(insult3);
	},

	// Change this to wherever you want the loop to be in your game then copy block
	getThreeDifferentInsults: function(){
		var insult1 = this.getRandomInsult();
		var insult2 = this.getRandomInsult();
		var insult3 = this.getRandomInsult();
		while (insult1 == insult2){
			insult2 = this.getRandomInsult();
			console.log("Generating second insult...");
		}
		//this.removeInsult(insult1);
		//this.removeInsult(insult2);
		while (insult3 == insult2 || insult3 == insult1){
			insult3 = this.getRandomInsult();
			console.log("Generating third insult...");
		}
		
		this.showInsultOptions(this.coupletConflictInsults[insult1], this.coupletConflictInsults[insult2], this.coupletConflictInsults[insult3], this.game);
		//sayInsult(coupletConflictInsults[chosenInsult].insult);
	},
}