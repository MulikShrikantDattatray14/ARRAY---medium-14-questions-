// see striver explaination - its very easy
function sortArray(arr, n) {
  let low = 0,
    mid = 0,
    high = n - 1; // 3 pointers

  while (mid <= high) {
    if (arr[mid] === 0) {
      // swapping arr[low] and arr[mid]
      let temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;

      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      // swapping arr[mid] and arr[high]
      let temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;

      high--;
    }
  }
}

// Test
let n = 6;
let arr = [0, 2, 1, 2, 0, 1];
sortArray(arr, n);
console.log("After sorting:", arr.join(" "));
