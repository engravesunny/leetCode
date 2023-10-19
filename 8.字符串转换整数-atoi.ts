/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    let ss = s.trim().split('');
    
    if(!(ss[0]>='0'&&ss[0]<='9')){
        if(ss[0]==='-'||ss[0]==='+'){
            if(ss[1]==='-'||ss[1]==='+'){
                return 0;
            }
        } else {
            return 0;
        }
        
    }
    let a = '';
    let flag = 0;
    let res:number;
    for(let i of ss) {
        if(i>='0'&&i<='9'||i==='-'||i==='+'){
            if(flag){
                if(i!=='-'&&i!=='+'){
                    a+=i;
                } else {
                    break;
                }
            } else {
                a+=i==='+'?'':i;
            }           
            flag = 1;
        } else {
            break
        }
        if(i===' ')break;
    }
    console.log(a);
    
    if(a==='')return 0;
    if(a[0]==='-'){
        a = a.slice(1);
        res = -a <= -(2**31)? -(2**31): -a;
    } else {
        res = +a >= 2**31-1 ? 2**31-1 : +a;
    }
    return res;
};
// @lc code=end

