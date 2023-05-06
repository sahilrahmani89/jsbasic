
// 
//split , splice , slice , 
{
const a = ["adj","jdhj","djd"]
const b = 'hey this side newbie'

 // console.log(b.split(" ")) //  ['hey', 'this', 'side', 'newbie']

 // splice method 
 // let a1 = a.splice(1,1, "second poitn")  // first argument for starting point , 
                            //second argument will remove number of element after that
                            // third  argument will  add from point of first argument

 // console.log(a1) // ["jdhj"]
 // console.log(a) // ["adj","djd"] // changes in original array 

 // slice method 
 // let a1 = a.slice(1,2) // first argument starting point , 
 						// second argument start with starting point of array , then 
 						//it will dlt accordingly
 // console.log(a1)
 // console.log(a) // noo changes in original array


}
{
	// string method 
	const a = 'Learning phase of boot '
	const b = 'hey this side newbie'
	//charAt , charCodeAt , concat , endWith ,includes
	//indexOf , lastindexOf, repeat , replace,search
	// substr , substring // trim

	let a1 = a.charAt(1) // e
	let a2 = a.charCodeAt(1) // ascii code of e
	let a3 = a.endsWith('boot') // return true
	let a4 = a.includes('ea') //return true
	let a5 = a.concat(b)
	let a6 = a.indexOf('a') // starting with 0
	let a7 = a.lastIndexOf('a') // starting with 0 but will check at the end
	let a8 = a.repeat(3) // repeating of all text
	let a9 = a.replace(/phase/g,'PHASE')
	let a10 = a.search('p') //returnindex
	let a11 = a.substr(2,2) // first argument start index point , second arg  total num to be extract from 1st point
							// ar
	let a12 = a.substring(2,3) // first argument start index point , second arg  total num to be extract fromindex 0
	                           //a 
	 // console.log(a12)


}