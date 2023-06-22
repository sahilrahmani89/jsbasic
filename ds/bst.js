//A tree data structure is a hierarchical structure that is used to represent and 
//organize data in a way that is easy to navigate and search. It is a collection of nodes
//that are connected by edges and has a hierarchical relationship between the nodes

// Real world example 
// File systems: The files and folders in a computer are organized
//in a tree structure
//XML/HTML documents: The elements and attributes in an XML or HTML document are 
//represented as a tree structure, where the root is the document itself
// DOM - Document Object Model 

 //Binary Search Tree: A binary search tree is a tree data structure that allows fast 
 //searching, insertion, and deletion of data.
 
 //The operation of a binary search tree involves 
 //searching => search value present in tree or not, 
 //inserting , inster value on left as per rule of BST
 // traversing , visiting every node present in binary search tree
 /// types of traverse method
//     depth of first search - its forms as 


//In-order traversal: This method visits the left subtree, read the data and then the right subtree.
/* It gives the nodes in non-decreasing order */

// 100
// /   \
// 20   200
// / \   / \
// 10 30 150 300

//The in-order traversal would be: 10 20 30 100 150 200 300.

//  Pre-order traversal: This method visits the root, then the left subtree, and then the right subtree. It is used to create a copy of the tree or to get prefix expressions on an expression tree For example, if the tree is:

// 100
//  /   \
// 20   200
// / \   / \
// 10 30 150 300
// 100, 20, 10, 30, 200, 150, 300
//The pre-order traversal would be: 100 20 10 30 200 150 300.

//•  Post-order traversal: This method visits the left subtree, then the right subtree, and then the root. 
//It is used to delete the tree or to get postfix expressions on an expression tree For example, if the tree is:

// 100
///   \
// 20   200
// / \   / \
// 10 30 150 300
// output as 10, 30, 20, 150, 300, 200 , 100
//The post-order traversal would be: 10 30 20 150 300 200 100.
//     breadth first search
// explore all node at present depth prior to moving on node 
// of next depth level
//// 100
///   \
// 20   200
// / \   / \
// 10 30 150 300
// bfs traversal as 100 20 200 10 30 150 300
//     breadth first search // level order 
// create a queue
// enqueue the root node 
// as long as queue exist 
//    a.dequeue the node front dorm queue
      // b. read the nodes value
      // c. enqueue the left child if exist
      // d. enqueu the rigth child if exist
// Binary Search Tree Min n Mac value 
// the most left side value  is smalllest value in Binary Search tree
// the most right side value is greatest value in binary search tree
      
 //deleting 
//  Start at the root node of the BST.
// Find the node to be deleted. If the node does not exist in the tree, the deletion operation is complete.
// If the node to be deleted has no children (leaf node), simply remove it from the tree.
// If the node to be deleted has only one child, replace the node with its child.
// If the node to be deleted has two children, find the node's successor (the smallest node in the right subtree) 
// or predecessor (the largest node in the left subtree).
// To find the successor, go right once from the current node and then keep going left until you reach the 
// smallest value.
// To find the predecessor, go left once from the current node and then keep going right until you reach the 
// largest value.
// Replace the node to be deleted with its successor/predecessor.
// Delete the successor/predecessor node from its original position.
// After replacing the node, make sure to update the parent node's reference to the replaced node.
// The deletion operation is complete.
 {
 class Queues{
      constructor(){
        this.item ={}
        this.tail = 0
        this.head = 0
        this.size= 0
      }

      isEmpty(){
        return this.size ===0
      }

      enqueue(value){
        this.item[this.tail] = value
        this.tail ++
        this.size++
      }
      dequeue(){
        const deq = this.item[this.head]
        delete this.item[this.head]
        this.head ++
        this.size--
        return deq
      }
      peek(){
        return this.item[this.head]
      }
      print(){
        return this.item
      }
  }

  // const queue = new Queue()
  // console.log(queue.isEmpty())
  // queue.enqueue(1)
  // queue.enqueue(2)
  // queue.enqueue(3)
  // console.log(queue.print())
  // queue.dequeue()
  // console.log(queue.print())
  
 class Node{
   constructor(value){
      this.value = value
      this.left = null
      this.right = null
   }
 }


class Bst{
  constructor(){
    this.root = null
  }
  isEmpty(){
    return this.root === null
  }
  insert(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.root = node
    }else{
      this.insertNode(this.root,node)
    }
  }
  insertNode(root,node){
    if(root.value > node.value){
        if(root.left===null){
          root.left = node
        }
        else{
            this.insertNode(root.left,node)
        }
    } else{
      if(root.right===null){
          root.right = node
        }
        else{
            this.insertNode(root.right,node)
        }
    }
  }
  search(root,value){
  
    if(root===null){
      return false
    }
    if(root.value===value){
      return true
    }
    else {
        if(root.value>value){
            return this.search(root.left,value)
        }
        else{
            return this.search(root.right,value)
        }
    }
    
  }
  preOrder(root){
    if(!this.isEmpty()){
        if(root!==null){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
  }
  inOrder(root){
    if(!this.isEmpty()){
        if(root){
          this.inOrder(root.left)
          console.log(root.value)
          this.inOrder(root.right)
        }
    }
  }
  postOrder(root){
    if(!this.isEmpty()){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
  }
  print(){
    console.log('bst',this.root)
  }
  levelOrder(){
    const queue = new Queues()
    queue.enqueue(this.root)
    while(queue.size){
      // console.log('boom')
      let curr = queue.dequeue()
      console.log(curr.value)
       if(curr.left){
        queue.enqueue(curr.left)
      }
      if(curr.right){
        queue.enqueue(curr.right)
      }
    }
  }
  min(root){
    if(!root.left){
        console.log(root.value)
        return root.value
    }else{
      this.min(root.left)
    }
  }
  max(root){
    if(!root.right){
      console.log(root.value)
    }else{
      this.max(root.right)
    }
  }
}

const bst = new Bst()
bst.insert(10)
bst.insert(5)
bst.insert(13)
bst.insert(3)
// bst.insert(7)
bst.insert(2)
bst.print()
console.log(bst.search(bst.root,10))
/* console.log(bst.search(bst.root,5))
console.log(bst.search(bst.root,13)) */
/* bst.preOrder(bst.root) */
/* bst.inOrder(bst.root) */
/* bst.postOrder(bst.root) */
/* bst.levelOrder()  
 */
/* bst.min(bst.root)
bst.max(bst.root) */




/* bst.print() */


}

