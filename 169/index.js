/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let result = 0;
  let temp = {};
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const el = nums[i];
    let count = temp[el] ? temp[el] + 1 : 1;
    if (count > n / 2) {
      result = el;
      break;
    }
    temp[el] = count;
  }
  return result;
};

const input = [3, 2, 3];
console.log(majorityElement(input));
