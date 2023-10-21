/*
 * @lc app=leetcode.cn id=76 lang=typescript
 * @lcpr version=30102
 *
 * [76] 最小覆盖子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minWindow(s: string, t: string): string {
  let res = "";
  let minLen = Number.MAX_SAFE_INTEGER;
  if (s === t) return s;
  let sLen = s.length;
  let right = 0;
  let left = 0;
  let window: Map<string, number> = new Map();
  let tMap: Map<string, number> = new Map();
  for (let i of t.split("")) {
    setMapAdd(tMap, i);
  }
  while (true) {
    while (!coverStr(window, tMap) && right <= sLen) {
      setMapAdd(window, s[right]);
      right++;
    }
    while (coverStr(window, tMap)) {
      if (minLen > right - left) {
        minLen = right - left;
        res = s.slice(left, right);
      }
      setMapRemove(window, s[left]);
      left++;
    }
    if (right >= sLen && !coverStr(window, tMap)) {
      break;
    }
  }
  return res;
}
function setMapAdd(map: Map<string, number>, key: string) {
  if (map.has(key)) {
    map.set(key, (map.get(key) as number) + 1);
  } else {
    map.set(key, 1);
  }
}
function setMapRemove(map: Map<string, number>, key: string) {
  if (map.has(key)) {
    map.set(key, (map.get(key) as number) - 1);
  } else {
    return;
  }
}

function coverStr(sMap: Map<string, number>, target: Map<string, number>) {
  for (let [key, val] of target.entries()) {
    if (!sMap.has(key) || (sMap.get(key) as number) < val) return false;
  }
  return true;
}

// @lc code=end

/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */
