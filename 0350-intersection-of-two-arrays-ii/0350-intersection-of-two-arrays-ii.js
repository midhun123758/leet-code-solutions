/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let array = [];
  let temp = [...nums2]; 

  for (let i = 0; i < nums1.length; i++) {
    if (temp.includes(nums1[i])) {
      array.push(nums1[i]); 
      temp.splice(temp.indexOf(nums1[i]), 1);
    }
  }

  return array;
};
