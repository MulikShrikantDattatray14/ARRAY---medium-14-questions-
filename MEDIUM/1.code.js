function twoSum(n, arr, target) {
  // sort array in increasing order
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return "YES";
    } else if (sum < target) {
      // increasing the value
      left++;
    } else {
      //  // decreasing the value
      right--;
    }
  }

  return "NO";
}

const n = 5;
const arr = [2, 6, 5, 8, 11];
const target = 14;

const ans = twoSum(n, arr, target);
console.log("This is the answer for variant 1: " + ans);
