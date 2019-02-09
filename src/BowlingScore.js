function BowlingScore(){
      this.score = 0;
      this.framesleft = 20;
      this.multiplier = 0;
};

BowlingScore.prototype.inputroll = function (score){
      if (this.multiplier !== 0){
        if (score === 10) {
            this.strike();
            this.score += (score * 2);
            this.multiplier -= 1;
          } else {
            this.score += (score * 2);
            this.framesleft -= 1;
            this.multiplier -= 1;
          }
      } else {
          if (score === 10) {
            this.strike();
            this.score += score
          } else {
            this.score += score;
            this.framesleft -= 1;
        }
    }
};

BowlingScore.prototype.strike = function(){
        this.framesleft -= 2
        this.multiplier += 2
}


BowlingScore.prototype.currentscore = function(){
      return this.score;
};

BowlingScore.prototype.gamecomplete = function(){
      if (this.framesleft > 0){
          return false;
      } else{
          return true;
      }
};
