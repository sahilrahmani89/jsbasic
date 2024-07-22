{
// selection sort 
// Big O Notation - Worst Case Time Complexity - O(N2) -
// not used in real world example, its not efficient 
// how its work , theoratically 
// replace lesser number one by one while iterating from 0th el to end of array
// replace min number with 0th element and 0th element the min number pos
// iterate this at end of loop
    // Each Iteration
    // [4,1,3,2,2,3,10,1] - initial phase 
     // [1,1,3,2,2,3,10,4]
    //  [1,1,2,2,3,3,10,4]
    // [1,1,2,2,3,3,4,10]
    const arr = [4,1,3,2,2,3,10,1]
    function selectionSort(arr){
       for(let i =0; i<arr.length; i++){
            let min = i
            for(let j =i+1; j<arr.length; j++){
               if(arr[i]>arr[j]){
                 min = j
               }
            }
            if(i!==min){
                let temp = arr[i]
                arr[i]  = arr[min]
                arr[min] = temp
            }
       }
       return arr
    }
    // console.log('selectionSort',selectionSort(arr))
}
{
    // bubble sort 
    // its worst time complexity Big O(N^2)
    // compare adjacent element , swap the postion 
    // basic concept -> for ascending order -> and for first iteration the greated element will be at end 
    // 
    const arr = [4,1,3,2,2,3,10,1]
    function bubbleSort(arr){
        for(let i =0; i<arr.length-1;i++){
            for(let j =0; j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp 
                }
            }
        }
        return arr
    }
    // console.log('bubble Sort',bubbleSort(arr))

}

{
    // insetion sort 
    // worst time complexity ON^2
    // its divided into two parts first one is sorted another one is unsorted 
    // intial phase , lets assume 1st element is sorted and remain unsorted 
    // compare it with unsorted elements and make it sorted.
    // this will run until length of an array 
    const arr = [4,1,3,2,2,3,10,1]
    const insertionSort = (arr) =>{
        for(let i =1; i<arr.length;i++){
            let j = i-1
            let next = arr[i]
            while(j>=0 && arr[j]>next){
                arr[j+1] = arr[j]
                j--
            }
            arr[j+1]= next
            
        }
        return arr
    }
    // console.log('insertionSort',insertionSort(arr))

}
{
    // quick sort 
    // worst time complexity, ON^2
    // avg time complexity O(NlogN)
    // how it works 
    // make pivot point (middle point of array) it can be any position of an array
    // then divide into two parts left and right compare with pivot point and push it respectively.
    // make recursively call for left and right 
    // base case if arr.length less than 2 then return arr 

    const arr = [4,1,3,2,2,3,10,1]
    function quickSort(arr){
        if(arr.length<2){
            return arr
        }
        const pivotPoint =  arr[arr.length-1]
        const left = []
        const right = []
        for(let i =0; i<arr.length-1; i++){
            if(arr[i]>pivotPoint){
                right.push(arr[i])
            }else{
                left.push(arr[i])
            }
        }
        return [...quickSort(left),pivotPoint,...quickSort(right)]
    }
    // console.log('quickSort arr',quickSort(arr))
}
{
    // merge sort 
    // worst time complexity O(NLogN)
    // how its work 
    // divide the array into subarray , each containing one element (An array w one el considered to
    // be sorted)
    // Repeateadly merge the sub array to produce new sorted subarray  until there's one sub
    // array remaining . That will be sorted array.
    // two function to execute
    // first find mid of the array , divide into left and right 
    // do it until it converts into one single length of array
    //  base case arr.length > 2
    // merge function 
    // temp array which store arr based on condition where shift data if 
    // lesser and greater
    const arr = [4,1,3,2,2,3,10,1]
    function mergeSort(arr){
        if(arr.length<2){
            return arr
        }
        let mid = Math.floor(arr.length/2)
        let left = arr.slice(0,mid)
        let right = arr.slice(mid)
        return merge(mergeSort(left),mergeSort(right))
    }
    function merge(left,right){
        let temp = []
        while(left.length && right.length){
            if(left[0]<=right[0]){
                temp.push(left.shift())
            }else{
                temp.push(right.shift())
            }
        }
        return[...temp,...left,...right]
    }
    // console.log('mergeSort(arr)',mergeSort(arr))
}