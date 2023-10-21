/*
 * @lc app=leetcode.cn id=3 lang=typescript
 * @lcpr version=30102
 *
 * [3] 无重复字符的最长子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  let len = s.length;
  let maxLength = 0;
  let tempList: Set<string> = new Set();
  let rk = -1;
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      tempList.delete(s[i - 1]);
    }
    while (rk + 1 < len && !tempList.has(s[rk + 1])) {
      tempList.add(s[rk + 1]);
      rk++;
    }
    maxLength = Math.max(tempList.size, maxLength);
  }
  return maxLength;
}
// @lc code=end

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */
