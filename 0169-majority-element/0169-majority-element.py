class Solution(object):
    def majorityElement(self, nums):
        large = 0
        val = nums[0]
        for num in set(nums):
            count = 0
            for j in range(len(nums)):
                if num == nums[j]:
                    count += 1
            if count > large:
                large = count
                val = num
        return val