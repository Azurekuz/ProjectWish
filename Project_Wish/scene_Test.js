DionysusWish.scene_Test = function(game){
	this.poemPouch = game.poemPouch
};

DionysusWish.scene_Test.prototype = {
	create: function(){
		this.sceneBG = this.add.image(0,0, 'road');
		this.portraitDisplay = this.add.sprite(313, this.game.world.height - 137, 'portraitB');
		this.charHead = this.game.add.sprite(335, this.game.world.height - 130, "polyMC");
		this.inventory = this.game.inventory;
		this.inventory.showInventory();
		
		this.testChange = new sceneChange(this.game, "scene_Start", 585, 360);
	},
	update: function(){
		
	},
};