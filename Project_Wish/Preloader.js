DionysusWish.Preloader = function(game){
	this.ready = false;
};

DionysusWish.Preloader.prototype = {
	
	preload: function(){
		this.title = this.add.text(this.world.centerX - 215, this.world.centerY - 250, 'Dionysus Wish', { font: "75px Times New Roman", fill: "#FF4044" });
		this.preloadBar = this.add.sprite(this.world.centerX -175, this.world.centerY + 100, 'loadBar');
		this.load.setPreloadSprite(this.preloadBar);
		this.load.image('road', 'assets/images/backgrounds/roads.png');
		this.load.image('athens', 'assets/images/backgrounds/athens.png');
		this.load.image('portrait', 'assets/graphics/portraitDisplayB.png');
		this.load.spritesheet('polyMC', 'assets/graphics/Polykrites.png', 123, 129, 1);
		this.load.spritesheet('button', 'assets/graphics/button.png', 280, 90, 3);
		this.load.image('ccBubble', 'assets/graphics/coupletConflictBubbleB.png');
		this.load.image('minotaur','assets/images/bull.png');
	},
	
	create: function(){
		this.preloadBar.cropEnabled = false;
	},
	
	update: function(){
		this.ready = true;
		this.state.start('MainMenu')
	}
};

