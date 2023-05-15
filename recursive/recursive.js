/// factorial // illey fucke 
function factorial(num){
	if(num ===1){
		return 1
	}
	return num * factorial(num-1)
}
factorial(5)
//
//fibonacci series 
// function fibonacci(num){
// 	let item = new Array(num-1)
// 	for(let i =0; i<num; i++){
// 		if(i===0||i===1){
// 			item[i] = i
// 		}
// 		else{
// 		 item[i] = item[i-1] + item[i-2]
// 		}
// 	}
// 	return item[num-1]
// }
// fibonacci(10)
///

///  fibonacci
function fibonacci(num){
	if(num===0 || num===1){
		return num
	}
	else{
		let a = fibonacci(num-1)
		let b = fibonacci(num-2)
		return a+b
	}
}
fibonacci(6)
/// check if array is sorted or not
{
const a = [1,3,5,9,11,12,12,15,11]
function isSorted(a){

	if(a.length===2 && a[0]<=a[1]){
		return true
	}
	let b = a.slice(1)
	if(a[0]<=a[1] && isSorted(b)){
		return true
	}
	else{
		return false
	}
}
isSorted(a)
}
// power of numbers 
{
function power(a,b){
		if(b===0){
			return 1
		}
		else{

			return a* power(a,b-1)
		}
}
power(2,3)
}

{
	function fastPower(a,b){
		if(b===0){
			return 1
		}
		else{
			
			if(b%2===0){
				let smallInstance = fastPower(a,b/2)
			   return smallInstance * smallInstance
			}
			else{
				return a * power(a,b-1)
			}
		
		}
	}
	fastPower(2,6)
}
//////// console it increasing and descreasing of num
{

	function printDecrement(a){
		if(a===0){
			return
		}
		// console.log(a)
		printDecrement(a-1)
	}
	printDecrement(5)

	function printIncrement(a){
		if(a===0){
			return
		}
		printIncrement(a-1)
		// console.log(a)

	}
	printIncrement(5)
}
{
	// multiply two numbers using recursive
	function sum(a,b){
		if(b===0){
			return a
		}
		else{
			return sum(a+1,b-1)
		} 	
	}
	sum(2,4)
	
}
{
	//conver a string into integer using recursive
	function stringToInteger(str) {
  if (str === '') {
    return 0;
  } else {
    const num = str.charCodeAt(0) - 48;
    const remainingStr = str.substring(1);
    return num * Math.pow(10, str.length - 1) + stringToInteger(remainingStr);
  }
}

console.log(stringToInteger('123')); // Output: 123
console.log(stringToInteger('-456')); // Output: -456

}
{
	// tiling problem
}



