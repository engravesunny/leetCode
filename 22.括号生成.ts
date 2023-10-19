/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    let res:string[]=[];
    generateAll(0,0,res,'',n);
    return res;
};

function generateAll(left:number,right:number,result:string[],cur:string,n:number) {
    if(left === n && right === n) {
        result.push(cur);
    }
    if(left < n) {
        generateAll(left+1, right, result, cur+'(', n)
    }
    if(left > right&&right<n) {
        generateAll(left,right+1,result,cur+')',n)
    }
}

// @lc code=end

