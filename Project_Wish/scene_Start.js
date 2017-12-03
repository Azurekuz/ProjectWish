DionysusWish.scene_Start = function(game){};

DionysusWish.scene_Start.prototype = {
	create: function(){
		this.sceneBG = this.add.image(0,0, 'bridge');
		this.portraitDisplay = this.add.sprite(313, this.game.world.height - 137, 'portraitB');
		this.charHead = this.game.add.sprite(335, this.game.world.height - 130, "polyMC");
		this.inventory = new Inventory(this.game, this.game.world.width - 313, this.game.world.height - 142, 8);
		this.grapeItem = new Item(this.game, 'grape', 'item_Grape'); 
		this.event = new Event(this.game, 'tester', "addObjInv", null, this.grapeItem, this.inventory);
		this.grapeSceneItem = new sceneItem(this.game, "grape", 'scItem_Grape', 625, 375, this.event);
		this.event.sceneObject = this.grapeSceneItem;
	},
	update: function(){
		
	},
};