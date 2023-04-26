//
// match.. match syntax as => string.match(regex)
// for test syntax as => regex.test(string)

// match and test difference

{
	let a = ` A test has given set lorem dipsum sort for gets`
	let regex = /test/g
	let regexResult = regex.test(a) // expected output true
	let regexResult1 = a.match(regex) // expected output ["test"]
}
{
	// . using regext
	let a = `hello pun bun rat set it toi nun`
	let regex = /.un/g
	let regexResult = regex.test(a) // expected output true
	let regexResult1 = a.match(regex) // expected output ['pun', 'bun', 'nun']

}
{
	// i make case insenstive
	// case in breacket []
	let a = `hello pun bun rat set it toi nun`
	let regex = /[aeiou]/gi
	let regexResult = regex.test(a) // expected output true
	let regexResult1 = a.match(regex) // expected output ['e', 'o', 'u', 'u', 'a', 'e', 'i', 'o', 'i', 'u']
	///[^aeiou]/gi this is  matches all characters that are not a vowel.

}
{
	// [a+] this regex give output how may time appeared in a row
	let a = `hdksjk sdbkjahdk kjfdohek sfakjnbfjehfj`
	let regex = /[a+]/gi
    let regexResult = regex.test(a) // expected output true
	let regexResult1 = a.match(regex) // expected output ["a","a"]
}
{
	//* occur zero or more times.
	let a = `kjdhkjsl fdksjk adhkar ef ee`
	let regex = /[e*]/gi
	let regexResult = regex.test(a) // expected output true
	let regexResult1 = a.match(regex) // expected output ['e', 'e', 'e']
}
{
	//dollar sign character $ at the end of the regex.
	let a = `djhskj fdkj thr end`
	let regex = /end$/gi
	let regexResult = regex.test(a) // expected output true
	let regexResult1 = a.match(regex) // expected output ['end']
	//^ this sign at starting of string
	// let regex = /^end/gi
}
{
	// JavaScript to match the alphabet is /\w+/ (alpha and number )
	//opposite of the \w with \W. 
	//The shortcut to look for digit characters is \d
	//non-digits using a similar shortcut that uses an uppercase D instead.
}
{
	// using curly brackets /a{3,5}h/.
	let A4 = "aaaah";
    let A2 = "aah";
	let multipleA = /a{3,5}h/;
	multipleA.test(A4); // expected output true
    multipleA.test(A2); // expected output false
    //match only the letter a appearing between 3 and 5 times in the string
    //For example, to match only the string hah with the letter a appearing 
    //at least 3 times, your regex would be /ha{3,}h/.
}
{
	// ? using in regex
	//For example, there are slight differences in American and British English 
	//and you can use the question mark to match both spellings.

	let american = "color";
	let british = "colour";
	let rainbowRegex= /colou?r/;
	rainbowRegex.test(american); //expected  output true
	rainbowRegex.test(british); // expecred output true
}
{
	//using two words to checks true 
	// in bracket and or (|)
	//If you want to find either Penguin or
	// Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g
	let a = 'Penguin'
	let b = 'Pumpkin'
	let regex = /P(engu|umpk)in/g
	regex.test(a) // expected output true
	regex.test(b) // expexcted output true
}