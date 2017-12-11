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
		this.load.image('bridge', 'assets/images/backgrounds/bridge.png');
		this.load.image('portrait', 'assets/graphics/portraitDisplayB.png');
		this.load.image('portraitB','assets/graphics/portraitDisplay.png');
		this.load.spritesheet('polyMC', 'assets/graphics/Polykrites.png', 123, 129, 1);
		this.load.spritesheet('button', 'assets/graphics/button.png', 280, 68, 3);
		this.load.image('ccBubble', 'assets/graphics/coupletConflictBubbleB.png');
		this.load.image('resBubble', 'assets/graphics/responseBubble.png');
		this.load.image('minotaur','assets/images/bull.png');
		this.load.image('posse','assets/images/posse.png');
		this.load.spritesheet('audience', 'assets/images/gossipGroup.png', 172, 195, 11);
		this.load.image('btnFilter','assets/graphics/button.png');
		this.load.image('inventory','assets/graphics/inventory.png');
		this.load.spritesheet('inventBtn','assets/graphics/InventoryButton.png', 71, 65);
		this.load.spritesheet('item_Grape','assets/images/items/grape.png', 69, 61, 2);
		this.load.spritesheet('item_Bowl', 'assets/images/items/bowl.png', 69, 61, 2);
		this.load.spritesheet('item_Key', 'assets/images/items/key.png', 69, 61, 2);
		this.load.spritesheet('scItem_Grape','assets/images/items/scItem_Grape.png', 52, 46, 3);
		this.load.spritesheet('scItem_Bowl', 'assets/images/items/scItem_Bowl.png', 29, 20, 3);
		this.load.spritesheet('scItem_Key', 'assets/images/items/scItem_Key.png', 45, 25, 3);
		this.load.spritesheet('scItem_Chest', 'assets/images/items/scItem_Chest.png', 78, 40, 3);
		this.load.spritesheet('item_Wine', 'assets/images/items/wine.png', 69, 61, 2);
		this.load.spritesheet('sceneChange','assets/graphics/sceneChanger.png', 38, 51, 3);
		this.load.spritesheet('npc_pegasus','assets/images/npc/npc_pegasus.png', 162, 200);
		this.load.audio('conflictTheme', 'assets/music/cybordNinja.mp3');
		this.load.audio('overworldTheme', 'assets/music/Overworld.mp3');
		this.load.audio('clopBTN', 'assets/sfx/clopBTN.mp3');
		this.load.audio('3SecCheer', 'assets/sfx/3sec_cheer.mp3');
		this.load.audio('3SecBoo', 'assets/sfx/3sec_boo.mp3');
		this.load.audio('1SecSteps', 'assets/sfx/1sec_steps.mp3');
		this.load.image('rBubble', 'assets/graphics/rChat.png');
		this.load.image('lBubble', 'assets/graphics/lChat.png');
	},
	
	create: function(){
		this.preloadBar.cropEnabled = false;
	},
	
	update: function(){
		this.ready = true;
		this.state.start('MainMenu')
	}
};

