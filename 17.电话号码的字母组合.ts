/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  let res: string[] = [];
  let len = digits.length;
  let menu: any = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  const dfs = (str: string, dp: number) => {
    if (dp > len - 1) {
      res.push(str);
      return;
    }
    // 4523
    let letters = menu[digits[dp]];
    for (let l in letters) {
      dfs(str + letters[l], dp + 1);
    }
  };
  dfs("", 0);
  return res;
}
// @lc code=end
