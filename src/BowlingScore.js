function BowlingScore(){
      this.score = 0
      this.framesleft = 20
};

BowlingScore.prototype.inputroll = function (score){
      this.score += score;
      this.framesleft -= 1;
};


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

//
// BowlingScore.prototype.addsecondroll = function (score){
//       this.score += score;
// };
//
// //the function above repeats itself
//
//
