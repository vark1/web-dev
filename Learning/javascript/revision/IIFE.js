//Immediately invoked function expression

// (function (){
//    // console.log("Hello")

//    var a = 10;
//    var b = a/5;
//    console.log(a + b)
// })();

// console.log(a)       //not polluting the global scope


(function (l,p,r,s){
   l("3^4 = " + p(3,4))
   l("4^3 = " + p(4,3))
   l("root(2) = " + r(2))
   l("sin(10) = " + s(10))
})(console.log, Math.pow, Math.sqrt, Math.sin);

for( var i = 0; i < 10; i++){

   (function(j){
      setTimeout(function (){
         console.log(j)
      },100)
   })(i)

}

for( var i = 0; i < 10; i++){

setTimeout(console.log,100,i)
}