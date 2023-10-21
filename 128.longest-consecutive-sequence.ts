/*
 * @lc app=leetcode.cn id=128 lang=typescript
 * @lcpr version=30102
 *
 * [128] 最长连续序列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  let len = nums.length;
  let res = 1;
  let set = new Set(nums);
  for (let i = 0; i < len; i++) {
    if (!set.has(nums[i] - 1)) {
      let longest = 1;
      let curNum = nums[i];
      while (set.has(curNum + 1)) {
        longest++;
        curNum++;
      }
      res = Math.max(res, longest);
    }
  }
  return res;
}
// @lc code=end

/*
// @lcpr case=start
// [100,4,200,1,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,3,7,2,5,8,4,6,0,1]\n
// @lcpr case=end

 */
