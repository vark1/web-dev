
function checkThis(){
   console.log(this)
}

/*
'this' IS BOUND ON RUNTIME
SO WHEN THIS PROGRAM IS RUN, THEN THE JS INTERPRETER WILL CHECK IF THE FUNCTION HAS BEEN CALLED VIA AN OBJECT, IT WILL POINT TO THE OBJECT.
IF IT HAS NOT BEEN CALLED VIA AN OBJECT, IT WILL POINT TO THE CURRENT SCOPE.

*/

obj = {
   a: 10,
   b: 'adsada',
   c: true,
   d: function(){
      console.log(this)
   },
   e: {
      l:321,
      m: 'dasda',
      n: function (){
         console.log(this)
      }
   }
}