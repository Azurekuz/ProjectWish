DionysusWish.Game = function(game){};

DionysusWish.Game.prototype = {
	create: function(){
		
		this.buildWorld();
	},
	
	buildWorld: function(){
		this.add.image(0,0, 'road');
	},
	update: function(){},
}