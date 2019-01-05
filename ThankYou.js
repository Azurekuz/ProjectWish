DionysusWish.ThankYou= function(game){

};

DionysusWish.ThankYou.prototype = {
	create: function(){
		this.game.add.image(0,0,'endScreen')
		if(this.game.BGMusic != null){
			this.game.BGMusic.stop();
		}
		this.title = this.add.text(this.world.centerX - 175, this.world.centerY - 50, 'Thank You', { font: "75px Times New Roman", fill: "#FFFFFF" });
		this.subtitle = this.add.text(this.world.centerX -250, this.world.centerY + 25, "This concludes the early demo of Dionysys's Wish. We thank you for time.", { font: "16px Papyrus", fill: "#FFFFFF" });
		this.subtitle = this.add.text(this.world.centerX -160, this.world.centerY + 43, "Time for questions, feedback, and criticisms!", { font: "16px Papyrus", fill: "#FFFFFF" });
		
		this.creditsButton = this.game.add.button(719, this.world.height - 32, 'creditsBTN', this.toTheCredits, this, 1, 0, 2);
	},
	
	toTheCredits: function(){
		this.state.start('Credits');
	},
};