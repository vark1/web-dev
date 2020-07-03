
let str = "asasdasd"                         //3 levels from null
let num = 2323                               //3 levels from null
let bool = true                              //3 levels from null
let arr = [423,324236,546,23]                //3 levels from null
let obj = {a: 10, b: 'asdasd'}               //2 levels from null
let fun = function (){console.log('rassa')}  //3 levels from null

//if x and y are not primitive 
// x == y <-- what does this mean ?
//this means that they reference to the same object in memory

//global functions

console.log("======== types ========")

console.log('typeof String', typeof String)
console.log('typeof Boolean', typeof Boolean)
console.log('typeof Number', typeof Number)
console.log('typeof Array', typeof Array)
console.log('typeof Object', typeof Object)
console.log('typeof Function', typeof Function)


console.log("======== proto chain ========")

console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)

//Everything indirectly inherits from the same string
// that obj is inherited from
// ie, in javascript, everything is essentially an object


console.log("======== prototypes ========")
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(fun.__proto__ == Function.prototype)


// String.prototype inherits from Object.prototype

//typeof Object.create(Boolean.prototype) -> ?? <- what is this
//this comes out to be Object
//If there are two entities a and b and both of their __proto__ is same, this does not mean a and b are of the same type

//prototypes are predefined keywords which are the models or blueprints from which we create things
//__proto__ is a hidden pointer that points to module from which it was created


console.log(str.charAt(4))
console.log(typeof str.charAt)
let str2 = "gfhfdfds"
console.log(str.charAt == str2.charAt) //true

str.charAt = function () {return 'X'} //does not make a difference

//You can change how default classes in js behave by going into their prototype and the changing the definition of the function
//1. find where the function exists, for eg.
//At str.charAt, we get the function. we go deeper, str.__proto__.charAt, we get the function. we go deeper, str.__proto__.__proto__.charAt, we get undefined. Which means the function is in str.__proto__
//2. This means str.__proto__ == String.prototype //true
//3. Hence the function exists in String.prototype.charAt
//4. Now if we do, String.prototype.charAt = function () { return 'X' }
//This will change how charAt works
//5. str.charAt(2), str2.charAt(3) anything will return X

String.prototype.charAt = function () { return 'X'}
//we can also use __proto__ but it is hidden and not all browsers will allow you to access __proto__
console.log(str.charAt(1))

//String.prototype contains all default string functions
//like charAt, indexOf, substring, slice etc

Array.prototype.joinOriginal = Array.prototype.join   //creating a new function in prototype 'joinOriginal' and putting 'join' init

Array.prototype.join = function () {                  //changing 'join' function in the prototype
   console.log('join called on ', this)               //now it will also print where join is called
   return this.joinOriginal(...arguments)             //...arguments is how you put in arguments
}