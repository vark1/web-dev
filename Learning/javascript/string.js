let stri="ASdasdasdas"

console.log(stri.indexOf("a"))  //position of "a"

console.log(stri.indexOf("a",4))  //position of "a" after the 4th position

console.log(stri.substr(3))  //3rd position ke aage ki string ko kaat leta h

console.log(stri.substr(3,5)) //3 se 5 letters ko kaat leta h

console.log(stri.substring(3))    //3rd position ke aage ki string ko kaat leta h (same as str.substr(3))

console.log(stri.substring(3,5))  //3rd position se 5th position tk kaat ta h

console.log(stri.slice(4,5))  //4th aur 5th wale position ke beech ko slice krta h

console.log(stri.substring(-5,-3))    //-5,-3 pe hi dekhta h which in this case is " " ie empty although substr supports -ve nos

console.log(stri.slice(-5,-3))    //ulta count krta h ie "as"

console.log(stri.split("a"))  //jaha jaha "a" h vaha split

/* + Strings + */

//declaration
//we can use "string" or 'string'
let p = 'thebuax';
let str = `This is ${p}'s string` // ` (backticks) can also be used for string. With backticks we can use templates for eg ${p} here
console.log(str)

let longstr = 'This is a \
very long string'
console.log(longstr)
console.log(str.length)

//searching in strings

let s = "This is a string"
let key = "a"
console.log(s.indexOf(key)) //returns 8 as key = "a" is at 8th position of the string s.
// If the element is not present in they string, then it returns -1
s = "This is an amazing bottle"
console.log(s.indexOf("is" , 3)) 
//only writing "is" will return 2 as "is" also exists in "This". The second argument determines where it will start searching from

let s2 = "ab aab ababab baab ab"
console.log(s2.lastIndexOf("ab"))