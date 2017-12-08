function PoemPouch(gameContext){
	this.pouch = [];
	this.comeback = [];
	this.game = gameContext;
	
	this.pouch.push(new Insult(this.game, 1, 3, "Can we talk this all out somewhere a little more private?", "Away, and talk not; trouble us no more."));
	this.pouch.push(new Insult(this.game, 1, 3, "I think I've misplaced my thesaurus...", "Then marvel'st at my words, and hold thine tongue."));
	this.pouch.push(new Insult(this.game, 1, 3, "Hey! What's that over there?", "See better, fiend."));
	/*this.pouch.push(new Insult(this.game, 3, 1, "You're but a screaming shadow, a poor poet.", " Said by an idiot, thine words sound and fury."));
	this.pouch.push(new Insult(this.game, 3, 1, "Would you make two pies of our shameful heads?", "Um... prepare thine throat!—Wait, there's two of them..."));
	this.pouch.push(new Insult(this.game, 3, 1, "Well you, not I, are past your rhyming days.", "What? No, why don't you just... go far away?"));*/
	
	this.comeback.push(new Insult(this.game, 2, 2, "What a sigh thou cry! My heart is sorely charged.", " I would not have such foul heads on my person, for the dignity of the whole body!"));
	this.comeback.push(new Insult(this.game, 2, 2, "Try, then, to pull all about / mine many ears.", "Hence, rotten thing, or I shall shake thy rhymes out of thy two skulls!"));
	this.comeback.push(new Insult(this.game, 2, 2, "I have unclasped to thee the book, even of my rhythmic rhymes.", "Your faces are a book, where men do read lame lyrics."));
	this.comeback.push(new Insult(this.game, 1, 2, "Well, it takes one to know ... two?", null));
	this.comeback.push(new Insult(this.game, 1, 2, "I know you are, but what am I?", null));
	this.comeback.push(new Insult(this.game, 1, 2, "Hey, now that's not very nice...", null));
	
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