{
    const emp ={
        name:"JOhn"
    }

    function print(age){
        console.log(`${this.name} age is ${age}`)
    }

    Function.prototype.myApply = function(obj={},...args){
        //  error handling need to be done as it should be always an array
        obj.fun = this  // attached function into  object key
                        //now object will contain orginal object and fun key with function attached to it  
        obj.fun(...args) 
    }
    
    // print.myApply(emp,[25])

}