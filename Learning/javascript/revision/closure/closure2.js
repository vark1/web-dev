
// // function counter (initial){
//    // var val = initial;
   
//  function counter (val){
//    function plus(){              //Closure scope: Inner function gets the scope of the outer function
//       console.log(++val);
//    }
//    return plus;
// }

// var c = counter(10);
// c();
// c();

function createCounter(initVal, deltaVal){
   return {
      up(){
         initVal += deltaVal;
         console.log(initVal)
      },
      down(){
         initVal -= deltaVal;
         console.log(initVal)
      }
   }
}

var c = createCounter(10, 2);
c.up();
c.up();
c.down();
