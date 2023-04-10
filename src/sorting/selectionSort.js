// selection sort algorithm

// Complexity:
// Best Run Time: Ω(n^2)
// Average Run Time: Θ(n^2)
// Worst Run Time: O(n^2)

const array = [12,6,3,2,5,1,10,54,45,32,16,84,100,72,8];

function selectionSort(arr) {
  let i, j, minNumber;
  let length = arr.length;

  for (i = 0; i < length; i++) {
    minNumber = i;

    for (j = i + 1; j < length; j++) {
      if (arr[minNumber] > arr[j]) {
        minNumber = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minNumber];
    arr[minNumber] = temp;
  
  }
  console.log(arr);
}

selectionSort(array);