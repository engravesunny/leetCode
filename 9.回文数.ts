/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {

    if(x<0) return false;
    const s = x.toString().split('');
    const r = s.reverse().join('');
    if( r === x.toString() ){
        return true;
    } else {
        return false;
    }
    // const l = s.length;
    // for(let i in s) {
    //     let a = +i;
    //     if(a<l-a-1&&s[a]!==s[l-a-1]) {
    //         return false;
    //     }
    // }
    // return true;
};
// @lc code=end

