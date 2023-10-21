/*
 * @lc app=leetcode.cn id=23 lang=typescript
 * @lcpr version=30102
 *
 * [23] 合并 K 个升序链表
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // 分治
  if (lists.length === 0) return null;
  return mergeArr(lists);
}
function mergeArr(lists: Array<ListNode | null>) {
  if (lists.length <= 1) return lists[0];
  let index = Math.floor(lists.length / 2);
  return merge(mergeArr(lists.slice(0, index)), mergeArr(lists.slice(index)));
}
function merge(left: ListNode | null, right: ListNode | null) {
  if (left === null) return right;
  if (right === null) return left;
  if (left.val < right.val) {
    left.next = merge(left.next, right);
    return left;
  } else {
    right.next = merge(left, right.next);
    return right;
  }
}

// @lc code=end

/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */
