/*
 * @lc app=leetcode.cn id=148 lang=typescript
 * @lcpr version=30102
 *
 * [148] 排序链表
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

function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  return mergeSort(head);
}
function mergeSort(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let center = findCenter(head);
  if (center?.next == null) return center;
  let right = center?.next as ListNode;
  let left = head;
  Object.defineProperty(center, "next", {
    value: null,
  });
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: ListNode | null, right: ListNode | null): ListNode | null {
  let newHead = new ListNode();
  let cur = newHead;
  while (left !== null && right !== null) {
    if (left.val < right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next as ListNode;
  }
  cur.next = left ? left : right;
  return newHead.next;
}

function findCenter(head: ListNode | null) {
  let slow = head,
    fast = head?.next;
  while (fast && fast.next) {
    slow = slow?.next as ListNode;
    fast = fast.next.next;
  }
  return slow;
}

// @lc code=end

/*
// @lcpr case=start
// [4,2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1,5,3,4,0]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
