function incr (x) {   //since there are no data types of variables, instead of using var x, we just write the variable itself ie x
    return (x+1)
}

console.log(incr(3))
console.log(incr("hello")) 
/*hello1 is returned because if we add a string with a number, 
the number gets typecasted into a string ie "1" and gets added to the other string ie "hello" hence hello1
"a" + "b" = "ab"
*/
console.log(incr(true))
/*true is typecasted into 1 and gets added to 1 hence 2 is returned*/