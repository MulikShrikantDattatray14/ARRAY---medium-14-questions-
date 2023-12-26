function printLeaders(arr, n) {
  let ans = [];
  // Last element of an array is always a leader,
  // push into ans array.
  let max = arr[n - 1];
  ans.push(arr[n - 1]);
  // Start checking from the end whether a number is greater
  // than max no. from right, hence leader.
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > max) {
      ans.push(arr[i]);
      max = arr[i];
    }
  }
  return ans;
}
// Array Initialization.
let n = 6;
let arr = [10, 22, 12, 3, 0, 6];
let ans = printLeaders(arr, n);
for (let i = ans.length - 1; i >= 0; i--) {
  console.log(ans[i]);
}
