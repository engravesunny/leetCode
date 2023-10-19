/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
    enum list {
        I = 1,
        V = 5,
        X = 10,
        L = 50,
        C = 100,
        D = 500,
        M = 1000
    }
    let sarr:any[] = s.split('');
    let res = +list[sarr[0]];
    for(let i in sarr) {
        let a = +i + 1;
        if(sarr[a]){
            if(+list[sarr[i]] >= +list[sarr[a]]) {
                res += +list[sarr[a]];
            } else {
                res -= +list[sarr[i]]*2;
                res += +list[sarr[a]];
            }
        }
        
    }
    return res;
};
// @lc code=end

