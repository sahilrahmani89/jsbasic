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
			let smallInstance = fastPower(a,b/2)
			smallInstance*= smallInstance
			if(b%2===1){

				return a*smallInstance
			}
			console.log('small',smallInstance)
			return smallInstance
		}
	}
	console.log(fastPower(2,6))
}
