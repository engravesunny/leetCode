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
    if(head===null||head.next===null) return head;
    return mergeSort(head);
};
function mergeSort(head: ListNode | null) {
    if(head.next!==null) {
        let center = getCenter(head);
        let next = center.next;
        center.next = null;
        let left = mergeSort(head);
        let right = mergeSort(next);
        head = merge(left,right);
    }
    return head;
}
function merge(left:ListNode|null,right:ListNode|null) {
    let newHead = new ListNode();
    let cur = newHead;
    while(left !== null && right !== null) {
        if(left.val < right.val) {
            cur.next = left;
            left = left.next;
        } else {
            cur.next = right;
            right = right.next;
        }
        cur = cur.next;
    }
    cur.next = left?left:right;
    return newHead.next;
}
function getCenter(head:ListNode|null) {
    let slow = head, fast = head.next;
    while(fast!==null&&fast.next!==null) {
        slow = slow.next;
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

