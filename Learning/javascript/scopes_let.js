let x = 10;
function myFun() {
    let x = 20;
    x += 1;
    console.log("line5 " + x)
    if (true){
        let x = 30; 
        x += 1;
        console.log("line9 " + x);
    }
    console.log("line11 " + x);
}

myFun();
console.log("line15 " + x)
/*
let has block level scoping

Also, const has block level scoping
But values cant be reassigned to const
*/