////////
// function declaration 
//
{
	function abc(a){
		return a
	}
}
// function expression 
// storing a funciton  inside a variable called function expression
{
	const fun = function (a){
		return a
	}
}
//first class function 
// function that can be passed as an argument to other function and can be 
// return as values from function .

{
	function abc(a){
		return a
	}

	function fc(fn){
		return fn('hello')
	}
	fc(abc)

}
// IIFE => immediate invoked function expression
{

//syntax as
// (function abc(a){

// })(4)
}
// hoisting
{
// Hoisting is a mechanism in JavaScript where variables and function declarations are moved to the top of their
//  respective scopes during the 
//  compilation or execution phase of the code. 
//  This means that variables and functions can be used before they are declared in the code.

// In the case of variables, only the declaration 
// (not the assignment) is hoisted. This means that if you try 
// to access the value of a variable before it is declared, 
// you will get an undefined value. For example:
// console.log(myVariable); // expected Outputs undefined
var myVariable = 10;

//In the case of function declarations, both the declaration and the function body are hoisted.
// This means that you can call a function before it is declared in the code. For example:
// myFunction(); // Outputs "Hello World!"
function myFunction() {
  console.log("Hello World!");
}
}
{
	// callback function
	// In JavaScript, a callback function is a function that is passed as an argument to another function,
	//  and is executed when that function completes its task. The function that receives the callback
	//  as an argument is typically
	//   a higher-order function, which means that it operates on other functions.
	// ex
	// document.addEventListener("click", function() {
    //           console.log("Clicked!");
    //    });
}
{
	// params and args 
	// example as 
	function abc(c,d){}
    abc(2,3)
     // c is a parameter and 2 is an argument, 
     // and d is a parameter and 3 is an argument.
}
// spread and rest operator
{
 //The spread operator is used to "spread" the elements of an array or an object into
 // another array or object. For example, you can use the spread operator to concatenate two arrays:
 const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
// console.log(arr3); // [1, 2, 3, 4, 5, 6]
// The rest parameter syntax is used to represent an indefinite number of arguments as an array.
//  For example, you can use the rest parameter syntax
//   to create a function that can take any number of arguments:
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(4, 5, 6, 7)); // 22

}