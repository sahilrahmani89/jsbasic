// Searching Algorithms:

// Linear Search: It sequentially checks each element of an array until a match is found 
// or the end of the array is reached.
// Binary Search: It works on sorted arrays by repeatedly dividing the search interval in half 
// until the target element is found or the interval becomes empty.
// bfs
//dfs


{
//linear search 
	function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr = [2, 5, 1, 8, 9];
let target = 8;
console.log(linearSearch(arr, target)); // Output: 3

}
{
	//binary search 
	function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

let arr = [1, 3, 5, 7, 9, 11];
let target = 7;
console.log(binarySearch(arr, target)); // Output: 3

}
{
	//binary first search 
}
{
	//depth first search
}