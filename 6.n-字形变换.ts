/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] N 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
    if(numRows===1)return s;
    let sarr = s.split('');
    let temp:string[] = [];
    for (let i = 0; i < numRows; i++) {
        temp.push('');
    }
    let flag = 1;  // 表示加 0是减
    let a = 0;
    for(let i of sarr) {        
        if(i) {
            if(flag) {
                a++;
                temp[a-1]+=i;
            } else {
                a--;
                temp[a-1]+=i;
            }
            if(a === numRows){
                flag = 0;
            } else if(a === 1) {
                flag = 1;
            }
        }
    }
    return temp.join('');
};
// @lc code=end
