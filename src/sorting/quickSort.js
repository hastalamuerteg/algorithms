// quick sort algorithm

// Complexity:
// Best Run Time: Ω(N LogN)
// Average Run Time: Θ(N LogN)
// Worst Run Time: O(n^2)

const array = [12,6,3,2,5,1,10,54,45,32,16,84,100,72,8];

function partition(arr, start, end) {
  const pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;

      if (i !== swapIndex) {
        [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
      }
    }
  }

  if (swapIndex !== start) {
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
  }

  return swapIndex;
} 

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return

  let pivotIndex = partition(arr, start, end);

  quickSort(arr, start, pivotIndex - 1);

  quickSort(arr, pivotIndex + 1, end);

  return arr;
}

console.log(quickSort(array));