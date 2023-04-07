////////// remove duplicate from string 
{
  let a = `app is installed app and app them set`
function remDupStr(a){
  let c = a.split(' ')
  c = [...new Set(c)]
 let b = c.join(" ")
  return b
}
console.log(remDupStr(a))
// = another way
let a = `app is installed app and app them set`
function remDupStr(a){
let c =  Array.from(new Set(a.split(' '))).join(" ")
  return c
}
console.log(remDupStr(a))
///Write a function that takes an array of integers and returns the sum of all the numbers in the array.

function sumDigit (num){
  let res = 0
  if(num===1){
    return num
  }
  else{
    res+= sum(num-1)
    return res
  }
}
sumDigit(5)
}
