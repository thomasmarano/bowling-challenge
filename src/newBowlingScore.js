function BowlingGame(){
    this.frames = []
    this.score = 0
};

BowlingGame.prototype.inputRoll = function(score){
    return this.frames.push(score);
}

BowlingGame.prototype.scoreCalculator = function(){
    for (var i = 0; i < this.frames.length; i++){
        this.score += this.frames[i];
    }
    this.strikeCalculator();
    this.spareCalculator();
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
}
