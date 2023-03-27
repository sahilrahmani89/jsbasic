let obj1 ={
	name:'abc',
	age:22,
	system:{
		config:'deal',
		config2:{
			config:'boom'
		}
	}
}

// let obj2  = obj1

// obj2.name = 'cba'

// console.log(obj2)
// console.log(obj1)
// change in original object

/// first way can be 

// let obj2 =  {...obj1}
// obj2.name = 'cba'
// console.log(obj2)
// console.log(obj1)

// let obj2 =  Object.assign({},obj1)
// obj2.name = 'cba'


// let obj2 = {...obj1}

// obj2.system.config2.config='baam'
// console.log(obj2)
// console.log(obj1)


// so above example, doesnot work if obj is nested 
// so deal with this  we have json parse and json stringify

	// deep copy but if any object contains function pr date object this wont work 
	// we can use loader library for this 
// let obj2 = JSON.parse(JSON.stringify(obj1))

// obj2.system.config2.config='baam'
// console.log(obj2)
// console.log(obj1)
 // using jsnon parse has also draw back , 
 //it convert object into string 
 // and it doesnot work for function 
 // so their soln can be library such as loadash
 



