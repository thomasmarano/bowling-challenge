describe("Feature Tests", function(){
      var bowlinggame;

      beforeEach(function(){
          bowlinggame = new BowlingGame();
      })

      it('correctly calculates a gutter game (20 shots of 0 balls)', function(){
          for(i = 1; i <= 20; i++){
            bowlinggame.inputRoll(0)
          }
          bowlinggame.scoreCalculator();
          console.log(6);
          console.log(bowlinggame.scoreDisplayer());
          expect(bowlinggame.scoreDisplayer()).toEqual(0)
      })
})
