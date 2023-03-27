// if we have fixed size of queue , 
//we use circular queue

// use in clock , streaming data and traffic lights


class circularQueue{
	constructor(capacity){
		this.capacity= capacity
		this.item = new Array(capacity)
		this.size= 0
		this.front = -1
		this.rear = -1
	}
	isfull(){
		return this.item.length === this.size
	}
	isempty(){
		return this.size === 0
	}
	enqueue(value){
		if(!this.isfull()){
			this.rear = (this.rear + 1) % this.capacity
			this.item[this.rear] = value
			this.size += 1
			if(this.front===-1){
				this.front = this.rear
			}
		}
		else{
			console.log('queuee is full')
		}
	}
	dequeue(){
		if(this.isempty()){
			return null
		}
			const items = this.item[this.front]
			this.item[this.front] = null
			this.front = (this.front+1) % this.capacity
			this.size -= 1
		if(this.isempty()){
			this.front = -1
			this.rear = -1
		}
		return items
	}
	print(){
		if(this.isempty()){
			console.log('queue is empty')
		}
		else{
			let i 
			let res = ``
			for( i = this.front; i!==this.rear; i = (i+1)%this.capacity){
				res+= this.item[i]+ ` `
			}
			res+= this.item[i]
			console.log(res)
			return res
		}
	}
	peek(){
		if(this.isempty()){
			console.log('queue is empty')
			return null
		}
		else{
			const items = this.items[this.front]
			return items
		}
	}
}



const cq = new circularQueue(5)
cq.enqueue(1)
cq.enqueue(2)
cq.enqueue(3)
cq.enqueue(4)
cq.enqueue(5)
cq.print()
cq.dequeue()
cq.dequeue()
cq.print()
cq.enqueue(1)
cq.enqueue(2)
cq.print()
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.print()
cq.dequeue()
cq.dequeue()




