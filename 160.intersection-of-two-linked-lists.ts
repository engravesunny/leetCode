/*
 * @lc app=leetcode.cn id=160 lang=typescript
 * @lcpr version=30102
 *
 * [160] 相交链表
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let cur1 = headA;
    let cur2 = headB;
    let n = 0;
    while(cur1.next!==null) {
        cur1 = cur1.next;
        n++;
    }
    while(cur2.next !== null) {
        cur2 = cur2.next;
        n--;
    }
    if(cur1!==cur2)return null;
    cur1 = n>0?headA:headB;
    cur2 = cur1===headA?headB:headA;
    n = Math.abs(n);
    while(n!==0) {
        cur1 = cur1.next;
        n--;
    }
    while(cur1!==cur2) {
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    return cur1;
};
// @lc code=end



/*
// @lcpr case=start
// 8\n[4,1,8,4,5]\n[5,6,1,8,4,5]\n2\n3\n
// @lcpr case=end

// @lcpr case=start
// 2\n[1,9,1,2,4]\n[3,2,4]\n3\n1\n
// @lcpr case=end

// @lcpr case=start
// 0\n[2,6,4]\n[1,5]\n3\n2\n
// @lcpr case=end

 */

