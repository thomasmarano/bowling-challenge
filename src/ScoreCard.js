function ScoreCard(){
  this.scores = [];
  this.currentframe = 1;
  this.movenumber = 1;
};


ScoreCard.prototype.scoresArray = function(){
    return this.scores
};

ScoreCard.prototype.roll = function(score){
    if (this.movenumber % 2 === 1) {
      this.scores.push([score]);
    } else {
      this.scores[this.currentframe - 1].push(score)
      this.currentframe += 1
    }
    this.movenumber += 1;
}
