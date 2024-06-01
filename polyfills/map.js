// polyfills for map and foreach 
// how map function work 
{
 let arr = [1,3,5]
 // for map function
 Array.prototype.myMap = function(cb){
    let arrs = []
    for(let i =0; i<this.length; i++){
        arrs.push(cb(this[i],i,this)) // in original array cb return , iterate arr element, index of arr and array itself
    }
    return arrs
 }
 function funConsole(num){ // custom function to pass as callback
    // console.log(num)
    return num
 }
 let newArr = arr.myMap((item)=>item*2)  // inline callback 
 let newArr2 = arr.myMap(funConsole)  // custom cb function

}
{
   // foreach function 
   let arr = [2,42,1]
   Array.prototype.myforEach = function(cb){
        for(let i =0; i<this.length;i++){
            cb.call(this[i],i,this)
        }
   }
   let newArr = arr.myforEach((item)=>item*2)  // inline callback 
   
   
}