{
    //moves zero to end 
    // [8,10,0,10,0,20] = [8,10,10,20,0,0] 
    let arr = [8,10,0,0,0,10,0,20] 
    let c = 0
    for(let i =0;i<arr.length;i++){
        if(arr[i]!==0){
            [arr[i],arr[c]] = [arr[c],arr[i]]
            c++
        }
    }
    console.log(arr)
}
//  find if in array parenthesis closed or not 
{

    function isBalanced(arr){
        let stack = []
        let  obj={
            ')': '(',
            '}': '{',
            ']': '['
        }
  
        for(let char of arr){
            if(char==='(' ||  char==='{' || char ==='['  ){
                stack.push(char)
            }else if(char ===')' ||  char==='}' || char ===']'){
                  let removedChar =  stack.pop()
                  if(removedChar!==obj[char]){
        
                        return false
                  }
            }
        }
        return stack.length === 0
    }
    const input1 = ['{', '(', ')', '}', '[', ']']; // Balanced
    const input2 = ['{', '(', '}', '[', ']']; // Not balanced


    // console.log(isBalanced(input1));  // Output: true
    // console.log(isBalanced(input2));  // Output: false
   
}