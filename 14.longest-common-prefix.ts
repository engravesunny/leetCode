/*
 * @lc app=leetcode.cn id=14 lang=typescript
 * @lcpr version=30102
 *
 * [14] 最长公共前缀
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length <= 1) return strs[0];
  let first = strs[0];
  let minLen = Number.MAX_SAFE_INTEGER;
  for (let str of strs) {
    minLen = Math.min(maxPrefixLen(first, str), minLen);
  }
  return first.slice(0, minLen);
}
function maxPrefixLen(str1: string, str2: string) {
  let i = 0,
    j = 0;
  let cnt = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      cnt++;
    } else {
      return cnt;
    }
    i++;
    j++;
  }
  return cnt;
}
// @lc code=end

/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */
