const sumAll = function (a, b) {
let newArray = [];

if ((!Number.isInteger(a)) || (!Number.isInteger(b))) return 'ERROR'; //<= Number.isInteger is a static method that determines whether the passed value is an integer.
  else if ((a < 0) || (b < 0)) return "ERROR";
  else if (a < b) {
    for(let i = a; i <= b; i++){
    newArray.push(i)
    }
  } else if (a > b) {
    for(let i = b; i <= a; i++){
    newArray.push(i)
    }
  } 
  return sum(newArray);
};

function sum(arr) {
const initValue = 0;
const sumWithInit = arr.reduce((accumulator, currentValue) => accumulator + 	
currentValue, initValue
);
    return sumWithInit;
}
// Do not edit below this line
module.exports = sumAll;
