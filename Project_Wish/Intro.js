DionysusWish.Intro = function(game){};

DionysusWish.Intro.prototype = {
	preload: function(){
		
	},
	
	create: function(){
		this.game.add.image(0,0,"introCard");
		this.voiceFX = this.game.add.audio('introVoice');
		this.voiceFX.play();
		this.game.time.events.add(Phaser.Timer.SECOND * 47, this.startGame, this.game);
	},
	startGame: function(){
		this.state.start('CoupletConflict');
	},
}