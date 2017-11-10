DionysusWish.MainMenu = function(game){
	this.startBG;
	this.startPrompt;
}

DionysusWish.MainMenu.prototype = {
	
	create: function(){
		startBG = this.add.image(0,0, 'titleLogo');
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		
		startPrompt = this.add.text(this.world.centerX -85, this.world.centerY + 75, 'Click anywhere to start!', { font: "16px Arial", fill: "#FF4044" });
	},
	
	startGame: function(pointer){
		this.state.start('Game');
	}
}