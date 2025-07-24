/**
 * Finds the indices of the two numbers in `nums` that add up to `target`.
 *
 * @param nums - Read‑only array of numbers to search.
 * @param target - The sum we’re looking for.
 * @returns A tuple [i, j] where nums[i] + nums[j] === target.
 * @throws Error if no valid pair is found.
 */
export function twoSum(
  nums: readonly number[],
  target: number
): [number, number] {
  const indexMap = new Map<number, number>();

  for (const [i, num] of nums.entries()) {
    const needed = target - num;
    if (indexMap.has(needed)) {
      // We know 'needed' was seen at indexMap.get(needed)!
      return [indexMap.get(needed) as number, i];
    }
    indexMap.set(num, i);
  }

  throw new Error(`twoSum: no pair found in [${nums.join(
    ", "
  )}] that sums to ${target}`);
}

// Example
const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9)); // [0, 1]
