DionysusWish.CoupletConflict = function(game){};
var updateInsults = true;

DionysusWish.CoupletConflict.prototype = {
	preload: function(){
        
	},
	
	create: function(){
        this.game.add.image(0,0,'road');
	},
   
    update: function(){
        // Call getRandomInsult()
        if(updateInsults){
            getThreeDifferentInsults(this.game);
            updateInsults = false;
        }
    }
}