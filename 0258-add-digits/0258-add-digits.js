/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

while(num>=10){
  
    num=num.toString().split("").reduce((sum,index)=>sum+Number(index),0)
}
return num
};