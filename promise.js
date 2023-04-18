//prmoise is js object , which represent eventually completed asynchronous event
// promise used help to avoid callback hell , inversion control

const cart = ['vans shoes']
const promise = addCart(cart)
.then((data)=>{
	// console.log('cartID', data)
	return data
})
.then((data)=>{
	return proceedToPayment(data)
})
.then((message)=>{
	// console.log('message',message)
})
.catch((err)=>{
	// console.log('Error',err)
})




function addCart(cart){
	const promise = new Promise((resolve,reject)=>{
		if(!validateCard(cart)){
			const err = new Error('Cart is not valid')
			reject(err)
		}
		else{
			const cartId = '123'
			resolve(cartId)
		}
	})
	return promise
}
//
function validateCard(cart){
	return true
}
//
function proceedToPayment(cartId){
	const promise = new Promise((resolve,reject)=>{
		if(cartId){
			const message = 'Payment Done'
			setTimeout(()=>{
			 resolve(message)
			},5000)
		}
		else{
			const err = new Error('Payment Failed')
			reject(err)
		}
	})
	return promise
}
//




