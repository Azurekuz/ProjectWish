DionysusWish.scene_Start = function(game){
	this.poemPouch = game.poemPouch
};

DionysusWish.scene_Start.prototype = {
	create: function(){
		this.sceneBG = this.add.image(0,0, 'bridge');
		this.portraitDisplay = this.add.sprite(313, this.game.world.height - 137, 'portraitB');
		this.charHead = this.game.add.sprite(335, this.game.world.height - 130, "polyMC");
		this.inventory = this.game.inventory;
		this.inventory.showInventory();
		
		this.wrongGrape = new Item(this.game, 'wrongGrape', 'item_Grape'); 
		this.event = new Event(this.game, 'getGrape', "addObjInv", null, this.wrongGrape, this.inventory);
		this.curSceneItem = new sceneItem(this.game, "wrongGrape", 'scItem_Grape', 575, 375, this.event, this.inventory);
		this.event.sceneObject = this.curSceneItem;
		
		this.grape = new Item(this.game, 'grape', 'item_Grape'); 
		this.event = new Event(this.game, 'getGrape', "addObjInv", null, this.grape, this.inventory);
		this.curSceneItem = new sceneItem(this.game, "grape", 'scItem_Grape', 500, 400, this.event, this.inventory);
		this.event.sceneObject = this.curSceneItem;
		
		this.bowl =  new Item(this.game, 'bowl', 'item_Bowl'); 
		this.event = new Event(this.game, 'getBowl', "lock", null, this.bowl, this.inventory, this.grape);
		this.curSceneItem = new sceneItem(this.game, "bowl", 'scItem_Bowl', 115, 415, this.event, this.inventory);
		this.event.sceneObject = this.curSceneItem;
		
		/*this.curItemA = new Item(this.game, 'grape', 'item_Grape'); 
		this.event = new Event(this.game, 'getGrape', "addObjInv", null, this.curItemA, this.inventory);
		this.curSceneItem = new sceneItem(this.game, "grape", 'scItem_Grape', 625, 375, this.event);
		this.event.sceneObject = this.curSceneItem;
		
		this.curItemB = new Item(this.game, 'bowl', 'item_Bowl'); 
		this.eventB = new Event(this.game, 'getGrape', "addObjInv", null, this.curItemB, this.inventory);
		
		this.eventC = new Event(this.game, 'bowlLock', "lock", null, this.curSceneItem, this.inventory, null);
		this.curSceneItem = new sceneItem(this.game, "bowl", 'scItem_Bowl', 105, 400, this.eventC, this.inventory);
		this.eventB.sceneObject = this.curSceneItem;
		this.eventC.addEvent = this.eventB;*/
		
		console.log(this.inventory);
	},
	update: function(){
		
	},
};