function BowlingScore(){
    this.score = 0
};


BowlingScore.prototype.addfirstroll = function (score){
      this.score += score;
};

BowlingScore.prototype.addsecondroll = function (score){
      this.score += score;
};


BowlingScore.prototype.totalscore = function(){
      return this.score;
};
