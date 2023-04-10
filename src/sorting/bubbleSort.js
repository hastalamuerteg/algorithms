// bubble sort algorithm

// Complexity:
// Best Run Time: Ω(n)
// Average Run Time: Θ(n^2)
// Worst Run Time: O(n^2)

const array = [1,4,3,2,-2,65,45,17,12,87,45,26,3,1,8,4,98,150,102,45];

// simple version
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < (arr.length -i - 1); j++) {
     if (arr[j] > arr[j + 1]) {
      let swapped = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = swapped;
     }
    }
  }
  console.log(arr);
}

// bubbleSort(array);

// optimized version
function bubbleSortOptimized(arr) {
  let i, j;
  let length = arr.length;
  let isSwapped = false;

  for(i = 0; i < length; i++) {
    for(j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }

    }
    if (!isSwapped) {
      break;
    }
  }
  console.log(arr);
}

bubbleSortOptimized(array);