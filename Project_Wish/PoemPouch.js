function PoemPouch(gameContext){
	this.pouch = [];
	this.game = gameContext;
	
	this.pouch.push(new Insult(this.game, 1, 3, "Can we talk this all out somewhere a little more private?", "Away, and talk not; trouble us no more."));
	this.pouch.push(new Insult(this.game, 1, 3, "I think I've misplaced my thesaurus...", "Then marvel'st at my words, and hold thine tongue."));
	this.pouch.push(new Insult(this.game, 1, 3, "Hey! What's that over there?", "See better, fiend."));
}

PoemPouch.prototype.addInsult= function(insultVal, responseVal, insult, response){
	this.pouch.push(new Insult(this.game, insultVal, responseVal, insult, response));
}

//Default Insults
/*			{insultValue: 1, responseValue: 3, insult: "Can we talk 			this all out somewhere a little more private?", 				response: "Away, and talk not; trouble us no more."},
            {insultValue: 1, responseValue: 3, insult: "I think I've misplaced my thesaurus...", response: "Then marvel'st at my words, and hold thine tongue."},
            {insultValue: 1, responseValue: 3, insult: "Hey! What's that over there?", response: "See better, fiend."}
*/

//Better Insults
/*
,
			{insultValue: 3, responseValue: 1, insult: "You're but a screaming shadow, a poor poet.", response: " Said by an idiot, thine words sound and fury."},
			{insultValue: 3, responseValue: 1, insult: "Would you make two pies of our shameful heads?", response: "Um... prepare thine throat!—Wait, there's two of them..."},
			{insultValue: 3, responseValue: 1, insult: "Well you, not I, are past your rhyming days.", response: "What? No, why don't you just... go far away?"}
*/