/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

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

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let flag = 0;
  let sumTemp: number;
  let val1:number;
  let val2:number;
  let head = new ListNode();
  const res = head;
  while (l1||l2) {
    val1 = l1?l1.val:0;
    val2 = l2?l2.val:0;
    sumTemp = val1 + val2 + flag;
    flag = Math.floor(sumTemp / 10);
    head.next = new ListNode(sumTemp % 10);
    head = head.next;
    l1 = l1?l1.next:null;
    l2 = l2?l2.next:null;
  }
  if(flag){
    head.next = new ListNode(flag);
  }
  
  return res.next;
}
// @lc code=end
