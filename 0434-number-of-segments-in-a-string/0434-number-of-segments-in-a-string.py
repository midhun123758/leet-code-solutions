class Solution(object):
    def countSegments(self, s):
        """
        :type s: str
        :rtype: int
        """
        count=0
        data=s.split(" ")
        for i in data:
            if i!="":
                count+=1
        return count