DionysusWish.Preloader = function(game){
	this.ready = false;
};

DionysusWish.Preloader.prototype = {
	
	preload: function(){
		this.titleScreen = this.add.image(0,0, 'titleLogo');
	},
	
	create: function(){
	
	},
	
	update: function(){
		this.ready = true;
	}
};

