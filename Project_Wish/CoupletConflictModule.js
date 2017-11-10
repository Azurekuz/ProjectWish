var coupletConflictInsults = [
            {insultValue: 0, responseValue: 100, insult: "Can we talk this all out somewhere a little more private?", response: "Shut up"},
            {insultValue: 50, responseValue: 40, insult: "I think I've misplaced my thesaurus...", response: "You suck"},
            {insultValue: 100, responseValue: 0, insult: "blah blah blah", response: "You smell like a fish"}
];

function sayInsult(insult){
    //Say insult UI here
    for (i = 0; i < coupletConflictInsults.length; i++){
        if (coupletConflictInsults[i].insult == insult){
            if (coupletConflictInsults[i].insultValue > coupletConflictInsults[i].responseValue){
                // Player wins
            }
            else if (coupletConflictInsults[i].insultValue < coupletConflictInsults[i].responseValue){
                // NPC Wins
            }
        }
    }
}

function getRandomInsult(){
    var randomInsultNumber = Math.floor((Math.random() * coupletConflictInsults.length));
    return randomInsultNumber;
}

function insultChosen(a, b, c){
    console.log(this.insult.insult);
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
	
	console.log(insult1);
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
    //sayInsult(coupletConflictInsults[chosenInsult].insult);
}