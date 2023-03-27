////////// remove duplicate from string 
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
let c =	Array.from(new Set(a.split(' '))).join(" ")
  return c
}
console.log(remDupStr(a))