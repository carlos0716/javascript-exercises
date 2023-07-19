// const leapYears = function() {

// };
function leapYears(n) {
    if ((n % 100 === 0)&& (n % 400 !== 0)){
      return false;
    } else if (n % 4 === 0) {
      return true;
    }  else {
      return false;
    }
   }
// Do not edit below this line
module.exports = leapYears;
