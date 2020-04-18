//In JS, there are no data types of variables, the data given specifies what type will it be
let num = 1;
let str = "this is a string";
let bool = true;
console.log(num);
console.log(typeof num) 
/*typeof tells the type of the data inside the variable, not of the variable.
typeof returns in string 
ie typeof 10 == "number"
true
typeof 10 == number
false*/
console.log(typeof null) //returns "object"
console.log(typeof undefined) //returns "undefined"
console.log(typeof [1,2,3]) //returns "object" ie typeof array is object
console.log(typeof true) //returns "boolean"
//characters and string are not different in java script so 'c' and "c" are both strings

num = "hello world"
console.log(num);
console.log(typeof num)

/*In console, whatever you write is executed as soon as you press enter ie line by line.
This is known as REPL: Read Execute Print Loop
This does not happen in vscode as it is script*/