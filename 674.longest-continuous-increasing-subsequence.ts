/*
 * @lc app=leetcode.cn id=674 lang=typescript
 * @lcpr version=30102
 *
 * [674] 最长连续递增序列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
  let maxAns = 0;
  let i = 1;
  while (i < nums.length) {
    let temp = 0;
    while (nums[i] > nums[i - 1]) {
      i++;
      temp++;
    }
    i++;
    maxAns = maxAns > temp ? maxAns : temp;
  }
  return maxAns + 1;
}
// @lc code=end

/*
// @lcpr case=start
// [1,3,5,4,7]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,2,2]\n
// @lcpr case=end

 */
