/**
 * @param {string[]} words
 * @return {string}
 */

 
var firstPalindrome = function(words) {
for(i=0;i<words.length;i++){
  let val=words[i].split("").reverse().join("");
    if(words[i]==val){
        return words[i]
    }
}
return  ""
};