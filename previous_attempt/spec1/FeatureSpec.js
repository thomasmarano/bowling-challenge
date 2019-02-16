// describe("Feature Test", function(){
//
//     var bowlingscore;
//
//     beforeEach(function(){
//         bowlingscore = new BowlingScore();
//     });
//
//
//     it('returns a total score of 0 & complete scorecard for 20x 0 rolls', function(){
//         for(var i = 1; i<=20; i++) {
//             bowlingscore.inputroll(0);
//         }
//         console.log(bowlingscore.framesleft)
//         expect(bowlingscore.currentscore()).toEqual(0)
//         expect(bowlingscore.gamecomplete()).toEqual(true)
//     });
//
//     it('doubles your next two rolls if you get a strike', function(){
//         bowlingscore.inputroll(10)
//         bowlingscore.inputroll(5)
//         bowlingscore.inputroll(5)
//         expect(bowlingscore.currentscore()).toEqual(30)
//     });
//
//     it('doubles your next roll if you get a spare', function(){
//         bowlingscore.inputroll(5)
//         bowlingscore.inputroll(5)
//         bowlingscore.inputroll(8)
//         expect(bowlingscore.currentscore()).toEqual(26)
//     })
//
//
//
// });
