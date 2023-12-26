function maxSubarraySum(arr, n) {
  let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
  let sum = 0;
  let start_index = -1;
  let end_index = -1;

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    if (sum > maxi) {
      maxi = sum;
      end_index = i;
    }

    // If sum < 0: discard the sum calculated
    if (sum < 0) {
      sum = 0;
      start_index = i + 1;
    }
  }

  // To consider the sum of the empty subarray
  // uncomment the following check:

  //if (maxi < 0) maxi = 0;
  console.log("START_INDEX : " + start_index);
  console.log("END_INDEX : " + end_index);
  let ans_arr;
  for (let i = 0; i < n; i++) {
    ans_arr = arr.slice(start_index, end_index + 1);
  }
  console.log("ANSWER ARRAY IS : " + ans_arr);
  return maxi;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const n = arr.length;
const maxSum = maxSubarraySum(arr, n);
console.log("The maximum subarray sum is: " + maxSum);
