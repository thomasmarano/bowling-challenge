describe("ScoreCard", function(){

    var scorecard;

    beforeEach(function(){
        scorecard = new ScoreCard();
    })

    it('starts with an empty scorecard array', function(){
        expect(scorecard.scoresArray()).toEqual([])
    })

    it('adds 1 to your movenumber after you input a roll', function(){
        scorecard.roll(3)
        expect(scorecard.movenumber).toEqual(2)
    })


    it('adds your first roll to a new array within the scores array', function(){
        scorecard.roll(3)
        expect(scorecard.scores[0]).toEqual([3])
    })


    it('adds your second roll to the same array as your first roll', function(){
      scorecard.roll(3)
      scorecard.roll(3)
      expect(scorecard.scores[0]).toEqual([3, 3])
    })

    it('adds your third roll to a new array', function(){
      scorecard.roll(3)
      scorecard.roll(3)
      scorecard.roll(3)
      expect(scorecard.scores[0]).toEqual([3, 3], [3])
    })

    it('adds your fourth roll to the same array as your third roll', function(){
      scorecard.roll(3)
      scorecard.roll(3)
      scorecard.roll(3)
      scorecard.roll(3)
      expect(scorecard.scores[0]).toEqual([3, 3], [3, 3])
    })

    it('returns an array with 10 sub-arrays of [0,0] for 20x 0 rolls', function(){
      for (i = 1; i <= 20; i++){
        scorecard.roll(0)
      }
      expect(scorecard.scores.length).toEqual(10)
      expect(scorecard.scores[0]).toEqual([0,0])
      expect(scorecard.scores[9]).toEqual([0,0])
    })
})
