DionysusWish.CoupletConflict = function(game){
	this.updateInsults = true;
	this.coupletConflictInsults = game.poemPouch.pouch;
	this.conflictBG;
	this.conflictOpponent;
};

DionysusWish.CoupletConflict.prototype = {
	preload: function(){
        
	},
	
	create: function(){
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
		this.game.controlsOn = true;
		this.displayPortrait();
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
			this.game.controlsOn = true;
		}
		if(this.playerHP == 0){
		   	this.game.add.text((this.world.centerX) - 150, (this.world.centerY), "YOU LOSE!", { font: "40px Times New Roman", fill: "#111111", fontWeight:900});
		}else if(this.oppHP == 0){
			this.game.add.text((this.world.centerX) - 150, (this.world.centerY), "YOU WIN!", { font: "40px Times New Roman", fill: "#111111", fontWeight:900});
		}
	},
	//Checks who won the round. Returns 0 if Polykrites wins, and 1 if the opponent wins.
	isWinner: function(button){
			if (button.insult.insultValue > button.insult.responseValue){
				return true;
			}
			else if (button.insult.insultValue < button.insult.responseValue){
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
	getRandomInsult: function(){
		var randomInsultNumber = Math.floor((Math.random() * this.coupletConflictInsults.length));
		return randomInsultNumber;
	},
	
	//Returns the chosen insult
	insultChosen: function(a, b, c){
		if(b.game.controlsOn && a.insult != undefined){
			b.game.controlsOn = false;
			var thisBubble = b.game.add.sprite(178, 0, 'ccBubble');
			thisBubble.dialogue = b.game.add.text(199, 6, a.insult.insult, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
			this.bubbleGroup.add(thisBubble);
			b.game.time.events.add(Phaser.Timer.SECOND * 3, this.respond, this, this.bubbleGroup, b, a);
			b.game.time.events.add(Phaser.Timer.SECOND * 6, this.dismissDialogue, this, this.bubbleGroup, b, a);
			b.game.time.events.add(Phaser.Timer.SECOND * 11, this.newRound, this);
		}
	},
	respond: function(dialogueGroup, pointer, button){
		var thisBubble = pointer.game.add.sprite(75, 175, 'resBubble');
		thisBubble.dialogue = pointer.game.add.text(96, 181, button.insult.response, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
		this.bubbleGroup.add(thisBubble);
	},
	replaceInsult: function(button){
		console.log(this.coupletConflictInsults);
		if(this.coupletConflictInsults.length != 0){
			console.log('IF TRUE');
			button.insult = this.coupletConflictInsults[this.getRandomInsult()];
			this.addBtnText(button.insult, button, button.x + 6, button.y+4);
		}
		this.removeInsult(button.insult);
	},
	dismissDialogue: function(dialogueGroup, pointer, button){
		if(this.isWinner(button)){
			this.audienceReact(true);
			this.oppHP -= 1;
		}else{
			this.audienceReact(false);
			this.playerHP -= 1;
		}
		while(dialogueGroup.children.length !=0){
			dialogueGroup.children[0].dialogue.destroy();
			dialogueGroup.children[0].destroy();
		}
		button.btnText.destroy();
		delete button.insult;
		this.replaceInsult(button);
	},
	addBtnText: function(insult, button, x, y){
		button.btnText = this.game.add.group();
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
		}
		//this.removeInsult(insult1);
		//this.removeInsult(insult2);
		while (insult3 == insult2 || insult3 == insult1){
			insult3 = this.getRandomInsult();
		}
		
		this.showInsultOptions(this.coupletConflictInsults[insult1], this.coupletConflictInsults[insult2], this.coupletConflictInsults[insult3], this.game);
		//sayInsult(coupletConflictInsults[chosenInsult].insult);
	},
}