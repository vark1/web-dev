
function f1(){
    function f2(){
        return 5; //this is executed because of line 10
    }
    return f2;
}

let x = f1(); //here function f1 is called, so x is function f2
console.log(x);

let p = x(); //here function f2 is called, so p is 5
console.log(p);