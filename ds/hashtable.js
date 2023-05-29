// ds which allow us to store or retreive key value pair efficiently
//using hash function 
// application of hash table 
// database indexing , password storage , cryptography , block chain , 
// image processing, file comparison , fraud detection 
// operation for hashtable 
// search 
// insert 
// delete 
// print 
class HashTable{
	constructor(length){
  	this.item = new Array(length)
    this.size = 0
  }
  _hash(key){
  	let res = 0 
    for(let i =0; i<key.length;i++){
    	res+= key.charCodeAt(i)
    }
    return res%this.item.length
  }
 set(key,value){
		const index = this._hash(key)
		if(this.item[index]){
 			for(let i =0; i<this.item[index].length;i++){
      		if(this.item[index][i][0]===key){
          		this.item[index][i][1]=value
              return
          }
      }
      	this.item[index].push([key,value])
		}
    else{
    	this.item[index] = []
      this.item[index].push([key,value])
		}
		this.size++
	}
  get(key){
      const index = this._hash(key)
      if(this.item[index]){
      
					for(let i=0; i<this.item[index].length; i++){
          	if(this.item[index][i][0]===key){
             	return this.item[index][i][1]
            }
          }
         let message = 'not found'
				 return message
      }else{
        let message = 'not found'
				return message
     }
	}
  print(){
  console.log('thisitem',this.item)
  	for(let i =0 ;i<this.item.length; i++){
    		console.log(i, this.item[i])
    }
  }
  remove(key){
  	const index = this._hash(key)
    if(this.item[index]){
    	for(let i=0; i<this.item[index].length;i++){
      		if(this.item[index][i][0]===key){
          		this.item[index].splice(i,1)
              this.size--
              return 
          }
      }
    }
  }
}

const hash = new HashTable(5)
hash.set('vijay',1)
hash.set('Utkarsh',2)
hash.set('Hemant',3)
hash.set('Sahil',4)
hash.set('Santosh',5)
hash.set('Utkarsh',2.1)
console.log(hash.get('vijay'))
console.log(hash.get('Utkarsh'))
console.log(hash.get('Hemant'))
console.log(hash.get('Sahil'))
console.log(hash.get('Santosh')) 
hash.remove('Sahil')
hash.remove('vijay')
console.log(hash.get('Sahil'))
console.log(hash.get('vijay'))

/* hash.print() */
/* console.log(hash.get('vijay')) */














