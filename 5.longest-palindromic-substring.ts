/*
 * @lc app=leetcode.cn id=5 lang=typescript
 * @lcpr version=30102
 *
 * [5] 最长回文子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function longestPalindrome(s: string): string {
  let sarr = s.split("");
  let res: string[] = [sarr[0]];
  if (s.length <= 1) return s;
  for (let i = 1; i < sarr.length; i++) {
    if (sarr[i - 1] === sarr[i + 1]) {
      let tempRes = [];
      tempRes.push(sarr[i]);
      let left = i - 1;
      let right = i + 1;
      while (left >= 0 && right < sarr.length && sarr[left] === sarr[right]) {
        tempRes.unshift(sarr[left]);
        tempRes.push(sarr[right]);
        left--;
        right++;
      }
      res = res.length < tempRes.length ? [...tempRes] : res;
    }
    if (sarr[i - 1] === sarr[i]) {
      let tempRes = [];
      let left = i - 1;
      let right = i;
      while (left >= 0 && right < sarr.length && sarr[left] === sarr[right]) {
        tempRes.unshift(sarr[left]);
        tempRes.push(sarr[right]);
        left--;
        right++;
      }
      res = res.length < tempRes.length ? [...tempRes] : res;
    }
  }
  return res.join("");
}

// @lc code=end

/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */
