console.log(1 == "1")
/* == is known as abstract equality operator, it typecasts one variable to the other type and then checks if the two variables are same
So even if one is string and one is a number, if they are same, it will return true*/

console.log(1 === "1")
/*=== is known as strict equality operator, it checks for value as well as the type. Here it will return false*/

console.log((1 + "1") == 11) //true
console.log(("11" - 1) == 1) //false NaN(Not a Number)
console.log([] == "") //true
console.log([] == 0) //true
console.log(0 == "") //true
//"" can be typecast to 0 and [] can be typecast to ""

//unary + operator
//+ operator typecasts whatever is written next to it into a number.