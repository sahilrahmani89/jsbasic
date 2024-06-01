{
    const arr = [3,5,1,4,1,22]
    Array.prototype.myFilter = function(cb){
        let newArr = []
        for(let i =0; i<this.length;i++){
            if(cb(this[i],i,this)){
                newArr.push(this[i])
            }
        }
        return newArr
    }

    let check = arr.myFilter((item)=>item<10)
    // console.log('check',check)
}

