{
//Write a function that takes two numbers as input and returns their sum.
function twoInputSum(a,b){
	return a+b
}
twoInputSum(10,20)

//Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.
const digit1 = [1,2,3,4,5]
function sumOfArrayDigit(digit1){
	let res = 0
	for(let i =0; i<digit1.length;i++){
		res+= digit1[i]
	}
	return res
}
sumOfArrayDigit(digit1)
//Write a function that takes an array of strings as input and returns a new array with all the strings capitalized.
const arr = ["ajsnjdjjkshdklshlk","ajsnjdjjkshdklshlk","ajsnjdjjkshdklshlk"]
function capitalizeArr(arr){
	// let res =[]
	// for(let i =0;i<arr.length;i++){
	// 	res.push(arr[i].toUpperCase())
	// return res
	let a = arr.map((item)=>{
		return item.toUpperCase()
	})
	return a
}
capitalizeArr(arr)
//Write a function that takes an array of numbers as input and returns the largest number in the array.
const arr2 = [15,20,30,10,3,5]
function largestDigit(arr2){
	let a = arr2.sort((a,b)=>a-b)
	return a[arr2.length-1]
}
largestDigit(arr2)
//Write a function that takes a string as input and returns the reverse of the string.
const str = `kndksnlkd s dsjnds dnskn dsknlk`
function reverse1 (str){
	// console.log(str.split(" ").reverse().join(" "))
	return str.split(" ").reverse().join(" ")
}
reverse1(str)


function reverse(str) {
  let words = [];
  let currentWord = "";
  
  // loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    
    // if the current character is a space, push the current word to the words array
    if (currentChar === " ") {
      words.push(currentWord);
      currentWord = "";
    } else {
      // otherwise, add the current character to the current word
      currentWord += currentChar;
    }
    
    // if we're at the end of the input string, push the final word to the words array
    if (i === str.length - 1) {
      words.push(currentWord);
    }
  }
  
  // loop through the words array backwards and build the reversed string
  let reversed = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i] + " ";
  }
  
  return reversed.trim();
}

reverse(str);
{
//Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.
const a= [2,4,2,3,1,3,10,13]
const removedEven = a.filter((digit)=>(digit%2)!==0)


function removedEvenFun(a){
  let arr = []
  for(let i=0;i<a.length;i++){

      if(a[i]%2!==0){
        arr.push(a[i])
      }
  }
  return arr
}
removedEvenFun(a)
}
{




}














}