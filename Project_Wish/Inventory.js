function Inventory(gameContext, x, y){
	this.xLoc = x;
	this.yLoc = y;
	this.context = gameContext;
	this.itemAry = [];
	this.inventoryImage = this.context.add.sprite(x, y, 'inventory');
	this.inventoryButtons = this.context.add.group();
	this.addButtons();
}

Inventory.prototype.addButtons = function(){
	this.btnIndex = 0;
	for(this.curY = this.yLoc + 4; this.curY < (this.yLoc + 140); this.curY = this.curY + 68){
		console.log("Y: " + this.curY);
		for(this.curX = this.xLoc + 5; this.curX < (this.xLoc + 311); this.curX = this.curX + 77){
			console.log("X: " + this.curX);
			this.btn = this.context.add.button(this.curX, this.curY, 'inventBtn', this.btnTest, this, 1, 0, 2);
			this.btn.index = this.btnIndex;
			this.inventoryButtons.add(this.btn);
			this.btnIndex = this.btnIndex + 1;
		}
	}
}

Inventory.prototype.btnTest = function(a, b, c){
		//Just an empty test function
		console.log(a.index);
}