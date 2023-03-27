class HashTable{
	constructor(length){
		this.item = new Array(length)
		this.size = 0
	}
	_hash(key){
		let index = 0
		for(let i=0;i<key.length;i++){
			index+= key.charCodeAt(i)
		}
		return index%this.item.length
	}
	set(key,value){
		const index = this._hash(key)
		if(this.item[index] ){
			for(let i =0 ; i< this.item[index].length;i++){
				if(this.item[index][i][0]===key){
					this.item[index][i][1]=== value
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
			for(let i =0; i<this.item[index].length;i++){
				if(this.item[index][i][0]===key){
					// console.log(this.item[index][i][1])
					return this.item[index][i][1]
				}
			}
		}
		else{
			return undefined
		}
	}
	remove(key){
		const index = this._hash(key)
		if(this.item[index]){
			for(let i =0; i<this.item[index].length; i++){
				if(this.item[index][i][0]===key){
					this.item[index].splice(i,1)
					this.size--
					return true
				}
			}
		}
		else{
			console.log('not found')
			return false
		}
	}
	display(){
		this.item.forEach((value,index)=>{
			let iterVal = value.map(([key,value])=>`[${key}, ${value}]`)
			console.log(`${index} : ${iterVal}`)
		})
	}
}


const hash = new HashTable(20)
hash.set('hm',1)
hash.set('bill',2)
hash.set('ny',+5)
hash.set('redyy',8232)
// console.log(hash.get('bill'))
hash.remove('hm')
// hash.display()