/*
 * @lc app=leetcode.cn id=12 lang=typescript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
function intToRoman(num: number): string {
    const sarr = num.toString().split('').reverse();
    let res:string[] = [];
    let letter = '';
    type Menu = {
        [index:string]:string
    }
    let menu:Menu = {
        '1':'I',
        '5':'V',
        '10':'X',
        '50':'L',
        '100':'C',
        '500':'D',
        '1000':'M'
    }
    for(let i in sarr) {
        let a = +sarr[i];
        if(a===0)continue;
        let b = 10**(+i);
        if(a>=5){
            if(a===9){
                letter = menu[b] + menu[b*10];
            } else {
                letter = menu[5*b]
                for(let j = 0; j < a - 5; j++) {
                    letter += menu[b]
                }
            }
        } else {
            if(a === 4){
                letter = menu[b] + menu[b*5];
            } else {
                for(let j = 0; j < a; j++) {
                    letter += menu[b];
                }
            }
        }
        res.unshift(letter);
        letter = '';
    }
    return res.join('');
};
// @lc code=end

