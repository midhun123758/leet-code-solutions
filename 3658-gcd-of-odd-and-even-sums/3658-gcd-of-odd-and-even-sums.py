class Solution:
    def gcdOfOddEvenSums(self, n: int) -> int:
        listt=[ x*2 for x in list(range(1,n+1))]
        listt2=[x*2-1 for x in list(range(1,n+1))]
        sum1=sum(listt)
        sum2=sum(listt2)
        return sum1 - sum2