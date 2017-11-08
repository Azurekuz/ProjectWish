var DionysusWish = {};

DionysusWish.Boot = function(game){};

DionysusWish.Boot.prototype = {
	preload: function(){
		
	},
	
	create: function(){
		//MaxPointers keeps the maximum amount of input via mouse or touch to 1.
		this.input.maxPointers = 1;
		//This pauses the game when the screen it's in is clicked off.
		this.stage.disableVisibilityChange = false;
		//This scales the game, but hopefully we don't need to worry about this.
		//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//Minimum browser window width
		this.scale.minWidth = 800;
		//Minimum browser window height
		this.scale.minHeight = 600;
		//This centers the game window horizontally
		this.scale.pageAlignHorizontally = true;
		//This centers the game window vertically
		this.scale.pageAlignVertically = true;
		
		this.input.addPointer();
		this.stage.backgroundColor = '#B53103';
		
		this.state.start('Preloader');
		
	}
}