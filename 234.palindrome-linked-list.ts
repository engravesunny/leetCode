/*
 * @lc app=leetcode.cn id=234 lang=typescript
 * @lcpr version=30102
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
    // 回溯法
    // let left = head;
    // function traverse(right:ListNode | null):any {
    //     if(right == null) return true;
    //     let res = traverse(right.next);
    //     res = res && (right.val === left.val);
    //     left = left.next;
    //     return res;
    // }
    // return traverse(head);
    // 快慢指针+翻转链表
    if(head === null|| head.next === null) {
        return true;
    }
    function findCenter(head: ListNode|null) {
        let slow = head, right = head;
        while(right&&right.next) {
            slow = slow.next;
            right = right.next.next;
        }
        return slow
    }
    function reverseList(head: ListNode|null) {
        let prev:any, cur = head, next:any;
        while(cur!==null) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }
    let right = reverseList(findCenter(head));
    let left = head;
    while(!!right) {
        if(left.val !== right.val) {
            return false;
        }
        right = right.next;
        left = left.next;
    }
    return true;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */

