/*
 * @lc app=leetcode.cn id=4 lang=typescript
 * @lcpr version=30102
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let m = nums1.length,
    n = nums2.length;
  let i = 0,
    j = 0;
  let newArr = [];
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      newArr.push(nums1[i++]);
    } else {
      newArr.push(nums2[j++]);
    }
  }
  newArr = newArr.concat(i < m ? nums1.slice(i) : nums2.slice(j));
  const len = newArr.length;
  console.log(newArr);
  if (len % 2 === 0) {
    return (newArr[len / 2] + newArr[len / 2 - 1]) / 2;
  } else {
    return newArr[Math.floor(len / 2)];
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,3]\n[2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[3,4]\n
// @lcpr case=end

 */
