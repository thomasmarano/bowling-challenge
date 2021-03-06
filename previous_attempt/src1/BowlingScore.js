function BowlingScore(){
      this.frames = [];
      this.score = 0;
      this.framesleft = 20;
      this.multiplier = 0;
      this.firstroll = 100;
      this.secondroll = 100;
};


BowlingScore.prototype.inputroll = function (score){
  // if (this.framesleft === 2) {
  //     this.finalFrame(score);
  // } else {
      if (this.multiplier !== 0){
          this.score += (score * 2);
          this.multiplier -= 1;
          if (score === 10) {
              this.strike();
          } else {
            this.individualFrame(score)
          }
      } else {
          this.score += score
          if (score === 10) {
            this.strike();
          } else {
            this.individualFrame(score);
        }
    }
  // }
};

BowlingScore.prototype.finalFrame = function(roll){

}

BowlingScore.prototype.strike = function(){
        this.framesleft -= 2
        this.multiplier += 2
}

BowlingScore.prototype.individualFrame = function(score) {
    if (this.firstroll === 100) {
        this.firstroll = score;
        this.framesleft -= 1;
    } else {
        this.secondroll = score;
        this.spareCalculator();
        this.framesleft -= 1;
        this.resetMoves
    }
  }

  BowlingScore.prototype.resetMoves = function() {
      this.firstroll = 100
      this.secondroll = 100
  }

  BowlingScore.prototype.spareCalculator = function() {
        if (this.firstroll + this.secondroll === 10) {
            this.multiplier += 1
          }
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
