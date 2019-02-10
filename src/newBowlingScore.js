function BowlingGame(){
    this.frames = [];
    this.score = 0;
    this.moveNumber = 0;
    this.finalMoveStrikeCounter = 0;
};

BowlingGame.prototype.inputRoll = function(score){
    if(this.finalMoveStrikeCounter === 2) {
      throw new Error("10 Frames Completed");
    } else if(this.moveNumber === 20) {
        this.finalMove(score);
    } else {
      this.rollAdder();
      if (score === 10) {
          this.rollAdder();
      }
      return this.frames.push(score);
    }
}

BowlingGame.prototype.finalMove = function(score){
     if ((this.frames[frames.length - 1] + this.frames[frames.length - 2]) === 10) {
        this.frames.push(score)
        this.finalMoveStrikeCounter += 2
    } else if((this.frames[frames.length - 1] === 10)){
        this.frames.push(score)
        this.finalMoveStrikeCounter += 1;
    } else {
        throw new Error("10 Frames Completed");
    }
}


BowlingGame.prototype.scoreCalculator = function(){
    for (var i = 0; i < this.frames.length; i++){
        this.score += this.frames[i];
    }
    this.strikeCalculator();
    this.spareCalculator();
}

BowlingGame.prototype.rollAdder = function(){
    this.moveNumber += 1;
}

BowlingGame.prototype.scoreDisplayer = function(){
    return this.score;
}

BowlingGame.prototype.strikeCalculator = function(){
  for (var i = 0; i < this.frames.length; i++){
    if (this.frames[i] === 10){
        this.score += (this.frames[i + 1] || 0) + (this.frames[i + 2] || 0)
      }

  }
}

BowlingGame.prototype.spareCalculator = function(){
  for (var i = 0; i < this.frames.length; i++){
    if (this.frames[i] === 10) {continue;}
    if((this.frames[i] + this.frames[i + 1]) === 10) {
        this.score += (this.frames[i+2] || 0)
        i++
    }
  }

BowlingGame.prototype.gameComplete = function(){
    if (this.moveNumber >= 20) {
        return true
    } else {
        return false
    }
}
}
