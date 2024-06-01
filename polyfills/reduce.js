{
    const arr = [2,5,9,10]
    Array.prototype.myReduce = function(cb,initiaValue){
        let res = initiaValue
        for(let i =0; i<this.length;i++){
            res = res?cb(res,this[i]):this[i]
        }
        return res
    }

    let res = arr.myReduce((acc,curr)=>acc+curr) // myReduce only for above scenerio ..
                                                
    // console.log(res)
}

