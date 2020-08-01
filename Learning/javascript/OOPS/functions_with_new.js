function Person(name, age) {
  this.name = name;
  this.age = age;
  return 10;
}

let p = new Person("Harry Potter", 20);
/*
If we use 'new', the function Person runs with an entire new scope where 'this' points to itself instead of window or global object (as usually 
happens in javascript, this keyword points to where ever the code is running). But with 'new', a new object is created and the 'this' keyword
points to the newly created object
If the return statement returns a primitive data like a number or a string.. it is simply ignored. Instead we get the newly created object
*/

console.log("p = " + p); //without new: we get 10, with new: we get [object Object]
console.log("p = " + JSON.stringify(p));
// console.log(name);      //wont work with 'new'
// console.log(age);       //key word and name and age will come out as not defined
