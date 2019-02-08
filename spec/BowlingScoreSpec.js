describe("BowlingScore", function(){

    var bowlingscore;

    beforeEach(function(){
        bowlingscore = new BowlingScore();
    });

    it('returns your current score', function(){
      expect(bowlingscore.totalscore()).toEqual(bowlingscore.score)
    });

    it('adds your first roll to your total score', function(){
        bowlingscore.addfirstroll(3)
        expect(bowlingscore.totalscore()).toEqual(3);
    });

    it('adds your second roll to your total score', function(){
        bowlingscore.addsecondroll(3)
        expect(bowlingscore.totalscore()).toEqual(3);
    });

});
