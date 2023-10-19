/*
 * @lc app=leetcode.cn id=31 lang=typescript
 * @lcpr version=30102
 *
 * [31] 下一个排列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// 
 function nextPermutation(nums: number[]): void {
    const len = nums.length;

    if (len <= 1) {
        return;
    }
    // 从后往前找到一个不是递增的元素
    let min = len - 2;
    for (; min >= 0; min--) {
        if (nums[min] < nums[min + 1]) {
            break;
        }
    }

    // 找到后面第一个比这个数大的
    let max = len - 1;
    for (; max > min && min >= 0; max--) {
        if (nums[max] > nums[min]) {
            break;
        }
    }

    // 翻转 这个区域 等到下一个数列

    if (min >= 0) {
        [nums[min], nums[max]] = [nums[max], nums[min]];
    }

    for (let i = min + 1, j = len - 1; i < j; i++, j--) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
}
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,5]\n
// @lcpr case=end

 */

