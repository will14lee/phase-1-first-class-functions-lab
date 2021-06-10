const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers(){
    return drivers.slice(0,2)
    };
// console.log(returnFirstTwoDrivers());

function returnLastTwoDrivers(){
    return drivers.slice(2,4)
    };

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]
   
// console.log(selectingDrivers);    

function createFareMultiplier(price){
    return function (multiplier){
        return price*multiplier};
    };

let fareDoubler= createFareMultiplier(2)

let fareTripler= createFareMultiplier(3)
//     describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
//       it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
//         expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Sally', 'Bob']);
//       });
  
//       it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
//         expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Freddy', 'Claudia']);
//       });
//     });
//   });
let selectDifferentDrivers= function arrayofDrivers (drivers){
    return (drivers ? returnFirstTwoDrivers() : returnLastTwoDrivers()) 
}
console.log(selectDifferentDrivers(false));
