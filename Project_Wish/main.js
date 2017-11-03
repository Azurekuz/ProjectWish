var mainState = {
    preload: function(){ //SECTION_PRELOAD
        
    },
    create: function(){ //SECTION_CREATE
	
	},
    update: function(){ //SECTION_UPDATE
		
	},
}
// Start Phaser, set the game size.
var game = new Phaser.Game(800, 600);

// There's a mainstate called "main".
game.state.add('main', mainState);

//Let's make sure the game actually starts.
game.state.start('main');