var x = 10;
function myFun() {
    var x = 20;
    x += 1;
    console.log("line5 " + x)
    if (true){
        var x = 30; 
        x += 1;
        console.log("line9 " + x);
    }
    console.log("line11 " + x);
}

myFun();
console.log("line15 " + x)

/*
var has function scope, thats why x outside the function is different from x inside the function
var does not have block scope, thats why scope in if and function myFun are same (different blocks but same scope)
*/