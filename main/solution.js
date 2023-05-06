////////// remove duplicate from string 
{
    let a = `app is installed app and app them set`
function remDupStr(a){
  let c = a.split(' ')
  c = [...new Set(c)]
 let b = c.join(" ")
  return b
}
remDupStr(a)
}
// = another way
{
let a = `app is installed app and app them set`
function remDupStr(a){
let c =  Array.from(new Set(a.split(' '))).join(" ")
  return c
}
remDupStr(a)
}
///Write a function that takes an array of integers and returns the sum of all the numbers in the array.
{
function sumDigit (num){
  let res = 0
  if(num===1){
    return num
  }
  else{
    res+= sumDigit(num-1)
    return res
  }
}
sumDigit(5)
}

//private counter using closure
{

}
//caching and memoize function in js 
{
  // square of number using closure and memoising it 
  function square(){
    let cache = {}
    return(num)=>{
      if(num in cache){
        // console.log('in cache')
        return cache[num]
      }
      else{
        // console.log('not from cache')
        let res = num * num
        cache[num] = res
        return res
      }
    }
  }
  const square1 = square()
  square1(2)
  square1(3)
 square1(3)


}
