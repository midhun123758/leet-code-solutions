/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let array=[]

   for(i=0;i<nums.length;i++){
    for (j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j]){
          array.push(nums[i])
        }
    }
  
   }
  return array



};