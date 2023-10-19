/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
    let ans:number = nums[0] + nums[1] + nums[2];
    const len = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len ; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue; 
        let L = i + 1;
        let R = len - 1;
        let temp = 0;
        while(L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            temp = sum;
            ans = Math.abs(sum - target) < Math.abs(ans - target) ? sum : ans;
            if(sum === target) {
                return target;
            }
            else if (sum < target) {
                L++;
                while (L+1<R && nums[L] === nums[L+1]) ++L; 
            }
            else if (sum > target) {
                R--;
                while (L+1<R && nums[R] === nums[R-1]) --R;
            }
        }
    }        
    return ans;
};
// @lc code=end

