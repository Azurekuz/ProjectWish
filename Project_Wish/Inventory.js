function Inventory(gameContext, x, y, size){
	this.xLoc = x;
	this.yLoc = y;
	this.context = gameContext;
	this.itemAry = [];
	this.selectedItem = null;
	this.inventorySize = size;
	this.initializeInventory();
}

Inventory.prototype.showInventory = function(){
	this.inventoryImage = this.context.add.sprite(this.xLoc, this.yLoc, 'inventory');
	this.inventoryButtons = this.context.add.group();
	this.displayedItems = this.context.add.group();
	this.addButtons();
	this.displayItems();
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
		this.itemAry[this.curItem] = item
	}
	
	for(this.i = 0; this.i < this.context.flags.length; this.i++){
		if(this.context.flags[this.i].flagID == item.itemID){
			this.context.flags[this.i].flag();
		}
	}
	
	this.displayItems();
}

Inventory.prototype.selectItem= function(button, context, someBool){
	if(this.itemAry[button.index] != null && this.selectedItem == null){
		this.itemAry[button.index].select();
		this.selectedItem = this.itemAry[button.index];
		this.selectedItem.index = button.index;
		this.displayedItems.children[button.index].animations.frame = 1;
	}else if(this.selectedItem != null && this.itemAry[button.index] == this.selectedItem){
		this.deselectItem(button, context, someBool);
		this.selectedItem = null;
	}else if(this.itemAry[button.index] != null && this.selectedItem != null){
		this.selectedItem.interact(this.itemAry[button.index]);
		this.deselectItem(button, context, someBool, this.selectedItem);
		this.selectedItem = null;
	}
}

Inventory.prototype.deselectItem= function(button, context, someBool, item){
	this.item = item || null;
	if(item == null){
		this.itemAry[button.index].deselect();
		this.selectedItem = null;
		this.displayedItems.children[button.index].animations.frame = 0;
	}else if(item != null){
		item.deselect();
		this.selectedItem = null;
		this.displayedItems.children[item.index].animations.frame = 0;
	}
}

Inventory.prototype.findButton = function(itemID){
	for(this.i = 0; this.i < this.itemAry; this.i++){
		if(this.itemAry[this.i].itemID == itemID){
			return this.i;
		}
	}
	return -1;
}

Inventory.prototype.displayItems = function(){
	this.curItem = 0;
	while(this.displayedItems.children.length > 0){
		this.displayedItems.children[0].destroy();
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

Inventory.prototype.flagFind= function(key, game, flagAry){
	for(this.i = 0; this.i < flagAry.length; this.i++){
		if(flagAry[this.i].flagID == key){
			return flagAry[this.i].flagged;
		}
	}
	return false;
}

Inventory.prototype.removeItem=function(itemID){
	var newArray = [];
	for(this.i = 0; this.i < this.itemAry.length; this.i++){
		console.log(this.itemAry[this.i]);
		if(this.itemAry[this.i] != null && this.itemAry[this.i].itemID != itemID){
		   newArray.push(this.itemAry[this.i]);
		}
	}
	this.itemAry = newArray;
	this.displayItems();
}
