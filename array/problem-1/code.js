const countElements = (arr, val) => {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) k++;
  }
  return k;
};

const removeElement = function (nums, val) {
  // Swap the Val with any value and push all Val elements to the right
  let end = nums.length - 1;
  let start = 0;

  if (nums.length === 0) return 0;
  if (nums.length === 1 && nums[0] !== val) return 1;
  if (nums.length === 1 && nums[0] === val) return 0;

  while (start < end) {
    if (nums[start] !== val) start++;
    else if (nums[start] === val && nums[end] !== val) {
      // Swapping the variables
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    } else if (nums[end] === val) end--;
  }
  if (start === 0) return 0;
  return countElements(nums, val);
};

// let nums = [3, 3];
// let nums = [3, 2, 2, 3];
// let nums = [];
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

const returnedArr = removeElement(nums, val);
console.log(returnedArr);
