Sorting Algorithms:

// Bubble Sort: It repeatedly swaps adjacent elements if they are in the 
// wrong order until the entire array is sorted.
// Selection Sort: It divides the array into a sorted and an unsorted region, repeatedly finding the 
// minimum element from the unsorted region and swapping it with the leftmost unsorted element.
// Insertion Sort: It builds the final sorted array one item at a time by repeatedly inserting an element 
// into the sorted part of the array.
// Merge Sort: It divides the array into two halves, sorts them recursively, and then merges the two sorted 
// halves into one.
// Quick Sort: It selects a pivot element, partitions the array into two sub-arrays based on the pivot, and 
// then recursively sorts the sub-arrays.
//heap sort
//counting sort
{
	//bubble sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]
}
{
	// selection sorts
	function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap elements
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 64]
}

{
	//insertion sort
	function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

let arr = [12, 11, 13, 5, 6];
console.log(insertionSort(arr)); // Output: [5, 6, 11, 12, 13]
}
{
	//merge sort
	function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr = [12, 11, 13, 5, 6, 7];
console.log(mergeSort(arr)); // Output: [5, 6, 7, 11, 12, 13]
}
{
	//quick sort
	function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [64, 25, 12, 22, 11];
console.log(quickSort(arr)); // Output: [11, 12, 22, 25, 64]

}
{
	//counting sort
}















