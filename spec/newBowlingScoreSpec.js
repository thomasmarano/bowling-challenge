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
});
