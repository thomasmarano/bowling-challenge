function BowlingGame(){
    this.frames = []
    this.score = 0
    // this.rolls = 0
};

BowlingGame.prototype.inputRoll = function(score){
    return this.frames.push(score);
}

BowlingGame.prototype.scoreCalculator = function(){
    for (var i = 0; i < this.frames.length; i++){
        this.score += this.frames[i];
          if (this.frames[i] === 10){
              this.score += (this.frames[i + 1] || 0) + (this.frames[i + 2] || 0)
            }
    }
}

BowlingGame.prototype.scoreDisplayer = function(){
    return this.score;
}
