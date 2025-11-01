/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(array) {
let value=[]
let find=[]
for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            value.push(array[i])
        }
    }
}
for(i=0;i<array.length;i++){
    if(!value.includes(array[i])){
       find.push(array[i])
    }
}
console.log(value);

return Number(find)

}
