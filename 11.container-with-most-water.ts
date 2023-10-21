/*
 * @lc app=leetcode.cn id=11 lang=typescript
 * @lcpr version=30102
 *
 * [11] 盛最多水的容器
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxArea(height: number[]): number {
  let len = height.length;
  let left = 0;
  let right = len - 1;
  let maxAns = 0;
  while (left < right) {
    maxAns = Math.max(
      (right - left) * Math.min(height[left], height[right]),
      maxAns
    );
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxAns;
}
// @lc code=end

/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */
