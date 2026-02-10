class Solution(object):
    

#     def twoSum(self, numbers, target):
#         """
#         :type numbers: List[int]
#         :type target: int
#         :rtype: List[int]
#         """
#         for i in range(len(numbers)):
#             for j in range(i+1,len(numbers)):
#                 if numbers[i]+numbers[j]==target:
#                     return [i+1, j+1]

      def twoSum(self, numbers, target):

        i = 0
        j = len(numbers) - 1

        while i < j:
            s = numbers[i] + numbers[j]
            if s == target:
                return [i + 1, j + 1]
            elif s < target:
                i += 1
            else:
                j -= 1
