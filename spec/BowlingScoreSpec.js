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
        expect(bowlingscore.score).toEqual(3)
    });

    it('tells you that game is not complete after 1 rolls', function(){
        expect(bowlingscore.gamecomplete()).toEqual(false)
    });

    it('tells you that game is complete after 20 frames', function(){
        bowlingscore.framesleft = 0;
        expect(bowlingscore.gamecomplete()).toEqual(true)
    });

    it('skips the next frame when you get a strike', function(){
        bowlingscore.inputroll(10)
        expect(bowlingscore.framesleft).toEqual(18)
    })

    it('turns on a multiplier of 2 when you get a strike for next 2 moves', function(){
        bowlingscore.inputroll(10);
        expect(bowlingscore.multiplier).toEqual(2);
    })

    it('reduces your frames by 2 & adds to your multiple on a strike', function(){
        bowlingscore.strike();
        expect(bowlingscore.framesleft).toEqual(18);
        expect(bowlingscore.multiplier).toEqual(2);
    })

    it('adds the first roll of a frame to an instance variable', function(){
        bowlingscore.inputroll(4)
        expect(bowlingscore.firstroll).toEqual(4)
    })

    it('turns on a multiplier of 1 when you get a spare for next move', function(){
        bowlingscore.inputroll(5);
        bowlingscore.inputroll(5);
        expect(bowlingscore.multiplier).toEqual(1);
    })

    it('correctly calculates score & frames left in the case of 3 strikes in a row', function(){
        bowlingscore.inputroll(10);
        bowlingscore.inputroll(10);
        bowlingscore.inputroll(10);
        bowlingscore.inputroll(10);
        bowlingscore.inputroll(10);
        console.log(bowlingscore.score)
    })

});
