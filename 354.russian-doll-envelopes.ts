/*
 * @lc app=leetcode.cn id=354 lang=typescript
 * @lcpr version=30102
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxEnvelopes(envelopes: number[][]): number {
  let sortEnv = envelopes.sort((a: any[], b: any[]) => {
    if (a[0] - b[0] === 0) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });
  if (sortEnv.length === 0) return 0;
  let dp = Array(sortEnv.length).fill(1);
  let maxAns = 0;
  for (let i = 0; i < sortEnv.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sortEnv[j][1] < sortEnv[i][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxAns = Math.max(maxAns, dp[i]);
  }
  return maxAns;
}

// @lc code=end

/*
// @lcpr case=start
// [[5,4],[6,4],[6,7],[2,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[1,1],[1,1]]\n
// @lcpr case=end

 */
