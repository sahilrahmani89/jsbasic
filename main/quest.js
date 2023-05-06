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
//Write a function that takes an array of strings as input and returns a new array with all the strings that contain the letter "a".
const a = ["apnd", "jhdkjk", "jhds","ldkjslka"]
const b = a.filter((item)=>item.includes('a'))

function includesA(a){
  let arr = []
  for(let i=0;i<a.length;i++){
    if(a[i].includes('a')){
      arr.push(a[i])
    }
    
  }
  return arr
}
includesA(a)

}

{
//Write a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards).

function palindrom(str){
  let strcopy = str
  let b = str.split('').reverse().join('')
  if(str===b){
    // console.log('its palindrom')
  }
  else{
    // console.log('its not palindrom')
  }
}
palindrom('abbad')

}

{
//Write a function that takes an array of numbers as input and returns the second largest number in the array.
const a= [3,5,2,1,23,13,1]
const b = a.sort((a,b)=>a-b)
// console.log(b[b.length-2])

}
{
//Write a function that takes an array of strings as input and returns a new array with all the strings sorted alphabetically.
const a = ['bdd','dsds','aad']
const b = a.sort((a,b)=>a.localeCompare(b, undefined, { sensitivity: 'base' }))

}
{
//Write a function that takes a string as input and returns the number of vowels in the string.
const vowel = ['a','e','i','o','u']
const str = 'kjdhkjs dmnsadabkja kj a dsde'
//
function numOfVowels(str){
  let num = 0
  for(let i =0; i<str.length;i++){
    vowel.map((it)=>{
      str[i]===it && num++
    })
  }
  return num
}
numOfVowels(str)
}
{
//Write a function that takes an array of numbers as input and returns the sum of all the odd numbers in the array.
const a = [2,34,3,2,113,13,13,1,34,17]
const b = a.reduce((acc,curr)=>{
              return curr%2 !==0 ?  acc + curr : acc
         },0)

}
{
//Write a function that takes an array of strings as input and returns the longest string in the array.
const arr = ['akskd','dsjndlksnl','dnslndlksnlk','dnslk','ndsidwijiwndinwi']
const b = arr.sort((a,b)=>{
  a.localeCompare(b,undefined,{sensitivity:'base'})
})
// console.log(b[b.length-1])
function findLongestString(arr) {
  let longestString = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
}

}
///
{
//Write a function that takes a string as input and returns true if the string contains only digits (0-9).
function containsOnlyDigit(str){
  for(let i =0; i<str.length;i++){
    if(str[i]<'0'||str[i]>'9'){
      return false
    }
  }
  return true
}

}
{
//Write a function that takes an array of numbers as input and returns the median (middle value) of the numbers in the array.
function findMedian(arr){
  arr.sort((a,b)=>a-b)
  let medianNum = Math.floor(arr.length/2)
  return arr[medianNum]
}

}
{
///Write a function that takes an array of strings as input and returns a new array with all the strings reversed.
function reverseEachWord(arr){
  let word = ''
  let arr1 = []
  for(let i =0; i<arr.length;i++){
      word = arr[i].split('').reverse().join('')
      arr1.push(word)
  }
  return arr1
}

}
{
//Write a function that takes a string as input and returns true if the string is a valid email address.
function isValidEmail(email) {
  // Use a regular expression to validate the email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
}
{
//Write a function that takes an array of strings as input and returns a new array with all the strings that contain at least one digit.
const arr = ['app','133sdd','dkajhk1', 'kjdh1ds', 'aaple','1'] 

const arr2 = arr.filter((item)=>{
 return item.split("").some(char => {
      const charCode = char.charCodeAt(0); 
      return charCode >= 48 && charCode <= 57; 
    });
})
// console.log(arr2)
}
{
//Write a function that takes an array of strings as input and returns a new array with all the strings that are palindromes.
const arr = ['abba','cakdkj','asdsa']
const arr2 = arr.filter((item)=>{
  const str = item
  return item.split('').reverse().join('') === item
})
// console.log(arr2)

}
{
//Write a function that takes a string as input and returns true if the string is a valid URL.
function isValidURL(str) {
  try {
    const url = new URL(str);
    return true;
  } catch (error) {
    return false;
  }
}

}





}