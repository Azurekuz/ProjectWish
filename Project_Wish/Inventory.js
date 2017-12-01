function Inventory(gameContext, x, y, size){
	this.xLoc = x;
	this.yLoc = y;
	this.context = gameContext;
	this.itemAry = [];
	this.inventoryImage = this.context.add.sprite(x, y, 'inventory');
	this.inventoryButtons = this.context.add.group();
	this.addButtons();
	this.selectedItem = null;
	this.inventorySize = size;
	this.initializeInventory();
	this.displayedItems = this.context.add.group();
}

Inventory.prototype.addButtons = function(){
	this.btnIndex = 0;
	for(this.curY = this.yLoc + 4; this.curY < (this.yLoc + 140); this.curY = this.curY + 68){
		for(this.curX = this.xLoc + 5; this.curX < (this.xLoc + 311); this.curX = this.curX + 77){
			this.btn = this.context.add.button(this.curX, this.curY, 'inventBtn', this.selectItem, this, 1, 0, 2);
			this.btn.index = this.btnIndex;
			this.inventoryButtons.add(this.btn);
			this.btnIndex = this.btnIndex + 1;
		}
	}
}

Inventory.prototype.initializeInventory = function(){
	for(this.inventSlot = 0; this.inventSlot < this.inventorySize; this.inventSlot++){
		this.itemAry[this.inventSlot] = null;
	}
}

Inventory.prototype.addItem= function(item){
	this.curItem = 0;
	while(this.curItem < this.inventorySize && this.itemAry[this.curItem] != null){
		if(this.curItem == this.inventorySize - 1 && this.itemAry[this.curItem] != null){
			console.log("ERROR: INVENTORY IS FULL!");
		}
		this.curItem = this.curItem + 1;
	}
	if(this.itemAry[this.curItem] == null){
		this.itemAry[this.curItem] = item;
		this.displayItems();
	}
}

Inventory.prototype.selectItem= function(button, context, someBool){
	if(this.itemAry[button.index] != null && this.selectedItem == null){
		this.itemAry[button.index].select();
		this.selectedItem = this.itemAry[button.index];
		this.displayedItems.children[button.index].animations.frame = 1;
	}else if(this.selectedItem != null && this.itemAry[button.index] == this.selectedItem){
		this.itemAry[button.index].deselect();
		this.selectedItem = null;
		this.displayedItems.children[button.index].animations.frame = 0;
	}
}

Inventory.prototype.deselectItem= function(button, context, someBool){
	if(this.itemAry[button.index] != null && this.selectedItem == null){
		this.itemAry[button.index].select();
		this.selectedItem = this.itemAry[button.index];
	}
	this.displayedItems.children[button.index].animations.frame = 1;
}

Inventory.prototype.displayItems = function(){
	this.curItem = 0;
	for(this.index = 0; this.index < this.displayedItems.children.length; this.index++){
		this.displayedItems.children[this.index].destroy();
	}
	for(this.curY = this.yLoc + 4; this.curY < (this.yLoc + 140); this.curY = this.curY + 68){
		for(this.curX = this.xLoc + 7; this.curX < (this.xLoc + 311); this.curX = this.curX + 77){
			if(this.itemAry[this.curItem] != null){
				this.curSprite = this.context.add.sprite(this.curX, this.curY, this.itemAry[this.curItem].itemSprite);
				this.displayedItems.add(this.curSprite);
			}
			this.curItem = this.curItem + 1;
		}
	}
}
