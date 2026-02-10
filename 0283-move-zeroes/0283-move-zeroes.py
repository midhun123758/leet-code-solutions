class Solution(object):
    def moveZeroes(self, nums1):


        n = len(nums1)
        for i in range(n):
            if nums1[i] == 0:
                for j in range(i + 1, n):
                    if nums1[j] != 0:
                        nums1[i], nums1[j] = nums1[j], nums1[i]
                        break   # stop after first non-zero swap

        return nums1
