describe("BowlingScore", function(){

    var bowlingscore;

    beforeEach(function(){
        bowlingscore = new BowlingScore();
    });

    it('returns the current score', function(){
        expect(bowlingscore.currentscore()).toEqual(0);
    });

    it('adds your roll to the current score', function(){
        bowlingscore.inputroll(3);
        console.log(bowlingscore.score)
        expect(bowlingscore.score).toEqual(3)
    });

    it('tells you that game is not complete after 1 rolls', function(){
        expect(bowlingscore.gamecomplete()).toEqual(false)
    });

    it('tells you that game is complete after 20 rolls', function(){
        bowlingscore.framesleft = 0;
        expect(bowlingscore.gamecomplete()).toEqual(true)
    });

});
