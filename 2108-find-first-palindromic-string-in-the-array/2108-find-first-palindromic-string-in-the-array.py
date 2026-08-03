class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        count=0
        for i in range(len(words)):
            if words[i][::-1] == words[i]:
                return words[i] 
                count+=1
        if count < 1:
            return ""