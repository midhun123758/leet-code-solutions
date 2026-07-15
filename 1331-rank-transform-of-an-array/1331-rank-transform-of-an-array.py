class Solution:
    def arrayRankTransform(self, n: List[int]) -> List[int]:
        val = []

        list1 = sorted(set(n))

        list2 = [x for x in range(1, len(list1) + 1)]

        comp = {list1[i]: list2[i] for i in range(len(list1))}

        for i in range(len(n)):
            val.append(comp[n[i]])

        return val