// its worked on LIFO
// stack example ==> undo opression , broswser go back
// add at end of stack
// remove at the end of the stack
//peek to see the value at the end
//is empty 
// size 



///// stack /////
///  worked on lifo 
/// browser go back , undo opression 

class Stack {
	constructor(){
		this.item = []
		this.size =0
	}
	isempty(){
		return this.item.length === 0
	}
	getSize(){
		return this.item.length
	}
	push(value){
		this.item[this.size] = value
		this.size ++
	}
	pop(){
		this.item.length = this.size-1
		this.size --
	}
	peek(){
		return this.item[this.size-1]
	}
	print(){
		console.log(this.item)
	}
}


// const  stack = new Stack()

// stack.push(1)
// stack.push(3)
// stack.push(2)
// stack.pop()
// stack.print()


