describe("Feature Test", function(){

    var bowlingscore;

    beforeEach(function(){
        bowlingscore = new BowlingScore();
    });


    it('returns a total score of 0 & complete scorecard for 20x 0 rolls', function(){
        for(var i = 1; i<=20; i++) {
            bowlingscore.inputroll(0);
        }
        expect(bowlingscore.currentscore()).toEqual(0)
        console.log(bowlingscore.currentscore());
        expect(bowlingscore.gamecomplete()).toEqual(true)
    });

    //
    // it('returns your current score', function(){
    //   expect(bowlingscore.totalscore()).toEqual(bowlingscore.score)
    // });
    //
    // it('adds your first roll to your total score', function(){
    //     bowlingscore.addfirstroll(3)
    //     expect(bowlingscore.totalscore()).toEqual(3);
    // });
    //
    // it('adds your second roll to your total score', function(){
    //     bowlingscore.addsecondroll(3)
    //     expect(bowlingscore.totalscore()).toEqual(3);
    // });

});

// it('has a maximum temperature of 25 degrees', function() {
//     for (var i = 0; i < 6; i++) {
//       thermostat.up();
//     }
//     expect(thermostat.getCurrentTemperature()).toEqual(25);
//   });

//
// 1. Start by writing a (failing) feature test for the simplest version of the scorecard.
//
// > If you score 0 on a roll, twenty times (2 rolls for a frame), assert that the scorecard is a) complete, b) the total is 0.
//
// 2. Write (failing) unit tests for the units of code you need to write.
//
// 3. Write code to pass the unit tests one at time, until the feature passes.
