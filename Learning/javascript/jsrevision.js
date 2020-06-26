/*
//functions and function hoisting concept

square_root(10);
sqrt_n(10); //this does not work here

//function declaration
function square_root(n){                  //functions defined like this move to the top of the code
   console.log("In the first sqrt fn");   //so when this function is called before it is defined, it will still run
   //console.log(Math.sqrt(n));
   return;
}

//function expression
//function hoisting
var sqrt_n = function(){
   console.log("In second sqrt function");
   return;
}
*/


//Object Oriented Programming in js
//allows to create objects without using the class

//One way of creating javascript object (JSON) - Javascript Object Notation

//Another way
function Fruit(taste, color){
   this.color = color;  //when we use this here, it refers to the global object 
   this.taste = taste; //but after using it (constructor function) in new, this refers to the function name as an object or instance of that function
}

//new keyword
let mango = new Fruit ("sweet", "yellow")
let orange = new Fruit ("sour", "orange")

//One way
let apple = {
   taste: "sweet",
   color: "red"
}

//Creating using class keyword (ECMAScript 2015)

//Class Declaration(Not hoisted- it does not work the way functions work)
class FruitClass{
   constructor(taste, color){
      this.color = color;
      this.taste = taste;
   }
}

let kiwi = new FruitClass("sour", "green")

//Class Expression (Not hoisted)
let FruitExpression = class {
   constructor(taste, color){
      this.color = color;
      this.taste = taste;
   }
}

let kiwi2 = new FruitExpression("sour", "green")


/*
var bird = {
   x:100,
   y:10,
   color:"Blue",
   eggs:["one","two","three"],
   fly:function (){
      console.log("Bird is flying", this.x, this.y)
   }
};

//for loop
for(let i = 0; i < bird.eggs.length; i++){
   console.log(bird.eggs[i]);
}

//for each loop
bird.eggs.forEach(function(val, idx){
   console.log(idx,val);
})
*/