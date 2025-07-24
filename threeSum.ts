function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  // Sort the array to enable two-pointer technique and skip duplicates
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];

      if (total === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left and right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (total < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Example usage
const nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);
console.log(result);
// Output: [[-1, -1, 2], [-1, 0, 1]]
