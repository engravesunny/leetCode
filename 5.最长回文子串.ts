/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let res:string = s[0];
    let temp:string[] = [];
    const sarr = s.split('');
    for(let i in sarr) {
        const a = +i;
        // abbc
        if(sarr[a-1]&&sarr[a+1]&&sarr[a-1]===sarr[a+1]) {
            let l = a-1,r = a + 1;
            temp.push(sarr[a]);
            while(sarr[l]&&sarr[r]&&sarr[l]===sarr[r]){
                temp.push(sarr[r]);
                temp.unshift(sarr[l]);
                l--;
                r++;
            }
            res = temp.length > res.length ? temp.join('') : res;
            temp = [];
        } 
        if(sarr[a+1]&&sarr[a]===sarr[a+1]) {
            let l = a,r = a + 1;
            while(sarr[r]&&sarr[l]&&sarr[l]===sarr[r]){
                temp.push(sarr[r]);
                temp.unshift(sarr[l]);
                l--;
                r++;
            }
            res = temp.length > res.length ? temp.join('') : res;
            temp = [];
        }
    }
    return res;
};
// @lc code=end
