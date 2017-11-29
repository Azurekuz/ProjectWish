DionysusWish.scene_Start = function(game){};

DionysusWish.scene_Start.prototype = {
	create: function(){
		this.sceneBG = this.add.image(0,0, 'bridge');
		this.portraitDisplay = this.add.sprite(313, this.game.world.height - 137, 'portraitB');
		this.charHead = this.game.add.sprite(335, this.game.world.height - 130, "polyMC");
		this.inventory = new Inventory(this.game, this.game.world.width - 313, this.game.world.height - 142);
	},
	
	addInventoryButtons: function(){
		var btnIndex = 0;
		for(var y = (this.game.world.height - 138); y < (this.game.world.height); y = y + 68){
			for(var x = (this.game.world.width - 308); x < (this.game.world.width); x = x + 77){
				var btn = this.game.add.button(x, y, 'inventBtn', this.btnTest, this, 1, 0, 2);
				btn.index = btnIndex;
				this.inventBtnGroup.add(btn);
				btnIndex = btnIndex + 1;
			}
		}
	},
	btnTest:function(a, b, c){
		//Just an empty test function
		console.log(a.index);
	},
	update: function(){
		
	},
};