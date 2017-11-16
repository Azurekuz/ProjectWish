/*var coupletConflictInsults = [
            {insultValue: 1, responseValue: 3, insult: "Can we talk this all out somewhere a little more private?", response: "Away, and talk not; trouble us no more."},
            {insultValue: 1, responseValue: 3, insult: "I think I've misplaced my thesaurus...", response: "Then marvel'st at my words, and hold thine tongue."},
            {insultValue: 1, responseValue: 3, insult: "Hey! What's that over there?", response: "See better, fiend."},
			{insultValue: 3, responseValue: 1, insult: "You're but a screaming shadow, a poor poet.", response: " Said by an idiot, thine words sound and fury."},
			{insultValue: 3, responseValue: 1, insult: "Would you make two pies of our shameful heads?", response: "Um... prepare thine throat!—Wait, there's two of them..."},
			{insultValue: 3, responseValue: 1, insult: "Well you, not I, are past your rhyming days.", response: "What? No, why don't you just... go far away?"}
];*/

function sayInsult(insult, pointer){
    //Say insult UI here
	console.log(insult.insult);
	pointer.game.add.sprite(75, 175, 'resBubble');
	pointer.game.add.sprite(178, 0, 'ccBubble');
	thisText = pointer.game.add.text(199, 6, insult.insult, { font: "20px Times New Roman", fill: "#000000", wordWrap:true, wordWrapWidth: 350 });
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
}

/*function getRandomInsult(){
    //var randomInsultNumber = Math.floor((Math.random() * coupletConflictInsults.length));
    return randomInsultNumber;
}

function insultChosen(a, b, c){
    console.log(this.insult.insult);
	sayInsult(this.insult, b);
}

function addBtnText(insult, game, textGroup, x, y){
	var thisText;
	thisText = game.add.text(x, y, insult.insult, { font: "16px Arial", fill: "#FFFFFF", wordWrap:true, wordWrapWidth: 275 });
	textGroup.add(thisText);
}

function displayPortrait(game){
	game.add.sprite(2, game.world.height - 600, "portrait");
	game.add.sprite(23, game.world.height - 604, "polyMC");
}

// THIS IS THE FUNCTION YOU CALL IN THE NON-MODULE YOU DOOF!!!
function showInsultOptions(insult1, insult2, insult3, game){
    //Show insults in UI then return whichever one they click on
	
    var btn1 = game.add.button(2, game.world.height - 90, 'button', this.insultChosen, null, 1, 0, 2);
	var btn2 = game.add.button(2, game.world.height - 180, 'button', this.insultChosen, null, 1, 0, 2);
    var btn3 = game.add.button(2, game.world.height - 270, 'button', this.insultChosen, null, 1, 0, 2);
	
    btn1.insult = insult1;
    btn2.insult = insult2;
    btn3.insult = insult3;
	
	var textGroup = game.add.group();
	addBtnText(insult1, game, textGroup, 8, game.world.height - 86);
	addBtnText(insult2, game, textGroup, 8, game.world.height - 176);
	addBtnText(insult3, game, textGroup, 8, game.world.height - 266);
}

// Change this to wherever you want the loop to be in your game then copy block
function getThreeDifferentInsults(game){
    var insult1 = getRandomInsult();
    var insult2 = getRandomInsult();
    var insult3 = getRandomInsult();
    console.log("Insult:"+insult1);
    while (insult1 == insult2){
        insult2 = getRandomInsult();
    }
 
    while (insult3 == insult2 || insult3 == insult1){
        insult3 = getRandomInsult();
    }
    
    var chosenInsult = showInsultOptions(coupletConflictInsults[insult1], coupletConflictInsults[insult2], coupletConflictInsults[insult3], game);
    console.log(insult1);
    console.log("Chosen insult: " + coupletConflictInsults[chosenInsult]);
	displayPortrait(game);
    //sayInsult(coupletConflictInsults[chosenInsult].insult, game);
}*/