DionysusWish.CoupletConflict = function(game){};
var updateInsults = true;
var coupletConflictInsults = [
            {insultValue: 1, responseValue: 3, insult: "Can we talk this all out somewhere a little more private?", response: "Away, and talk not; trouble us no more."},
            {insultValue: 1, responseValue: 3, insult: "I think I've misplaced my thesaurus...", response: "Then marvel'st at my words, and hold thine tongue."},
            {insultValue: 1, responseValue: 3, insult: "Hey! What's that over there?", response: "See better, fiend."},
			{insultValue: 3, responseValue: 1, insult: "You're but a screaming shadow, a poor poet.", response: " Said by an idiot, thine words sound and fury."},
			{insultValue: 3, responseValue: 1, insult: "Would you make two pies of our shameful heads?", response: "Um... prepare thine throat!—Wait, there's two of them..."},
			{insultValue: 3, responseValue: 1, insult: "Well you, not I, are past your rhyming days.", response: "What? No, why don't you just... go far away?"}
];
DionysusWish.CoupletConflict.prototype = {
	preload: function(){
        
	},
	
	create: function(){
        this.game.add.image(0,0,'road');
		this.game.add.image(440, 260, 'posse');
		this.btnGroup = this.game.add.group();
		this.bubbleGroup = this.game.add.group();
		this.textGroup = this.game.add.group();
	},
   
    update: function(){
        // Call getRandomInsult()
        if(updateInsults){
            this.getThreeDifferentInsults();
            updateInsults = false;
        }
    },
	//Removes an insult from the pouch
	removeInsult: function(insult){
		var newArray = [];
		for(i = 0; i < coupletConflictInsults.length; i++){
			if(coupletConflictInsults[i].insult != insult.insult){
				newArray.push(insult);
			 }
		}
		coupletConflictInsults = newArray;
	},
	//Starts a new Couplet Conflict round
	newRound: function(){
		
	},
	//Opponent responds to Polykrites
	sayResponse: function(){
		
	},
	//Checks who won the round. Returns 0 if Polykrites wins, and 1 if the opponent wins.
	returnWinner: function(polyInsult, response){
		for (i = 0; i < coupletConflictInsults.length; i++){
			if (coupletConflictInsults[i].insult == polyInsult){
				if (coupletConflictInsults[i].insultValue > coupletConflictInsults[i].responseValue){
					return 0;
				}
				else if (coupletConflictInsults[i].insultValue < coupletConflictInsults[i].responseValue){
					return 1;
				}
			}
		}
	},
	//Polykrites says something
	sayInsult: function(insult, pointer){
		//Say insult UI here
		console.log(insult.insult);
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
		var randomInsultNumber = Math.floor((Math.random() * coupletConflictInsults.length));
		return randomInsultNumber;
	},
	
	//Returns the chosen insult
	insultChosen: function(a, b, c){
		console.log(b);
		var thisBubble = b.game.add.sprite(178, 0, 'ccBubble');
		thisBubble.dialogue = b.game.add.text(199, 6, a.insult.insult, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
		this.bubbleGroup.add(thisBubble);
		b.game.time.events.add(Phaser.Timer.SECOND * 3, this.respond, this, this.bubbleGroup, b, a);
		b.game.time.events.add(Phaser.Timer.SECOND * 8, this.dismissDialogue, this, this.bubbleGroup);
		
	},
	respond: function(dialogueGroup, pointer, button){
		var thisBubble = pointer.game.add.sprite(75, 175, 'resBubble');
		thisBubble.dialogue = pointer.game.add.text(96, 181, button.insult.response, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
		this.bubbleGroup.add(thisBubble);
	},
	
	dismissDialogue: function(dialogueGroup){
		while(dialogueGroup.children.length !=0){
			dialogueGroup.children[0].dialogue.destroy();
			dialogueGroup.children[0].destroy();
		}
		
	},
	addBtnText: function(insult, button, x, y){
		button.btnText = this.game.add.group();
		button.btnText.add(this.game.add.text(x, y, insult.insult, { font: "16px Arial", fill: "#FFFFFF", wordWrap:true, wordWrapWidth: 275 }));
		console.log(button.btnText);
	},

	displayPortrait: function(){
		this.game.add.sprite(2, this.game.world.height - 600, "portrait");
		this.game.add.sprite(23, this.game.world.height - 604, "polyMC");
	},

	// THIS IS THE FUNCTION YOU CALL IN THE NON-MODULE YOU DOOF!!!
	showInsultOptions: function(insult1, insult2, insult3){
		//Show insults in UI then return whichever one they click on

		var btn1 = this.game.add.button(2, this.game.world.height - 90, 'button', this.insultChosen, this, 1, 0, 2);
		var btn2 = this.game.add.button(2, this.game.world.height - 180, 'button', this.insultChosen, this, 1, 0, 2);
		var btn3 = this.game.add.button(2, this.game.world.height - 270, 'button', this.insultChosen, this, 1, 0, 2);

		btn1.insult = insult1;
		btn2.insult = insult2;
		btn3.insult = insult3;
		
		this.btnGroup.add(btn1);
		this.btnGroup.add(btn2);
		this.btnGroup.add(btn3);

		this.addBtnText(insult1, btn1, 8, this.game.world.height - 86);
		this.addBtnText(insult2, btn2, 8, this.game.world.height - 176);
		this.addBtnText(insult3, btn3, 8, this.game.world.height - 266);
	},

	// Change this to wherever you want the loop to be in your game then copy block
	getThreeDifferentInsults: function(){
		var insult1 = this.getRandomInsult();
		var insult2 = this.getRandomInsult();
		var insult3 = this.getRandomInsult();
		console.log("Insult:"+insult1);
		while (insult1 == insult2){
			insult2 = this.getRandomInsult();
		}
		//this.removeInsult(insult1);
		//this.removeInsult(insult2);
		while (insult3 == insult2 || insult3 == insult1){
			insult3 = this.getRandomInsult();
		}
		console.log(coupletConflictInsults);
		var chosenInsult = this.showInsultOptions(coupletConflictInsults[insult1], coupletConflictInsults[insult2], coupletConflictInsults[insult3], this.game);
		console.log(insult1);
		console.log("Chosen insult: " + coupletConflictInsults[chosenInsult]);
		this.displayPortrait();
		//sayInsult(coupletConflictInsults[chosenInsult].insult);
	},
}