/*
 * @lc app=leetcode.cn id=673 lang=typescript
 * @lcpr version=30102
 *
 * [673] 最长递增子序列的个数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findNumberOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;
  let len = nums.length;
  let dp = Array(len).fill(1);
  let count = Array(len).fill(1);
  let maxLen = 0;
  let maxAns = 1;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      maxAns = count[i];
    } else if (dp[i] === maxLen) {
      maxAns += count[i];
    }
  }
  console.log(dp);
  console.log(count);
  return maxAns;
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
