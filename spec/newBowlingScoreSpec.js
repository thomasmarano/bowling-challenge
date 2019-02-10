describe("BowlingGame", function(){
      var bowlinggame;

      beforeEach(function(){
          bowlinggame = new BowlingGame();
      })

      it('adds a roll to your move counter', function(){
          bowlinggame.rollAdder();
          expect(bowlinggame.moveNumber).toEqual(1)
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

      it('gives you a strike bonus if you get 4 strikes in a row', function(){
          bowlinggame.inputRoll(10);
          bowlinggame.inputRoll(10);
          bowlinggame.inputRoll(10);
          bowlinggame.inputRoll(10);
          bowlinggame.scoreCalculator();
          expect(bowlinggame.scoreDisplayer()).toEqual(90)
      })

      it('gives you a spare bonus', function(){
          bowlinggame.inputRoll(5);
          bowlinggame.inputRoll(5);
          bowlinggame.inputRoll(4);
          bowlinggame.inputRoll(4);
          bowlinggame.scoreCalculator();
          expect(bowlinggame.scoreDisplayer()).toEqual(22)
      })

      it('gives you a the correct score for several spares & strikes', function(){
          bowlinggame.inputRoll(5);
          bowlinggame.inputRoll(5);
          bowlinggame.inputRoll(10);
          bowlinggame.inputRoll(5);
          bowlinggame.inputRoll(5);
          bowlinggame.inputRoll(10);
          bowlinggame.inputRoll(4);
          bowlinggame.inputRoll(0);
          bowlinggame.inputRoll(3);
          bowlinggame.scoreCalculator();
          expect(bowlinggame.scoreDisplayer()).toEqual(81)
      })

      it('gives you a the correct score for several spares & strikes', function(){
          bowlinggame.inputRoll(5);
          bowlinggame.inputRoll(5);
          bowlinggame.inputRoll(10);
          bowlinggame.inputRoll(5);
          bowlinggame.inputRoll(5);
          bowlinggame.inputRoll(10);
          bowlinggame.inputRoll(4);
          bowlinggame.inputRoll(0);
          bowlinggame.inputRoll(3);
          bowlinggame.scoreCalculator();
          expect(bowlinggame.scoreDisplayer()).toEqual(81)
      })

      it('successfully ends the game after 20 throws of 0', function(){
          for (var i = 1; i <= 20; i++) {
            bowlinggame.inputRoll(0)
          }
          bowlinggame.scoreCalculator();
          // console.log(bowlinggame.moveNumber)
          expect(bowlinggame.gameComplete()).toEqual(true)
      })

      it('successfully counts your moves', function(){
        for (var i = 1; i <= 14; i++) {
          bowlinggame.inputRoll(0)
        }
        bowlinggame.inputRoll(10);
        bowlinggame.inputRoll(10);
        bowlinggame.inputRoll(10);
        bowlinggame.scoreCalculator();
        expect(bowlinggame.gameComplete()).toEqual(true)
      })

      it('raises an error if user puts in more rolls than allowed', function(){
        for (var i = 1; i <= 20; i++) {
          bowlinggame.inputRoll(0)
        }
        expect(function() {bowlinggame.inputRoll(0)}).toThrow();
      })

      it('does not raise an error if you roll a strike on your last move', function(){
        for (var i = 1; i <= 18; i++) {
          bowlinggame.inputRoll(0)
        }
          bowlinggame.inputRoll(10);
          console.log(bowlinggame.frames)
          console.log(bowlinggame.moveNumber)
          console.log(bowlinggame.frames[bowlinggame.frames.length - 1])
          bowlinggame.inputRoll(8);

      })


});
