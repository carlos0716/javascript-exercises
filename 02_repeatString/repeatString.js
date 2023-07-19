const repeatString = function(string, num) {
    let word = string;
    let newString = '';
    let errorMessage = 'ERROR'
    if (num < 0) {
       newString += errorMessage;
    } else if (num >= 0)
    for (let i = 0; i < num; i++) {
       
      newString += word;
     
    } return newString;
};

// Do not edit below this line
module.exports = repeatString;
