/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    let res:number = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        res = Math.max( Math.min(height[l], height[r])*(r - l), res );
        if(height[l] <= height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return res;
};
// @lc code=end

