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
    
}