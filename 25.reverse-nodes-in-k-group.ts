/*
 * @lc app=leetcode.cn id=25 lang=typescript
 * @lcpr version=30102
 *
 * [25] K 个一组翻转链表
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let a = head,b=head;
    for(let i=0;i<k;i++) {
        if(b===null)return head;
        b = b.next;
    }
    let newHead = reverse(a,b);
    a.next = reverseKGroup(b,k);
    return newHead;

    function reverse(a:ListNode|null,b:ListNode|null = null) {
        let prev:any,cur=a,next=a;
        while(cur !== b) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        } 
        return prev;    
    }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n3\n
// @lcpr case=end

 */

