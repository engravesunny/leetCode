/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
function sortArray(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let left: number[] = [];
  let right: number[] = [];
  let mid: number[] = [];
  const randomNum = Math.floor(Math.random() * arr.length);
  const base = arr.splice(randomNum, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    } else if (arr[i] === base) {
      mid.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sortArray(left).concat([base], mid, sortArray(right));
}
// @lc code=end
