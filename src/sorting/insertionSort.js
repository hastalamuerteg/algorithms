// insertion sort algorithm

// Complexity:
// Best Run Time: Ω(n)
// Average Run Time: Θ(n^2)
// Worst Run Time: O(n^2)

const array = [12,6,3,2,5,1,10,54,45,32,16,84,100,72,8];

function insertionSort(arr) {
  let i,j, curValue;
  let length = arr.length;

  for (i = 1; i < length; i++) {
    curValue = arr[i]

    for (j = i - 1; j >= 0 && arr[j] > curValue; j--) {
      arr[j + 1] = arr[j]
    }

    arr[j + 1] = curValue
  }
  console.log(arr)
}

insertionSort(array)