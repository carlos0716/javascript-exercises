const reverseString = function(string) {
    let newArray = Array.from(string);
  	let reversedArray = newArray.reverse();
  	let arrayToString = reversedArray.join('');
    return arrayToString;
};
console.log(reverseString('fuck'));
// Do not edit below this line
module.exports = reverseString;
