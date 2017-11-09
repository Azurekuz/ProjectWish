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
	},
	
	create: function(){
		this.preloadBar.cropEnabled = false;
	},
	
	update: function(){
		this.ready = true;
		this.state.start('MainMenu')
	}
};

