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

//     describe('createFareMultiplier()', function () {
//       it('returns a function', function () {
//         const fareMultiplier = createFareMultiplier(2);
  
//         expect(fareMultiplier).to.be.a('function');
//       });
  
//       it('should multiply a given value using the created multiplier', function () {
//         const fareQuintupler = createFareMultiplier(5);
  
//         expect(fareQuintupler(5)).to.eql(25);
//       });
//     });
function createFareMultiplier(price=5){
    function fareQuintupler(){
        price*5};
        return fareQuintupler(5)
    };

console.log(createFareMultiplier());
// const fareQuintupler= createFareMultiplier(5,5)
// console.log(fareQuintupler);

//     describe('fareDoubler()', function () {
//       it('is a function', function () {
//         expect(fareDoubler).to.be.a('function');
//       });
  
//       it('doubles fares', function () {
//         expect(fareDoubler(10)).to.eql(20);
//       });
//     });
  
//     describe('fareTripler()', function () {
//       it('is a function', function () {
//         expect(fareTripler).to.be.a('function');
//       });
  
//       it('triples fares', function() {
//         expect(fareTripler(12)).to.eql(36);
//       });
//     });
  
//     describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
//       it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
//         expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Sally', 'Bob']);
//       });
  
//       it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
//         expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Freddy', 'Claudia']);
//       });
//     });
//   });
  