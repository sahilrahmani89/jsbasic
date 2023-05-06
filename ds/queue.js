///follow FIFO
// example == printer , cpu task scheduling , callaback
// enqueue ==> add at the last of an array 
// dequeue ==> remove element at the beggining of an array 
//peek ==> get last element of array without removing of it!
//size == get size of queue
//is empty ==> check its empty or not!


///////  printer , callback

class Queue {
	constructor(){
		this.item = []
		this.tail = 0
		this.head = 0
	}
	getSize(){
		return this.tail-this.head
	}
	isempty(){
		return this.item.length === 0
	}
	enqueue(value){
		this.item[this.tail] = value
		this.tail++
	}
	dequeue(){
		delete this.item[this.head]
		this.head++
	}
	peek(){
		return this.item[this.head]
	}
	print(){
		console.log(this.item)
	}

}
// const queue = new Queue()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.dequeue(3)
// queue.print()
// console.log(queue.getSize())