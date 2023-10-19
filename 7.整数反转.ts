/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    let res = 0;
    let sarr = x.toString().split('');
    if(x>=0){
        res = +sarr.reverse().join('');
        res = res <= 2**31-1 ?res : 0;
    } else {   
        sarr.splice(0,1);
        res = -sarr.reverse().join('')
        res = res >= -(2**31) ? res : 0;
    }
    return res;
};
// @lc code=end

