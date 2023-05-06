// // linkedlist
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.size = 0
//         this.head = null
//     }
//     getSize(){
//         return this.size
//     }
//     isempty(){
//         return this.size === 0
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(this.isempty()){
//             this.head = node
//         }
//         else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     append(value){
//         const node = new Node(value)
//         if(this.isempty()){
//             this.head = node
//         }
//         else{
//             let curr = this.head
//             while(curr.next){
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isempty()){
//             console.log('this linked list is empty')
//         }
//         else{
//             let res = ``
//             let curr = this.head
//             while(curr){
//                 res+=`${curr.value } `
//                 curr= curr.next
//             }
//             console.log(res)
//         }
//     }
//     //insert by index
//     insertByIndex(value,index){
//         if(index<0 || index>this.size){
//             console.log('cant do it')
//         }
//         else if(index===0){
//             this.prepend(value)
//         }
//         else{
//             const node = new Node(value)
//             let curr = this.head
//             let i
//             for(i=0;i<index-1;i++){
//                 curr = curr.next
//             }
//             node.next = curr.next
//             curr.next = node
//             this.size++
//         }
//     }
// }
// const list = new LinkedList()
// list.append(1)
// list.append(2)
// list.append(3)
// list.append(5)
// list.append(6)
// list.append(7)
// list.insertByIndex(4,3)
// list.print()

/// practice
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head= null
//         this.size = 0
//     }
//     isempty(){
//         return this.size ===0
//     }
//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(this.isempty()){
//             this.head = node
//         }
//         else{
//             node.next = this.head
//             this.head = node 
//         }
//         this.size++
//     }
//     append(value){
//         const node = new Node(value)
//         if(this.isempty()){
//             this.head = node
//         }
//         else{
//             let curr = this.head
//             while(curr.next){
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isempty()){
//             console.log('linkedlist is empty')
//         }
//         else{
//             let res = ``
//             let curr = this.head
//             while(curr){
//                 res+= `${curr.value } `
//                 curr= curr.next
//             }
//             console.log(res)
//         }
//     }
//     insertByIndex(value,index){
//         if(index<0 && this.size<index){
//             return console.log(`cant perform , inserbyindex`)
//         }
//         else if(index===0){
//             this.prepend(value)
//         }
//         else{
//             const node = new Node(value)
//             let curr = this.head
//             for(let i =0; i<index-1;i++){
//                 curr = curr.next
//             }
//             node.next = curr.next
//             curr.next = node
//             this.size++
//         }
//     }
//     removeByIndex(index){
//         if(this.isempty()){
//             console.log(`lsit empty cant perfomr remove by index`)
//         }
//         if(index<0 && index>=this.size){
//             return console.log(`cant perform, remove by index`)
//         }
//         let removeNode
//         if(index === 0){
//             removeNode = this.head
//             this.head = this.head.next
//             return removeNode
//         }
//         else{
//             let curr = this.head
//             for(let i =0; i<index-1 ;i++){
//                 curr = curr.next
//             }
//             removeNode = curr.next
//             curr.next = removeNode.next
//             this.size--
//             return removeNode
//         }
//     }
//     //
//     removedByValue(value){
//         if(this.isempty()){
//             console.log(`linkedlist is empty , `)
//         }
//         if(this.head.value === value){
//             this.head = this.head.next
//             this.size--
//         }
//         else{
//             let curr = this.head
//             let removeNode
//             while(curr.next && curr.next.value !== value){
//                 curr = curr.next
//             }
//             if(curr.next){
//                 removeNode = curr.next
//                 curr.next = removeNode.next
//                 this.size--
//             }
//             else{
//             return console.log('value did not found in linkedlist')
//            }
//         }
//     }
//     // search and return its index
//     searchByValue(value){
//         if(this.isempty()){
//             return -1
//             console.log(`linkedlist is empty , `)
//         }
//         let i = 0
//         if(this.head.value === value){
//             console.log(i)
//             return i
//         }else{
//             let curr = this.head
//              while(curr){
//                 if(curr.value===value){
//                     console.log(i)
//                     return i
//                 }
                
//                     curr = curr.next 
//                     i++ 
//              }
//              console.log('value not exist in search')
//              return -1

//         }
//     }
//     //
//     reverse(){
//         let prev = null 
//         let curr = this.head 
//        while(curr){
//          let next = curr.next
//          console.log('netx',next)
//          curr.next = prev
//          console.log('cuurr.next',curr.next)
//          prev = curr
//          console.log('prev',prev)
//          curr = next
//          console.log('curr',curr)
//        }
//        this.head = prev

//     }
// }
//
// const list = new LinkedList()
// list.append(1)
// list.append(2)
// list.append(3)
// list.print()
// list.reverse()
// list.print()

// class Node {
//     constructor(value){
//         this.value = value
//         this.next  = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isempty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
//     prepand(value){
//         const node = new Node(value)
//         if(this.isempty()){
//             this.head = node
//         }
//         else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isempty()){
//             console.log('this is empty')
//         }
//         else{
//             let prev = this.head
//             let res =``
//             while(prev){
//                 res+=`${prev.value} `
//                 prev= prev.next
//             }
//             console.log(res)
//         }
//     }
//     append(value){
//         const node = new Node(value)
//         if(this.isempty()){
//             this.head = node
//         }
//         else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node 

//         }
//         this.size++
//     }
//     insertByIndex(value,index){
        
//         if(index<0 || index>this.getSize){
//             console.log('this cant be implemented')
//         }
//         else if(index===0 ){
//             this.prepand(value)
//         }
//         else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i =0 ; i<index-1; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node 
//             this.size++
//         }
//     }
//     removeByIndex(index){
//         if(this.isempty()){
//             console.log(`lsit empty cant perfomr remove by index`)
//         }
//         if(index<0 && index>=this.size){
//             return console.log(`cant perform, remove by index`)
//         }
//         let removeNode
//         if(index === 0){
//             removeNode = this.head
//             this.head = this.head.next
//             return removeNode
//         }
//         else{
//             let prev = this.head
//             for(let i = 0 ; i<index-1; i++){
//                 prev = prev.next
//             }
    
//             removeNode = prev.next
//             prev.next = removeNode.next
//             this.size--
//         }
//     }
//     removeByValue(value){
//         if(this.isempty()){
//             console.log(`linkedlist is empty , `)
//         }
//         if(this.head.value === value){
//             this.head = this.head.next
//             this.size--
//         }
//         else{
//             let curr = this.head
//             let removeNode
//             while(curr.next && curr.next.value !== value){
//                 curr = curr.next
//             }
//             if(curr.next){
//                 removeNode = curr.next
//                 curr.next = removeNode.next
//                 this.size--
//             }
//             else{
//             return console.log('value did not found in linkedlist')
//            }
//         }
//     }
//     searchByValue(value){
//         if(this.isempty()){
//             return -1
//             console.log(`linkedlist is empty , `)
//         }
//         let i = 0
//         if(this.head.value === value){
//             console.log(i)
//             return i
//         }else{
//             let curr = this.head
//              while(curr){
//                 if(curr.value===value){
//                     console.log(i)
//                     return i
//                 }
                
//                     curr = curr.next 
//                     i++ 
//              }
//              console.log('value not exist in search')
//              return -1

//         }
//     }
//     reverse(){
//         let prev = null 
//         let curr = this.head 
//        while(curr){
//          let next = curr.next
//          console.log('netx',next)
//          curr.next = prev
//          console.log('cuurr.next',curr.next)
//          prev = curr
//          console.log('prev',prev)
//          curr = next
//          console.log('curr',curr)
//        }
//        this.head = prev

//     }

// }

// const linked = new LinkedList()

// linked.append(1)
// linked.append(2)
// linked.append(4)
// linked.insertByIndex(3,2)
// linked.removeByIndex(2)
// linked.insertByIndex(3,2)
// linked.print()




////// Linked list 
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    isempty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepand(value){
        const node = new Node(value)
        if(this.isempty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    print(){
        if(this.isempty()){
            console.log('linkedlist is empty ')
        }
        else{
            let res = ` `
            let prev = this.head
            while(prev.next){
                res+=`${prev.value} `
                prev = prev.next
            }
        }
    }
    append(value){
        const node = new Node(value)
        if(this.isempty()){
            this.head = node
        }
        else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insertByIndex(value,index){
        if(index<0 || index>this.size){
            console.log('cant be implement')
        }
        else if(index === 0){
            this.prepand(value)
        }
        else{
            const node = new Node(value)
            let prev = this.head
            for(let i =0 ; i<index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next  = node 
            this.size++
        }
    }
    removeByIndex(index){
        let removeNode
        if(index<0 || index>this.size){
            console.log('cant be implement')
        }
        else if(index===0){
            this.head = this.head.next
            this.size --
        }
        else{
           let prev = this.head
            for(let i =0 ; i<index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
            this.size-- 
        }
    }
    removeByValue(value){
        if(this.head.value = value){
            this.head = this.head.next
            this.size--
        }
        else{
            let prev = this.head
            let removeNode
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                removeNode = prev.next
                prev.next = removeNode.next
                this.size--
            }
            else{
            return console.log('value did not found in linkedlist')
           }
        }
    }
    searchValue(value){
        let i =0
        if(this.head.value=value){
            return i 
        }
        else{
            let prev = this.head
            while(prev){
                if(prev.value===value){
                    console.logi
                    return i
                }
                prev = prev.next
                i++
            }
            return -1
        }
    }
}














