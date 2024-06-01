{
    const emp ={
        name:"JOhn"
    }

    function print(age){
        console.log(`${this.name} age is ${age}`)
    }

    // print.call(emp,21)

    Function.prototype.myCall = function(obj={},...args){
        obj.fun = this  // attached function into  object key
                        //now object will contain orginal object and fun key with function attached to it  
        obj.fun(...args)
    }
    // print.myCall(emp,22)
}