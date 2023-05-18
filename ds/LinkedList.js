// Linked list is linear data structure, like similar to an array
// In Linked list each element is seperated object that contains pointer and linked to 
// next object 
// Each element (commonly called nodes) contains two items: the data stored and a link // to the next node
// Nodes can easily be removed or added from a linked list without reorganizing the 
// entire data structure. This is one advantage it has over arrays.
// its used more memory than array
// search operation is expensive


// type of linked list 
// Singly Linked Lists: Each node contains only one pointer to the next node. 
// Doubly Linked Lists: Each node contains two pointers, a pointer to the next node 
// and pointer to the previous node.
// Circular Linked Lists: Circular linked lists are a variation of a linked list in 
// which the last node points to the first node or any other node before it, 
// thereby forming a loop. 

// real world application 
 // #Image viewer #Previous and next page in a web browser #Music Player 
 // #GPS navigation systems //#Robotics // All application used in stack n queue

// Operation of linked list 
// prepand => add element at head of linked list
// append => add at the tail of linkedlist
// getSize => to get length of linked list 
// isEmpty => to check whether linkedlist is  empty or not 
// insertByIndex => add element to gievn index
// removeByIndex => remmove By Index
// removeByvalue => remove By value
// searchValue => search value and return true or its index


class Node  {
    constructor(value){
        this.value = value
    this.next = null
  }
}

class LinkedList{
    constructor(){
    this.head = null // intial state of head
    this.size = 0
  }
  // isEmpty to check whether linkedlist is empty or no
  isEmpty(){
    return this.size === 0
  }
  //get Size of linked list
  getSize(){
    return this.size
  }
  // prenpand , add at front of linked list
  prepand(value){
        const node = new Node(value)
      if(this.isEmpty()){
        this.head = node
      }
      else{
        node.next = this.head
        this.head = node
      }
      this.size++
  }
  // append, add at back of linked list
  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    }
    else{
            let curr = this.head
        while(curr.next){
            curr= curr.next
        }
        curr.next = node 
    }
    this.size++
  }
  //insertByIndex , insert element on linked list to given index value 
  insertByIndex(index,value){
    if(index<0 || index>=this.size){
        return 
    }
    else if(index===0){
         this.prepand(value)
    }
    else{
 
         const node = new Node(value)
         let curr = this.head
       let initialPos = 1 
       while(initialPos<index){
         curr= curr.next
        initialPos++
       }
        node.next = curr.next
      curr.next = node
      this.size++
    }
  }
  // removeByIndex => remmove By Index
    removeByIndex(index){
    let removedNode
    if(index<0||index>this.size){
        return
    }
    else if(index==0){
        removedNode = this.head.value
      this.head = this.head.next
       this.size--
      return removedNode
    }
    else{
        let curr = this.head
      let pos = 1
      while(pos!=index){
            curr = curr.next
          pos++
      }
      removedNode = curr.next
      curr.next = removedNode.next
       this.size--
    }
   
  }
  // print , traverse to linkedlist and print value 
  print(){
    if(this.isEmpty()){
        console.log('this is empty')
    }
    else{
        let curr = this.head
      let res = ``
      while(curr){
        res+= `${curr.value} `
        curr = curr.next
      }
      return res
    }
  }
  removedByValue(value){
    let removedNode 
    if(value===this.head.value){
            removedNode= this.head.value
        this.head = this.head.next
        this.size--
        return removedNode
    }
    else{
            let curr = this.head
        while(curr.next && curr.next.value!==value){
                curr = curr.next
        }
        if(curr.next){
                removedNode = curr.next
            curr.next = removedNode.next
        }
        else{
            return false
        }
    }
  }
  searchByValue(value){
    let i =0
    if(value===this.head.value){
            return i
    }
    else{
            let curr = this.head
        
        while(curr.next && curr.value!==value){
                curr = curr.next
            i++
        }
        if(curr){
            return i
        }
        else{
            return false
        }
    }
  }
}

const list = new LinkedList()

list.prepand(1)
list.prepand(3)
list.prepand(4)
list.append(0)
list.insertByIndex(3,2.4)
console.log(list.print())
list.removedByValue(1)
console.log(list.print())
console.log(list.searchByValue(0))












