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
// Verify a prime number?
{
  function checkPrime(num){
    if(num<2){
      return false
    }
    if(num===2){
      return true
    }
    if(num%2===0){
      return false
    }
    for(let i =3; i<=num ; i++){
      if(num%i===0){
        return false
      }
    }
    return true
  }
  checkPrime(2)
}
// Find all prime factors of a number?
{
  function primeFactors(n) {
  let factors = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}
primeFactors(10)
}
// Get nth Fibonacci number?
{
  function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(5)
}
// Find the greatest common divisor of two numbers?
{
  function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
gcd(4,8)
}
// Remove duplicate members from an array?
{
  let a = [1,3,2,11,1,1]
  let b  = [...new Set(a)]

  // console.log(b)
  function removeDuplicate(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index)
  }
  removeDuplicate(a)
}
// Merge two sorted array?
{
  let a = [1,3,2,11,1,1]
  let b = [3,4,55,7]
  let c = [...a,...b]

 function mergeArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  
  return mergedArray;
}
mergeArrays(a,b)
}
// Swap two numbers without using a temp variable?
{
  function swapNumbers(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

}
// Reverse a string in JavaScript?
{
  function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
//
{
function reverseString(str) {
  return str.split('').reverse().join('');
}
}
}
// Reverse words in a sentence?
{
  function reverseWords(sentence) {
  // Split the sentence into words
  let words = sentence.split(' ');

  // Reverse the order of the words
  let reversedWords = words.reverse();

  // Join the words back together into a sentence
  let reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}
{
  function reverseWords(sentence) {
  // Split the sentence into words
  let words = sentence.split(' ');

  // Reverse the order of the words
  let reversedWords = words.reverse();

  // Join the words back together into a sentence
  let reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

}
}
// Reverse words in place?
{
  function reverseWordsInPlace(sentence) {
  let chars = sentence.split('');

  // Reverse the entire array
  chars.reverse();

  // Reverse each word in place
  let start = 0;
  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] === ' ' || i === chars.length) {
      reverseWord(chars, start, i - 1);
      start = i + 1;
    }
  }

  // Convert the array back to a string
  return chars.join('');
}

function reverseWord(chars, start, end) {
  while (start < end) {
    let temp = chars[start];
    chars[start] = chars[end];
    chars[end] = temp;
    start++;
    end--;
  }
}

}
// Find the first non repeating char in a string?
{
  function firstNonRepeatingChar(str) {
  let freq = {};

  // Count the frequency of each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    freq[char] = freq[char] ? freq[char] + 1 : 1;
  }

  // Find the first character with a frequency count of 1
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freq[char] === 1) {
      return char;
    }
  }

  // If no non-repeating characters are found, return null
  return null;
}

}
// Remove duplicate characters from a sting?
{
  function removeDuplicateChars(str) {
  let freq = {};
  let uniqueChars = [];

  // Count the frequency of each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    freq[char] = freq[char] ? freq[char] + 1 : 1;
  }

  // Add each unique character to the uniqueChars array
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freq[char] === 1) {
      uniqueChars.push(char);
    }
  }

  // Join the uniqueChars array back into a string and return it
  return uniqueChars.join('');
}

}
// Verify a word as palindrome?
// Generate random between 5 to 7 by using defined function.
// Find missing number from unsorted array of integers.
// Check whether any two numbers in an array sums to a given number?
// Find the largest sum of any two elements?
// Total number of zeros from 1 upto n?
// Match substring of a sting?
// Create all permutation of a string?