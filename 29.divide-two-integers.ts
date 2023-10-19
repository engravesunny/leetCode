/*
 * @lc app=leetcode.cn id=29 lang=typescript
 * @lcpr version=30102
 *
 * [29] 两数相除
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

function getNum(dividend: number, divisor: number): number {
    let sum = divisor;
    let result = 0;
    if (divisor > dividend) {
      return 0
    }
    while (sum <= dividend) {
      sum += sum;
      if (result) {
        result += result
      } else {
        result++
      }
    }
    result += getNum(dividend - sum / 2, divisor)
    return result
  }
  function divide(dividend: number, divisor: number): number {
    const multiple1 = dividend < 0 ? -1 : 1;
    const multiple2 = divisor < 0 ? -1 : 1;
    dividend = multiple1 * dividend
    divisor = multiple2 * divisor
  
    const result = multiple1 * multiple2 * getNum(dividend, divisor)
    const max = 2 ** 31 - 1, min = -1 * 2 ** 31
    if (result > max) {
      return max
    }
    if (result < min) {
      return min
    }
    return result;
  };
// @lc code=end



/*
// @lcpr case=start
// 10\n3\n
// @lcpr case=end

// @lcpr case=start
// 7\n-3\n
// @lcpr case=end

 */

