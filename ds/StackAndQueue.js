
class StackAndQueue {
	constructor(arr) {
		this.arr = arr ?? [];
	}
	printArr() {
		return this.arr
	}
	push(value) {
		this.arr[this.arr.length] = value
		return this.arr.length
	}
	pop() {
		let poppedItem = this.arr[this.length - 1]
		delete this.arr[this.length - 1]
		this.arr.length--
		return poppedItem
	}
	unshift(value) {
		let length = this.arr.length
		for (let i = length; i > 0; i--) {
			this.arr[i] = this.arr[i - 1]
		}
		this.arr[0] = value
		return this.arr.length
	}
	shift() {
		let firstElem = this.arr[0]
		let length = this.arr.length
		for (let i = 1; i < length; i++) {
			this.arr[i - 1] = this.arr[i]
		}
		this.arr.length--
		return firstElem
	}

}
/* const stack = new StackAndQueue(["one"])
console.log('stack.printArr',stack.printArr())
stack.push('two')
stack.push('three')
stack.push('four')
console.log('stack.printArr',stack.printArr())
stack.pop()
console.log('stack.printArr',stack.printArr())
stack.unshift('four') 
console.log('stack.printArr',stack.printArr())
stack.shift()
console.log('stack.printArr',stack.printArr()) */