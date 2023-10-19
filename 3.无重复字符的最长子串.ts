/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    if(s.length===0||s.length===1)return s.length;
    let res = 0;
    let temp = 1;
    let sarr = s.split('');
    let temparr = sarr[0];
    for(let i in sarr) {
        if(sarr[+i+1]){
            if(!temparr.includes(sarr[+i+1])){
                temp += 1;
                temparr += sarr[+i+1];            
            } else {
                temparr = temparr.slice(temparr.indexOf(sarr[+i+1]) + 1);
                temparr += sarr[+i+1];
                temp = temparr.length;
            }
            res = res > temp ? res : temp;
        }
    }
    return res;
};
// @lc code=end

