function SkipBTN(skipTo, x, y, context, stopAudio){
	this.skipToState = skipTo;
	this.xLoc = x;
	this.yLoc = y;
	this.game = context
	this.audioToStop = stopAudio || null;
	this.game.add.button(this.xLoc, this.yLoc, 'skipBTN', this.skip, this, 1, 0, 2);
}

SkipBTN.prototype.skip= function(){
	if(this.audioToStop != null){
		this.audioToStop.stop();
	}
	this.game.state.start(this.skipToState);
}
// this.game.add.button(this.xLoc, this.yLoc, this.itemSprite, this.interact, this, 1, 0, 2);