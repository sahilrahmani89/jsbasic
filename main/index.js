// data structure 

// push , add an element at last of an array 
// pop  , remove an element at last of an array 
// shift , remove an element at beginning of an array 
//unshift , add an element at beginning if an array

// 

// array 
// method used in array  ==
// map == calling function for every array element
//filter == calling a fucntion where array element pass the test provide by function
//concat == adding two arrays
//every == result boolean for all array element , check condition for every element of an array
// time complexity for an array 
 // ==> if we remove element from  of end array time complexity
 // for this is O(1) // time complexity is constant, push(adding ) , pop(remove)
 // ==> if we remove element from the beggineng of an array time complextiy 
 //is linear O(n) // unshift(adding), shift (removing)


 // for an array 
 // insert or remoive from an end O(1)
 // insert or remove from the beginning O(n)
 // access O(1)
 //search O(n)
 //for each , map ,reducer == O(n)


////////////// Objects //////////////

//object.keys == rerturn key of object
//object.values == retunr value of object
// object.entries == return value both key and values

// let user = {
//   name: "John",
//   age: 30
// };
// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [ ["name","John"], ["age",30] ]

// insert/remove/access/ = O(1)

// search --O(n)
//object.values/object,keys/Object.entries = O(n)

//////////////////// set data structure ////////////////////////
///


///////////////// Stack ///////////////////////

// lifo == last in first out 
// last element inserted , first element to be removed
// useage ... undo opression , browser goback things

//// implementing stack data structure in js

// push() too add an element at top of stack
// pop() too remove an element at the top of stack
// peek() get the value of the top of an element without removing it
// isempty() check if the stack is empty or not 
// size() get the number of element in stack
// print() to visualise elements in the stack 


// class Stack {
// 	constructor(){
// 		this.items= []
// 	}
// 	push(element){
// 		return	this.items.push(element)
// 	}
// 	pop(){
// 		return this.items.pop()
// 	}
// 	peek(){
// 		return this.items[this.items.length-1]
// 	}
// 	isEmpty(){
// 		return this.items.length ===0
// 	}
// 	size(){
// 		return this.items.length
// 	}
// 	print(){
// 		console.log(this.items.toString())
// 	}
// }

// const stack1 = new Stack()
// console.log(stack1.isEmpty())

// stack1.push(1)
// stack1.push(2)
// stack1.push(3)
// stack1.push('apple')
// stack1.pop()
// stack1.print()
// stack1.peek()
// stack1.push('banana')
// stack1.size()
// stack1.peek()
// stack1.print()


////////////////////Queue////////////////

// it works on fifo , first in first out
//printer, callback , cpu task scheduling ,

//enqueue to add an element end of queue
//dequeue to remove an element from an end of queue
//peek get the element at the front of queue without removing it
//isempty to check queue is empty or not
// print print value of queueu
//size get the number of element in queue

// class Queue{
//     constructor(){
//         this.item = []
//     }

//     enqueue(elem){
//         return this.item.push(elem)
//     }

//     dequeue(){
//         return this.item.shift()
//     }
//      print(){
//         return console.log(this.item)
//      }
//      peek(){
//       return  console.log(this.item[0])
//      }
//      size(){
//         return this.item.length
//      }
//      isempty(){
//         return this.item.length ===0 
//      }
// }

// const queue = new Queue()

// console.log(queue.isempty())
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue('apple')
// queue.print()
// queue.dequeue()
// queue.print()
// queue.peek()
// console.log(queue.size())
// console.log(queue.isempty())


/// queue optimisation  ..............

// class Queue{
//     constructor(){
//         this.item=[]
//         this.rear=0
//         this.front = 0

//     }
//     enqueue(elem){
//         this.item[this.rear]= elem 
//         this.rear++
//     }
//     dequeue(){
//         let  items = this.item[this.front]
//         delete this.item[this.front]
//         this.front++
//         return items
//     }
//     isempty(){
//         return this.rear-this.front ===0
//     }
//     peek(){
//         return this.item[this.front]
//     }
//     size(){
//         return this.rear-this.front
//     }
//     print(){
//         console.log(this.item)
//     }
// }

// const queue = new Queue()

// console.log(queue.isempty())
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue('apple')
// console.log(queue.size())
// queue.print()
// queue.dequeue()
// queue.print()
// console.log(queue.size())
// queue.peek()
// console.log(queue.size())
// console.log(queue.isempty())


///////////////////////////circular queue 
// red light , clocks
// fifo

// class CircularQueue{
//     constructor(){
//         this.item = new Array(capacity)
//         this.capacity = this.capacity
//         this.currentLength = 0
//         this.rear= -1
//         this.front= -1
//     }
//     isFull(){
//         return this.capacity === this.currentLength
//     }
//     isempty(){
//         return this.currentLength ===0
//     }
//     enqueue(data){
//         if(!isFull()){
//             this.rear = this.rear+1
//             this.item[this.rear] = data
//             this.currentLength +=1
//             if(this.front===-1){
//                 this.front = this.rear36t6
//             }
            
//         }
//     }
//     dequeue(){
//         if(this.isempty()){
//             return null
//         }
//         const items = this.item[this.front]
//         this.item[this.front] = null
//         this.currentLength -= 1
//         this.front = this.front + 1
//         if(this.isempty()){
//             this.front = -1
//             this.rear = -1
//         }
//         return items
//     }
// }

/////////////////// Linked List  ////

// implementation of linked list
















































































 


















