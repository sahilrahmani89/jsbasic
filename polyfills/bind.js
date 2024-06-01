{
    const emp ={
        name:"JOhn"
    }

    function print(age){
        console.log(`${this.name} age is ${age}`)
    }

    Function.prototype.myBind = function(obj={},...args){
        obj.fun = this
        args = args
        return function(){
            obj.fun(...args)
        }
    }
    const bindMethod = print.myBind(emp,40)
    // bindMethod()
}