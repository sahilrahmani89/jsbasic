{
    //moves zero to end 
    // [8,10,0,10,0,20] = [8,10,10,20,0,0] 
    let arr = [8,10,0,0,0,10,0,20] 
    let c = 0
    for(let i =0;i<arr.length;i++){
        if(arr[i]!==0){
            [arr[i],arr[c]] = [arr[c],arr[i]]
            c++
        }
    }
    console.log(arr)
}
{
 
    
}