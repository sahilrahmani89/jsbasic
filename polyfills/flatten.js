{
    const arr =[1,3,[2,4]]
    Array.prototype.myFlat = function(depth){
        let arr = []
        this.forEach((item)=>{
            if(Array.isArray(item) && depth>0){
               arr.push(...item.myFlat(depth-1)) // recursively call spread
            }else{
                arr.push(item)
            }
        })
        return arr
    }

    // console.log(arr.myFlat(1))
}