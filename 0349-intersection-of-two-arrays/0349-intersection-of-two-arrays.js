/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    let array2=[]
    for(i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])){
            if(!array2.includes(nums1[i]))
            array2.push(nums1[i])
        }  
    }
   



    return  array2};