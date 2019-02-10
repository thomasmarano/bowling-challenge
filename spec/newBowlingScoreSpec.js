describe("BowlingGame", function(){
      var bowlinggame;

      beforeEach(function(){
          bowlinggame = new BowlingGame();
      })

      it('adds a score to the frame', function(){
          bowlinggame.inputRoll(5);
          expect(bowlinggame.frames).toContain(5)
      })

      it('calculates the total score in all your frames', function(){
          bowlinggame.inputRoll(5);
          bowlinggame.inputRoll(3);
          bowlinggame.scoreCalculator();
          expect(bowlinggame.scoreDisplayer()).toEqual(8)
      });

      it('gives you a strike bonus if you get a strike', function(){
          bowlinggame.inputRoll(10);
          bowlinggame.inputRoll(5);
          bowlinggame.inputRoll(3);
          bowlinggame.scoreCalculator();
          expect(bowlinggame.scoreDisplayer()).toEqual(26)
      })

      it('gives you a strike bonus if you get 2 strikes in a row', function(){
          bowlinggame.inputRoll(10);
          bowlinggame.inputRoll(10);
          bowlinggame.scoreCalculator()
          expect(bowlinggame.scoreDisplayer()).toEqual(30)
      })
      it('gives you a strike bonus if you get 4 strikes in a row', function(){
          bowlinggame.inputRoll(10);
          bowlinggame.inputRoll(10);
          bowlinggame.inputRoll(10);
          bowlinggame.inputRoll(10);
          bowlinggame.scoreCalculator();
          expect(bowlinggame.scoreDisplayer()).toEqual(90)
      })

});
