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
    if(lists.length === 0) return null;


    function mergeArr(lists:Array<ListNode | null>):ListNode | null {
        if(lists.length <= 1) return lists[0];
        let index = Math.floor(lists.length / 2);
        let left = mergeArr(lists.slice(0,index));
        let right = mergeArr(lists.slice(index))
        return merge(left, right);
    }

    function merge(l1:ListNode|null,l2:ListNode|null):ListNode | null {
        if(l1 === null) return l2;
        if(l2 === null) return l1;
        if(l1.val < l2.val) {
            l1.next = merge(l1.next, l2);
            return l1;
        } else {
            l2.next = merge(l1, l2.next);
            return l2;
        }
    }

    return mergeArr(lists);


};
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

