//console.log(this)
function fun() {
    /*console.log(global == this) //global is a special object in which all global items are present in nodejs
    //in browser, there is no global keyword. it has a "window" object
    when we run a function by default, this of the function refers to global*/
    this.p = "something"
    return 10
}
let o1 = fun();
let o2 = new fun();
console.log(o1)
console.log(o2)
console.log(o1.p)
console.log(o2.p)