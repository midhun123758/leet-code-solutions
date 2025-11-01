/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let value = BigInt(digits.join('')); 
  value = value + 1n; 

  let array2 = [];
  let array = value.toString().split(""); 
  
  for (let i = 0; i < array.length; i++) {
    array2.push(Number(array[i]));
  }

  return array2;
};


