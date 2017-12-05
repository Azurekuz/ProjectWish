DionysusWish.MainMenu = function(game){
	this.startBG;
	this.startPrompt;
	this.game = game;
	this.game.poemPouch = new PoemPouch(this.game);
	console.log(this.game);
}

DionysusWish.MainMenu.prototype = {
	
	create: function(){
		startBG = this.add.image(0,0, 'titleLogo');
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		startPrompt = this.add.text(this.world.centerX -85, this.world.centerY + 75, 'Click anywhere to start!', { font: "16px Papyrus", fill: "#FF4044" });
		this.game.inventory = new Inventory(this.game, this.game.world.width - 313, this.game.world.height - 142, 8);
	},
	
	startGame: function(pointer){
		this.state.start('scene_Start');
	}
}