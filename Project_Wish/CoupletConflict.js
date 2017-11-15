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
		this.game.add.image(350, 200, 'minotaur');
	},
   
    update: function(){
        // Call getRandomInsult()
        if(updateInsults){
            this.getThreeDifferentInsults();
            updateInsults = false;
        }
    },
	
	

	sayInsult: function(insult, pointer){
		//Say insult UI here
		pointer.game.add.sprite(75, 175, 'resBubble');
		thisText = pointer.game.add.text(96, 181, insult.response, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
		/*for (i = 0; i < coupletConflictInsults.length; i++){
			if (coupletConflictInsults[i].insult == insult){
				if (coupletConflictInsults[i].insultValue > coupletConflictInsults[i].responseValue){
					// Player wins
				}
				else if (coupletConflictInsults[i].insultValue < coupletConflictInsults[i].responseValue){
					// NPC Wins
				}
			}
		}*/
	},

	getRandomInsult: function(){
		var randomInsultNumber = Math.floor((Math.random() * coupletConflictInsults.length));
		return randomInsultNumber;
	},

	insultChosen: function(a, b, c){
		console.log(this.insult.insult);
		b.game.add.sprite(178, 0, 'ccBubble');
		this.thisText = b.game.add.text(199, 6, this.insult.insult, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
		sayInsult(this.insult, b);
	},
	addBtnText: function(insult, textGroup, x, y){
		var thisText;
		thisText = this.game.add.text(x, y, insult.insult, { font: "16px Arial", fill: "#FFFFFF", wordWrap:true, wordWrapWidth: 275 });
		textGroup.add(thisText);
	},

	displayPortrait: function(){
		this.game.add.sprite(2, this.game.world.height - 600, "portrait");
		this.game.add.sprite(23, this.game.world.height - 604, "polyMC");
	},

	// THIS IS THE FUNCTION YOU CALL IN THE NON-MODULE YOU DOOF!!!
	showInsultOptions: function(insult1, insult2, insult3){
		//Show insults in UI then return whichever one they click on

		var btn1 = this.game.add.button(2, this.game.world.height - 90, 'button', this.insultChosen, null, 1, 0, 2);
		var btn2 = this.game.add.button(2, this.game.world.height - 180, 'button', this.insultChosen, null, 1, 0, 2);
		var btn3 = this.game.add.button(2, this.game.world.height - 270, 'button', this.insultChosen, null, 1, 0, 2);

		btn1.insult = insult1;
		btn2.insult = insult2;
		btn3.insult = insult3;

		var textGroup = this.game.add.group();
		this.addBtnText(insult1, textGroup, 8, this.game.world.height - 86);
		this.addBtnText(insult2, textGroup, 8, this.game.world.height - 176);
		this.addBtnText(insult3, textGroup, 8, this.game.world.height - 266);
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

		while (insult3 == insult2 || insult3 == insult1){
			insult3 = this.getRandomInsult();
		}

		var chosenInsult = this.showInsultOptions(coupletConflictInsults[insult1], coupletConflictInsults[insult2], coupletConflictInsults[insult3], this.game);
		console.log(insult1);
		console.log("Chosen insult: " + coupletConflictInsults[chosenInsult]);
		this.displayPortrait();
		//sayInsult(coupletConflictInsults[chosenInsult].insult);
	},
}