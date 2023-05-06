/// 
// basically using function , in any object , // somthing like borrowing function
//

let obj = {
	name : 'abx',
	age:40,
	getName:function(surname){
		console.log(`${this.name} sir ${surname}`)
	}
}

let obj2 = {
	name:'cba',
	age:41
}

// so if we do not want to write another function same like this 
// here we can use call method

// obj.getName.call(obj2,'cba surnanne')

// apply work same but for passing argunment we use array

// obj.getName.apply(obj2,['cba surname'])


// for bind we store function in an variable 
// 
let bindFun = obj.getName.bind(obj2,['bind cba surname'])
// bindFun()

