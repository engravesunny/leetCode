/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    let temp = strs[0];
    let n = temp.length;
    for(let i in strs) {
        let ind = +i+1;
        if(strs[ind] === '') return '';
        if(strs[ind]){
            let a = strs[ind];
            let front = '';
            for(let j = 0; j < n; j++) {
                console.log(ind,+j, temp[+j],a[+j]);
                
                if(temp[+j]!==a[+j]){
                    temp = front;
                    if(+j === 0){
                        return temp;
                    }
                    break;
                } else {
                    front+=temp[+j];
                }
            }
            temp = front;
            n = temp.length;  
        }
    }
    return temp;
};
// @lc code=end

