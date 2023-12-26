function findAllSubarraysWithGivenSum(arr, k) {
  const n = arr.length;
  const mpp = new Map();
  let preSum = 0,
    cnt = 0;

  mpp.set(0, 1);

  for (let i = 0; i < n; i++) {
    preSum += arr[i];
    cnt += mpp.get(preSum - k) || 0;
    mpp.set(preSum, (mpp.get(preSum) || 0) + 1);
  }
  console.log(mpp);
  return cnt;
}

const arr = [3, 1, 2, 4];
const k = 6;
const cnt = findAllSubarraysWithGivenSum(arr, k);
console.log("The number of subarrays is:", cnt);
