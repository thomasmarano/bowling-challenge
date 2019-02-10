function BowlingGame(){
    this.frames = []
    this.score = 0
};

BowlingGame.prototype.inputRoll = function(score){
    return this.frames.push(score);
}

BowlingGame.prototype.scoreCalculator = function(){
    for (var i = 0; i <= this.frames.length; i++){
        this.score += this.frames[i]
    }

    // return this.score = this.frames.reduce(function(a, b) {a + b}, 0)
}

BowlingGame.prototype.scoreDisplayer = function(){
    return this.score;
}
